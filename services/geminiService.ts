import { GoogleGenAI, Type } from "@google/genai";
import { Language, GeneratedQuestion } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });
const model = 'gemini-2.5-flash';

const quizSchema = {
  type: Type.OBJECT,
  properties: {
    question: { type: Type.STRING, description: 'The generated multiple-choice question.' },
    options: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: 'An array of 4 possible answers.'
    },
    correct_answer: { type: Type.STRING, description: 'The correct answer from the options.' },
    explanation: { type: Type.STRING, description: 'A simple explanation for why the answer is correct.' }
  },
  required: ['question', 'options', 'correct_answer', 'explanation']
};

export const explainSimply = async (topic: string, query: string, language: Language): Promise<string> => {
  if(!API_KEY) return "Gemini API key is not configured.";
  const langInstruction = language === 'ta' ? 'in simple Tamil' : 'in simple English';
  
  const prompt = `You are an expert teacher for first-generation learners in Tamil Nadu, India.
  Your goal is to make complex topics easy to understand. Use simple language and relatable, local examples where possible.
  Explain the concept from the topic "${topic}" based on the user's question: "${query}".
  Please provide the explanation ${langInstruction}. Keep it concise and clear.`;

  try {
    const response = await ai.models.generateContent({ model, contents: prompt });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API for explanation:", error);
    return language === 'en' ? "Sorry, I couldn't generate an explanation. Please try again." : "மன்னிக்கவும், என்னால் விளக்கத்தை உருவாக்க முடியவில்லை. மீண்டும் முயக்கவும்.";
  }
};

export const generateQuizQuestion = async (topic: string, language: Language): Promise<GeneratedQuestion | string> => {
  if(!API_KEY) return "Gemini API key is not configured.";
  const langInstruction = language === 'ta' ? 'Tamil' : 'English';

  const prompt = `You are an expert teacher creating a single, high-quality multiple-choice practice question for a student in Tamil Nadu.
  The question must be in ${langInstruction}.
  The topic is: "${topic}".
  Generate one question to test a key concept from this topic.`;
  
  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: quizSchema,
      }
    });
    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as GeneratedQuestion;
  } catch (error) {
    console.error("Error calling Gemini API for quiz question:", error);
    return language === 'en' ? "Sorry, I couldn't generate a question. Please try again." : "மன்னிக்கவும், என்னால் ஒரு கேள்வியை உருவாக்க முடியவில்லை. மீண்டும் முயக்கவும்.";
  }
};

export const summarizeTopic = async (topic: string, language: Language): Promise<string> => {
  if(!API_KEY) return "Gemini API key is not configured.";
  const langInstruction = language === 'ta' ? 'in Tamil' : 'in English';

  const prompt = `You are an expert teacher helping a student revise.
  Provide a concise summary of the key concepts for the topic: "${topic}".
  The summary should be easy to remember and highlight the most important points for exam preparation.
  Please provide the summary ${langInstruction}.`;

  try {
    const response = await ai.models.generateContent({ model, contents: prompt });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API for summary:", error);
    return language === 'en' ? "Sorry, I couldn't generate a summary. Please try again." : "மன்னிக்கவும், என்னால் சுருக்கத்தை உருவாக்க முடியவில்லை. மீண்டும் முயக்கவும்.";
  }
};

export const getChatbotResponse = async (chatHistory: { role: string, parts: { text: string }[] }[], userMessage: string, language: Language): Promise<string> => {
    if(!API_KEY) return "Gemini API key is not configured.";
    const langInstruction = language === 'ta' ? 'Respond in Tamil.' : 'Respond in English.';

    const systemInstruction = `You are a friendly and motivational AI study buddy for a student in Tamil Nadu using the 'Samathuva Kalvi' app. Your name is 'Kalvi Nanban' (Education Friend).
    Your primary roles are:
    1.  **Motivate:** Always be positive and encouraging. If the student feels down, provide motivational quotes or words of encouragement.
    2.  **Guide:** Help the student with study strategies, like the Pomodoro technique, or how to approach difficult subjects.
    3.  **Schedule:** If a student asks for help with a study plan, ask them which subjects they want to study and for how long, then provide a simple, easy-to-follow schedule. Do not ask for their personal schedule, just create a generic one based on their input.
    4.  **Answer General Questions:** Answer general knowledge questions, but always try to relate them back to learning if possible. Avoid answering questions that are too personal or inappropriate.
    5.  **Be Concise:** Keep your answers brief and to the point. Use simple language.
    ${langInstruction}`;

    const contents = [...chatHistory, { role: 'user', parts: [{ text: userMessage }] }];

    try {
        const response = await ai.models.generateContent({
            model,
            contents,
            config: {
                systemInstruction
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API for chatbot:", error);
        return language === 'en' ? "I'm having a little trouble connecting right now. Let's try again in a moment." : "இப்போது இணைப்பதில் எனக்கு ஒரு சிறிய சிக்கல் உள்ளது. ஒரு கணத்தில் மீண்டும் முயற்சிப்போம்.";
    }
};
