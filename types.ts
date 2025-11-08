export type Language = 'en' | 'ta';
export type Grade = 10 | 11 | 12;

export interface BilingualString {
  en: string;
  ta: string;
}

export interface Resource {
  id: string;
  type: 'pdf' | 'notes';
  title: BilingualString;
  url: string; // Placeholder for download URL
}

export interface Lesson {
  id: string;
  title: BilingualString;
  videoId: string; // YouTube Video ID
  resources: Resource[];
  description: BilingualString;
}

export interface Course {
  id: string;
  title: BilingualString;
  subject: 'Maths' | 'Science' | 'Physics' | 'Chemistry' | 'Biology' | 'Computer Science' | 'English' | 'Tamil' | 'Social Science' | 'Commerce' | 'Accountancy' | 'Computer Applications';
  grade: Grade;
  lessons: Lesson[];
  icon: string; // FontAwesome icon class
}

export interface GeneratedQuestion {
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
}

export interface User {
  name: string;
  email: string;
  grade: Grade;
}
