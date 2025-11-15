import { useMemo } from 'react';
import { Course, Grade } from '../types';

const allCourses: Course[] = [
  // ========== GRADE 10 ==========
  {
    id: '10-tamil', grade: 10, subject: 'Tamil', title: { en: 'Tamil', ta: 'தமிழ்' }, icon: 'fa-feather-alt',
    lessons: [
      { id: '10t-l1', title: { en: 'Anbai Mozhi', ta: 'அன்னை மொழியே' }, videoId: 'un0N5L93g8g', resources: [], description: {en: 'Exploring the beauty of the Tamil language.', ta: 'தமிழ் மொழியின் அழகை ஆராய்தல்.'} },
      { id: '10t-l2', title: { en: 'Uyirin Osai', ta: 'உயிரின் ஓசை' }, videoId: 'V81DlvZ8XoQ', resources: [], description: {en: 'Understanding life through poetry.', ta: 'கவிதை மூலம் வாழ்க்கையைப் புரிந்துகொள்வது.'} },
      { id: '10t-l3', title: { en: 'Grammar: Ezhuthu, Sol', ta: 'இலக்கணம்: எழுத்து, சொல்' }, videoId: 'h_ztD2hEz94', resources: [], description: {en: 'Basics of Tamil grammar.', ta: 'தமிழ் இலக்கணத்தின் அடிப்படைகள்.'} },
      { id: '10t-l4', title: { en: 'Kambaramanayam', ta: 'கம்பராமாயணம்' }, videoId: '6lYJAREBmxU', resources: [], description: {en: 'Study of the epic by Kambar.', ta: 'கம்பரின் காவியத்தைப் படித்தல்.'} },
      { id: '10t-l5', title: { en: 'Silappathikaram', ta: 'சிலப்பதிகாரம்' }, videoId: 'G_CpgTjK4yI', resources: [], description: {en: 'One of the five great epics of Tamil literature.', ta: 'தமிழ் இலக்கியத்தின் ஐம்பெரும் காப்பியங்களில் ஒன்று.'} },
      { id: '10t-l6', title: { en: 'Thirukkural', ta: 'திருக்குறள்' }, videoId: 'tKk73AZu85M', resources: [], description: {en: 'Chapters on virtue and wealth.', ta: 'அறம் மற்றும் பொருள் பற்றிய அதிகாரங்கள்.'} },
      { id: '10t-l7', title: { en: 'Prose: Dravida Mozhigal', ta: 'உரைநடை: திராவிட மொழிகள்' }, videoId: '4B_8-j343wA', resources: [], description: {en: 'About the Dravidian language family.', ta: 'திராவிட மொழிக்குடும்பம் பற்றியது.'} },
      { id: '10t-l8', title: { en: 'Poetry: Purananuru', ta: 'செய்யுள்: புறநானூறு' }, videoId: 'z4xVdVFvS5c', resources: [], description: {en: 'Heroism and life in the Sangam era.', ta: 'சங்ககால வீரம் மற்றும் வாழ்க்கை.'} },
      { id: '10t-l9', title: { en: 'Grammar: Yaappu', ta: 'இலக்கணம்: யாப்பு' }, videoId: '9g2nZ1a3pSo', resources: [], description: {en: 'The study of poetic meters.', ta: 'செய்யுள் இயற்றுவதற்கான விதிகள்.'} },
      { id: '10t-l10', title: { en: 'Modern Tamil Literature', ta: 'தற்காலத் தமிழ் இலக்கியம்' }, videoId: 'YkRSoT_h60Q', resources: [], description: {en: 'An overview of contemporary writers.', ta: 'தற்கால எழுத்தாளர்கள் பற்றிய கண்ணோட்டம்.'} },
    ],
  },
  {
    id: '10-english', grade: 10, subject: 'English', title: { en: 'English', ta: 'ஆங்கிலம்' }, icon: 'fa-book-open',
    lessons: [
      { id: '10e-l1', title: { en: 'His First Flight', ta: 'அவனின் முதல் பறத்தல்' }, videoId: 'O133_33Lavk', resources: [], description: {en: 'A story about overcoming fear.', ta: 'பயத்தை வெல்வது பற்றிய கதை.'} },
      { id: '10e-l2', title: { en: 'Poem: Life', ta: 'கவிதை: வாழ்வு' }, videoId: 'Jqn-Aw2nKpg', resources: [], description: {en: 'Analysis of the poem "Life".', ta: '“வாழ்வு” கவிதையின் பகுப்பாய்வு.'} },
      { id: '10e-l3', title: { en: 'Grammar: Active & Passive Voice', ta: 'இலக்கணம்: செய்வினை, செயப்பாட்டுவினை' }, videoId: 'C8V8f4kCTT0', resources: [], description: {en: 'Learn to convert between voice forms.', ta: 'வினை வடிவங்களுக்கு இடையில் மாற்ற கற்றுக்கொள்ளுங்கள்.'} },
      { id: '10e-l4', title: { en: 'Prose: The Tempest', ta: 'உரைநடை: புயல்' }, videoId: 'rv1Z11a7qJQ', resources: [], description: {en: 'An adaptation of Shakespeare\'s play.', ta: 'ஷேக்ஸ்பியரின் நாடகத்தின் தழுவல்.'} },
      { id: '10e-l5', title: { en: 'Poem: The Solitary Reaper', ta: 'கவிதை: தனித்த அறுவடையாளர்' }, videoId: 'qf4a0aL4aNA', resources: [], description: {en: 'Wordsworth\'s poem about a beautiful song.', ta: 'ஒரு அழகான பாடலைப் பற்றிய வேர்ட்ஸ்வொர்த்தின் கவிதை.'} },
      { id: '10e-l6', title: { en: 'Grammar: Direct and Indirect Speech', ta: 'இலக்கணம்: நேர்க்கூற்று, அயற்கூற்று' }, videoId: '0zshaNf7K3s', resources: [], description: {en: 'Reporting speech and conversations.', ta: 'பேச்சு மற்றும் உரையாடல்களை அறிவித்தல்.'} },
      { id: '10e-l7', title: { en: 'Supplementary: The Last Leaf', ta: 'துணைப்பாடம்: கடைசி இலை' }, videoId: 'k15Dx-If_vI', resources: [], description: {en: 'A story of hope and sacrifice.', ta: 'நம்பிக்கை மற்றும் தியாகத்தின் கதை.'} },
      { id: '10e-l8', title: { en: 'Writing: Letter Writing', ta: 'எழுதுதல்: கடிதம் எழுதுதல்' }, videoId: 'Ktf-92Vu64E', resources: [], description: {en: 'Formal and informal letter formats.', ta: 'முறையான மற்றும் முறைசாரா கடித வடிவங்கள்.'} },
      { id: '10e-l9', title: { en: 'Grammar: Tenses', ta: 'இலக்கணம்: காலங்கள்' }, videoId: 'o44wR4_a-Ao', resources: [], description: {en: 'Understanding past, present, and future tenses.', ta: 'இறந்த, நிகழ் மற்றும் எதிர்காலங்களைப் புரிந்துகொள்வது.'} },
      { id: '10e-l10', title: { en: 'Prose: The Night the Ghost Got In', ta: 'உரைநடை: பேய் புகுந்த இரவு' }, videoId: '4hVQx2E2JgA', resources: [], description: {en: 'A humorous story by James Thurber.', ta: 'ஜேம்ஸ் தர்பரின் ஒரு நகைச்சுவைக் கதை.'} },
    ],
  },
  {
    id: '10-maths', grade: 10, subject: 'Maths', title: { en: 'Mathematics', ta: 'கணிதம்' }, icon: 'fa-calculator',
    lessons: [
      { id: '10m-l1', title: { en: 'Relations and Functions', ta: 'உறவுகளும் சார்புகளும்' }, videoId: '5n8fP9IC_qQ', resources: [], description: {en: 'Explore properties of relations and functions.', ta: 'உறவுகள் மற்றும் சார்புகளின் பண்புகளை ஆராயுங்கள்.'} },
      { id: '10m-l2', title: { en: 'Algebra', ta: 'இயற்கணிதம்' }, videoId: 'v3iiy_--A8U', resources: [], description: {en: 'Learn about algebraic expressions and polynomials.', ta: 'இயற்கணித கோவைகள் மற்றும் பல்லுறுப்புக்கோவைகள் பற்றி அறிக.'} },
      { id: '10m-l3', title: { en: 'Geometry', ta: 'வடிவியல்' }, videoId: 'p2u59Ztk2Js', resources: [], description: {en: 'Properties of triangles and circles.', ta: 'முக்கோணங்கள் மற்றும் வட்டங்களின் பண்புகள்.'} },
      { id: '10m-l4', title: { en: 'Coordinate Geometry', ta: 'ஆயத்தொலை வடிவியல்' }, videoId: '8q3o7x9P-oU', resources: [], description: { en: 'Distance, section formula, and area of triangle.', ta: 'தூரம், பிரிவு சூத்திரம் மற்றும் முக்கோணத்தின் பரப்பளவு.' } },
      { id: '10m-l5', title: { en: 'Trigonometry', ta: 'முக்கோணவியல்' }, videoId: 'OBgBHG_234I', resources: [], description: { en: 'Trigonometric ratios and identities.', ta: 'முக்கோணவியல் விகிதங்கள் மற்றும் முற்றொருமைகள்.' } },
      { id: '10m-l6', title: { en: 'Mensuration', ta: 'அளவியல்' }, videoId: 'j-NBARrKM2U', resources: [], description: { en: 'Surface area and volume of solids.', ta: 'திடப்பொருட்களின் மேற்பரப்பு மற்றும் கன அளவு.' } },
      { id: '10m-l7', title: { en: 'Statistics', ta: 'புள்ளியியல்' }, videoId: '7g41LGAZ2uE', resources: [], description: { en: 'Measures of central tendency and dispersion.', ta: 'மையப்போக்கு மற்றும் சிதறல் அளவீடுகள்.' } },
      { id: '10m-l8', title: { en: 'Probability', ta: 'நிகழ்தகவு' }, videoId: 'YFAqM-A1mE8', resources: [], description: { en: 'Basic concepts and problems in probability.', ta: 'நிகழ்தகவின் அடிப்படைக் கருத்துக்கள் மற்றும் கணக்குகள்.' } },
      { id: '10m-l9', title: { en: 'Numbers and Sequences', ta: 'எண்களும் தொடர்முறைகளும்' }, videoId: 'uGFDWsYD_TM', resources: [], description: { en: 'Euclid\'s division lemma and arithmetic progression.', ta: 'யூக்ளிடின் வகுத்தல் துணைத் தேற்றம் மற்றும் கூட்டுத் தொடர்முறை.' } },
      { id: '10m-l10', title: { en: 'Graph Theory', ta: 'வரைபடக் கோட்பாடு' }, videoId: 'b2520j0S_bA', resources: [], description: { en: 'Introduction to graphs and their properties.', ta: 'வரைபடங்கள் மற்றும் அவற்றின் பண்புகளுக்கு அறிமுகம்.' } },
    ],
  },
  {
    id: '10-science', grade: 10, subject: 'Science', title: { en: 'Science', ta: 'அறிவியல்' }, icon: 'fa-microscope',
    lessons: [
      { id: '10s-l1', title: { en: 'Laws of Motion', ta: 'இயக்க விதிகள்' }, videoId: '2iTc5t3f0eA', resources: [], description: {en: 'Explore Newton\'s laws of motion.', ta: 'நியூட்டனின் இயக்க விதிகளை ஆராயுங்கள்.'} },
      { id: '10s-l2', title: { en: 'Optics', ta: 'ஒளியியல்' }, videoId: 'YiCc42a_iCQ', resources: [], description: {en: 'Learn about light, reflection, and refraction.', ta: 'ஒளி, பிரதிபலிப்பு மற்றும் ஒளிவிலகல் பற்றி அறிக.'} },
      { id: '10s-l3', title: { en: 'Acids, Bases and Salts', ta: 'அமிலங்கள், காரங்கள் மற்றும் உப்புகள்' }, videoId: 'cGFSaRqQO3E', resources: [], description: {en: 'Properties and reactions of acids and bases.', ta: 'அமிலங்கள் மற்றும் காரங்களின் பண்புகள் மற்றும் வினைகள்.'} },
      { id: '10s-l4', title: { en: 'Carbon and its Compounds', ta: 'கார்பனும் அதன் சேர்மங்களும்' }, videoId: 'CRpTUslvJ2I', resources: [], description: { en: 'Versatile nature of carbon and organic compounds.', ta: 'கார்பனின் பல்துறை இயல்பு மற்றும் கரிமச் சேர்மங்கள்.' } },
      { id: '10s-l5', title: { en: 'Periodic Classification of Elements', ta: 'தனிமங்களின் ஆவர்த்தன வகைப்பாடு' }, videoId: '0-2Vq_9v_68', resources: [], description: { en: 'Modern periodic table and its trends.', ta: 'நவீன ஆவர்த்தன அட்டவணை மற்றும் அதன் போக்குகள்.' } },
      { id: '10s-l6', title: { en: 'Genetics', ta: 'மரபியல்' }, videoId: 'Zt8z1MXs_1I', resources: [], description: { en: 'Heredity and evolution.', ta: 'பரம்பரை மற்றும் பரிணாமம்.' } },
      { id: '10s-l7', title: { en: 'Plant Anatomy and Physiology', ta: 'தாவர உள்ளமைப்பியல் மற்றும் செயலியல்' }, videoId: '4jY-4eB6S5g', resources: [], description: { en: 'Structure and function of plant parts.', ta: 'தாவர பாகங்களின் அமைப்பு மற்றும் செயல்பாடு.' } },
      { id: '10s-l8', title: { en: 'Human Anatomy and Physiology', ta: 'மனித உள்ளமைப்பியல் மற்றும் செயலியல்' }, videoId: 'gEUu-A2wfSE', resources: [], description: { en: 'Organ systems in the human body.', ta: 'மனித உடலில் உள்ள உறுப்பு மண்டலங்கள்.' } },
      { id: '10s-l9', title: { en: 'Electricity and Energy', ta: 'மின்னோட்டவியல்' }, videoId: 'G12-eGkKkIY', resources: [], description: { en: 'Concepts of electric current and power.', ta: 'மின்னோட்டம் மற்றும் ஆற்றல் பற்றிய கருத்துக்கள்.' } },
      { id: '10s-l10', title: { en: 'Environmental Science', ta: 'சுற்றுச்சூழல் அறிவியல்' }, videoId: '7G3eXI_DPn8', resources: [], description: { en: 'Ecosystems and conservation.', ta: 'சுற்றுச்சூழல் அமைப்புகள் மற்றும் பாதுகாப்பு.' } },
    ],
  },
  {
    id: '10-social', grade: 10, subject: 'Social Science', title: { en: 'Social Science', ta: 'சமூக அறிவியல்' }, icon: 'fa-landmark',
    lessons: [
      { id: '10ss-l1', title: { en: 'Outbreak of World War I', ta: 'முதலாம் உலகப் போரின் வெடிப்பு' }, videoId: '6_3wum_4r-w', resources: [], description: {en: 'Causes and consequences of WWI.', ta: 'முதலாம் உலகப் போரின் காரணங்கள் மற்றும் விளைவுகள்.'} },
      { id: '10ss-l2', title: { en: 'India: Location and Relief', ta: 'இந்தியா: அமைவிடம் மற்றும் இயற்கை அமைப்பு' }, videoId: 'RSaLdA3v3j0', resources: [], description: {en: 'Geographical features of India.', ta: 'இந்தியாவின் புவியியல் அம்சங்கள்.'} },
      { id: '10ss-l3', title: { en: 'Indian Constitution', ta: 'இந்திய அரசியலமைப்பு' }, videoId: 'aU2HGISgY7o', resources: [], description: {en: 'Fundamental rights and duties.', ta: 'அடிப்படை உரிமைகள் மற்றும் கடமைகள்.'} },
      { id: '10ss-l4', title: { en: 'The World After World War II', ta: 'இரண்டாம் உலகப் போருக்குப் பிந்தைய உலகம்' }, videoId: '3C5IsGjo1T4', resources: [], description: { en: 'The Cold War era and its impact.', ta: 'பனிப்போர் காலம் மற்றும் அதன் தாக்கம்.' } },
      { id: '10ss-l5', title: { en: 'Social and Religious Reform Movements', ta: 'சமூக மற்றும் சமய சீர்திருத்த இயக்கங்கள்' }, videoId: 'MvCSpvA7T4E', resources: [], description: { en: '19th-century reform movements in India.', ta: '19 ஆம் நூற்றாண்டில் இந்தியாவில் நடந்த சீர்திருத்த இயக்கங்கள்.' } },
      { id: '10ss-l6', title: { en: 'India\'s Foreign Policy', ta: 'இந்தியாவின் வெளியுறவுக் கொள்கை' }, videoId: '2F0ExbkeoCI', resources: [], description: { en: 'Principles and objectives of India\'s foreign policy.', ta: 'இந்தியாவின் வெளியுறவுக் கொள்கையின் கோட்பாடுகள் மற்றும் நோக்கங்கள்.' } },
      { id: '10ss-l7', title: { en: 'Agriculture in India', ta: 'இந்தியாவில் வேளாண்மை' }, videoId: 'XzD-fk_c7jY', resources: [], description: { en: 'Types of farming and major crops.', ta: 'விவசாய முறைகள் மற்றும் முக்கிய பயிர்கள்.' } },
      { id: '10ss-l8', title: { en: 'Nationalism in India', ta: 'இந்தியாவில் தேசியவாதம்' }, videoId: 'YLm_2u5UT2c', resources: [], description: { en: 'The rise of the Indian independence movement.', ta: 'இந்திய சுதந்திர இயக்கத்தின் எழுச்சி.' } },
      { id: '10ss-l9', title: { en: 'The Judiciary', ta: 'நீதித்துறை' }, videoId: '942a-AbkFzI', resources: [], description: { en: 'Structure and functions of the Indian judiciary.', ta: 'இந்திய நீதித்துறையின் அமைப்பு மற்றும் செயல்பாடுகள்.' } },
      { id: '10ss-l10', title: { en: 'Democracy', ta: 'ஜனநாயகம்' }, videoId: 'u4zY4p54QoM', resources: [], description: { en: 'Meaning, types, and challenges of democracy.', ta: 'ஜனநாயகத்தின் பொருள், வகைகள் மற்றும் சவால்கள்.' } },
    ],
  },

  // ========== GRADE 11 ==========
  {
    id: '11-tamil', grade: 11, subject: 'Tamil', title: { en: 'Tamil', ta: 'தமிழ்' }, icon: 'fa-feather-alt',
    lessons: [
      { id: '11t-l1', title: { en: 'Yuga Naayagan', ta: 'யுக நாயகன்' }, videoId: 'GgLpSbYc3g8', resources: [], description: { en: 'Learning about the epic hero.', ta: 'காவிய நாயகனைப் பற்றி அறிதல்.' } },
      { id: '11t-l2', title: { en: 'Grammar: Mozhi Muthal, Iruthi Ezhuthukkal', ta: 'இலக்கணம்: மொழி முதல், இறுதி எழுத்துக்கள்' }, videoId: '8pU_S-Lq28U', resources: [], description: { en: 'Understanding the first and last letters in Tamil words.', ta: 'தமிழ் வார்த்தைகளில் முதல் மற்றும் கடைசி எழுத்துக்களைப் புரிந்துகொள்வது.' } },
      { id: '11t-l3', title: { en: 'Purananuru', ta: 'புறநானூறு' }, videoId: 'jO6gEa-gQPU', resources: [], description: { en: 'An exploration of Sangam literature.', ta: 'சங்க இலக்கிய ஆய்வு.' } },
      { id: '11t-l4', title: { en: 'Aathmanamin Kelvi', ta: 'ஆத்மாநாமின் கேள்வி' }, videoId: 'Q-xR_j0Z7E0', resources: [], description: { en: 'A modern prose piece on self-reflection.', ta: 'தன்னாய்வு பற்றிய ஒரு நவீன உரைநடை.' } },
      { id: '11t-l5', title: { en: 'Thirukkural - Porutpal', ta: 'திருக்குறள் - பொருட்பால்' }, videoId: 'c0lC3nI4bYI', resources: [], description: { en: 'Studying the section on wealth and governance.', ta: 'செல்வம் மற்றும் ஆட்சி பற்றிய பகுதியை படித்தல்.' } },
    ],
  },
  {
    id: '11-english', grade: 11, subject: 'English', title: { en: 'English', ta: 'ஆங்கிலம்' }, icon: 'fa-book-open',
    lessons: [
      { id: '11e-l1', title: { en: 'The Portrait of a Lady', ta: 'ஒரு சீமாட்டியின் சித்திரம்' }, videoId: 'Qhcaekk-i_U', resources: [], description: { en: 'A story by Khushwant Singh.', ta: 'குஷ்வந்த் சிங் எழுதிய கதை.' } },
      { id: '11e-l2', title: { en: 'Poem: A Photograph', ta: 'கவிதை: ஒரு புகைப்படம்' }, videoId: 'F2oDLa6M-PY', resources: [], description: { en: 'A poem by Shirley Toulson about memory.', ta: 'நினைவைப் பற்றிய ஷர்லி டொல்சனின் கவிதை.' } },
      { id: '11e-l3', title: { en: 'Grammar: Determiners', ta: 'இலக்கணம்: தீர்மானிப்பவை' }, videoId: 'oSozSlzCpcQ', resources: [], description: { en: 'Understanding the use of articles, demonstratives, and possessives.', ta: 'கட்டுரைகள், சுட்டிக்காட்டுபவை மற்றும் உடைமைகளின் பயன்பாட்டைப் புரிந்துகொள்வது.' } },
      { id: '11e-l4', title: { en: 'Prose: The Summer of the Beautiful White Horse', ta: 'உரைநடை: அழகான வெள்ளை குதிரையின் கோடைக்காலம்' }, videoId: 'N9c7-wL_IXE', resources: [], description: { en: 'A story about two Armenian boys and a horse.', ta: 'இரண்டு ஆர்மேனிய சிறுவர்கள் மற்றும் ஒரு குதிரை பற்றிய கதை.' } },
      { id: '11e-l5', title: { en: 'Writing: Note Making', ta: 'எழுதுதல்: குறிப்பெடுத்தல்' }, videoId: 'N_KZoW2pMao', resources: [], description: { en: 'Learn the skill of summarizing and note-making.', ta: 'சுருக்கம் மற்றும் குறிப்பெடுத்தல் திறனைக் கற்றுக்கொள்ளுங்கள்.' } },
    ],
  },
  {
    id: '11-maths', grade: 11, subject: 'Maths', title: { en: 'Mathematics', ta: 'கணிதம்' }, icon: 'fa-calculator',
    lessons: [
      { id: '11m-l1', title: { en: 'Sets, Relations and Functions', ta: 'கணங்கள், தொடர்புகள் மற்றும் சார்புகள்' }, videoId: 'Q_VY-3p8sGA', resources: [], description: { en: 'Introduction to set theory and its applications.', ta: 'கணக் கோட்பாடு மற்றும் அதன் பயன்பாடுகளுக்கு அறிமுகம்.' } },
      { id: '11m-l2', title: { en: 'Basic Algebra', ta: 'அடிப்படை இயற்கணிதம்' }, videoId: 'uAzCa-c7-6s', resources: [], description: { en: 'Linear inequalities and quadratic equations.', ta: 'நேரியல் சமத்துவமின்மைகள் மற்றும் இருபடிச் சமன்பாடுகள்.' } },
      { id: '11m-l3', title: { en: 'Trigonometry', ta: 'முக்கோணவியல்' }, videoId: 'CqJg-S-yS2I', resources: [], description: { en: 'Trigonometric functions and their properties.', ta: 'முக்கோணவியல் சார்புகள் மற்றும் அவற்றின் பண்புகள்.' } },
      { id: '11m-l4', title: { en: 'Combinatorics', ta: 'சேர்வியல்' }, videoId: 'b_f0Q2VdAgM', resources: [], description: { en: 'Permutations, combinations, and mathematical induction.', ta: 'வரிசைமாற்றங்கள், சேர்வுகள் மற்றும் கணிதத் தொகுத்தறிதல்.' } },
      { id: '11m-l5', title: { en: 'Differential Calculus', ta: 'வகை நுண்கணிதம்' }, videoId: 'R821e_w2a-Y', resources: [], description: { en: 'Limits, continuity, and differentiation.', ta: 'எல்லைகள், தொடர்ச்சி மற்றும் வகைக்கெழு.' } },
    ],
  },
  {
    id: '11-physics', grade: 11, subject: 'Physics', title: { en: 'Physics', ta: 'இயற்பியல்' }, icon: 'fa-atom',
    lessons: [
      { id: '11p-l1', title: { en: 'Nature of Physical World', ta: 'இயல் உலகத்தின் தன்மையும்' }, videoId: 'M2a373dJ-vo', resources: [], description: { en: 'Introduction to Physics, its scope and excitement.', ta: 'இயற்பியல், அதன் நோக்கம் மற்றும் உற்சாகம் பற்றிய அறிமுகம்.' } },
      { id: '11p-l2', title: { en: 'Kinematics', ta: 'இயக்கவியல்' }, videoId: '3n-d1aUIpM0', resources: [], description: { en: 'Study of motion of objects.', ta: 'பொருட்களின் இயக்கத்தைப் பற்றிய ஆய்வு.' } },
      { id: '11p-l3', title: { en: 'Laws of Motion', ta: 'இயக்க விதிகள்' }, videoId: 'x6-aXS-t6aI', resources: [], description: { en: 'Understanding Newton\'s laws of motion.', ta: 'நியூட்டனின் இயக்க விதிகளைப் புரிந்துகொள்வது.' } },
      { id: '11p-l4', title: { en: 'Work, Energy and Power', ta: 'வேலை, ஆற்றல் மற்றும் திறன்' }, videoId: 'Rszd5f4gB18', resources: [], description: { en: 'Concepts of work, kinetic and potential energy.', ta: 'வேலை, இயக்க மற்றும் நிலை ஆற்றல் பற்றிய கருத்துக்கள்.' } },
      { id: '11p-l5', title: { en: 'Gravitation', ta: 'ஈர்ப்பியல்' }, videoId: 'k42_R8sAOQk', resources: [], description: { en: 'Universal law of gravitation and planetary motion.', ta: 'உலகளாவிய ஈர்ப்பு விதி மற்றும் கிரக இயக்கம்.' } },
    ],
  },
  {
    id: '11-chemistry', grade: 11, subject: 'Chemistry', title: { en: 'Chemistry', ta: 'வேதியியல்' }, icon: 'fa-flask',
    lessons: [
      { id: '11c-l1', title: { en: 'Basic Concepts of Chemistry', ta: 'வேதியியலின் அடிப்படை கருத்துக்கள்' }, videoId: 'hP-b9JTODvM', resources: [], description: { en: 'Importance of chemistry, atoms, and molecules.', ta: 'வேதியியல், அணுக்கள் மற்றும் மூலக்கூறுகளின் முக்கியத்துவம்.' } },
      { id: '11c-l2', title: { en: 'Quantum Mechanical Model of Atom', ta: 'அணுவின் குவாண்டம் இயக்கவியல் மாதிரி' }, videoId: 'zU5ot3hS-PE', resources: [], description: { en: 'Bohr\'s model and quantum numbers.', ta: 'போரின் மாதிரி மற்றும் குவாண்டம் எண்கள்.' } },
      { id: '11c-l3', title: { en: 'Periodic Classification of Elements', ta: 'தனிமங்களின் ஆவர்த்தன வகைப்பாடு' }, videoId: 'PWB4u38ocdA', resources: [], description: { en: 'Modern periodic law and periodic trends.', ta: 'நவீன ஆவர்த்தன விதி மற்றும் ஆவர்த்தன போக்குகள்.' } },
      { id: '11c-l4', title: { en: 'Chemical Bonding', ta: 'வேதிப் பிணைப்புகள்' }, videoId: 'QGT4QfG8vWc', resources: [], description: { en: 'Ionic, covalent bonds and VSEPR theory.', ta: 'அயனி, சகப்பிணைப்புகள் மற்றும் VSEPR கோட்பாடு.' } },
      { id: '11c-l5', title: { en: 'Thermodynamics', ta: 'வெப்ப இயக்கவியல்' }, videoId: 'JQl8bM3dwa4', resources: [], description: { en: 'Laws of thermodynamics and enthalpy.', ta: 'வெப்ப இயக்கவியல் விதிகள் மற்றும் எந்தால்பி.' } },
    ],
  },
  {
    id: '11-biology', grade: 11, subject: 'Biology', title: { en: 'Biology', ta: 'உயிரியல்' }, icon: 'fa-dna',
    lessons: [
      { id: '11b-l1', title: { en: 'The Living World', ta: 'உயிரி உலகம்' }, videoId: 'nQ4zD0_G4pw', resources: [], description: { en: 'Diversity in the living world and taxonomy.', ta: 'உயிரி உலகில் பன்முகத்தன்மை மற்றும் வகைப்பாட்டியல்.' } },
      { id: '11b-l2', title: { en: 'Plant Kingdom', ta: 'தாவர உலகம்' }, videoId: 'oNynAkvb-yE', resources: [], description: { en: 'Classification of plants into algae, bryophytes etc.', ta: 'தாவரங்களை ஆல்கா, பிரையோஃபைட்கள் என வகைப்படுத்துதல்.' } },
      { id: '11b-l3', title: { en: 'Cell: The Unit of Life', ta: 'செல்: ஓர் அறிமுகம்' }, videoId: 'z_g0yYyqS30', resources: [], description: { en: 'Cell theory and structure of prokaryotic and eukaryotic cells.', ta: 'செல் கோட்பாடு மற்றும் புரோகேரியோட்டிக், யூகேரியோட்டிக் செல்களின் அமைப்பு.' } },
      { id: '11b-l4', title: { en: 'Photosynthesis', ta: 'ஒளிச்சேர்க்கை' }, videoId: 'R_182QO8y3Y', resources: [], description: { en: 'Process of photosynthesis and factors affecting it.', ta: 'ஒளிச்சேர்க்கை செயல்முறை மற்றும் அதை பாதிக்கும் காரணிகள்.' } },
      { id: '11b-l5', title: { en: 'Respiration', ta: 'சுவாசம்' }, videoId: 'G1O-yQWyzcM', resources: [], description: { en: 'Cellular respiration, glycolysis and Krebs cycle.', ta: 'செல் சுவாசம், கிளைகோலிசிஸ் மற்றும் கிரெப்ஸ் சுழற்சி.' } },
    ],
  },
  {
    id: '11-cs', grade: 11, subject: 'Computer Science', title: { en: 'Computer Science', ta: 'கணினி அறிவியல்' }, icon: 'fa-laptop-code',
     lessons: [
       { id: '11cs-l1', title: { en: 'Introduction to Computers', ta: 'கணினி அறிமுகம்' }, videoId: 'jfKfPfyJRdk', resources: [], description: { en: 'Generations of computers and basic organization.', ta: 'கணினியின் தலைமுறைகள் மற்றும் அடிப்படை அமைப்பு.' } },
       { id: '11cs-l2', title: { en: 'Number Systems', ta: 'எண் முறைகள்' }, videoId: '4E0G1i2Yn_M', resources: [], description: { en: 'Binary, octal, decimal, and hexadecimal number systems.', ta: 'பைனரி, ஆக்டல், டெசிமல் மற்றும் ஹெக்ஸாடெசிமல் எண் முறைகள்.' } },
       { id: '11cs-l3', title: { en: 'Introduction to C++', ta: 'C++ ஓர் அறிமுகம்' }, videoId: 'u4YWHqMMf6A', resources: [], description: { en: 'Basics of C++ programming language.', ta: 'C++ நிரலாக்க மொழியின் அடிப்படைகள்.' } },
       { id: '11cs-l4', title: { en: 'Control Structures', ta: 'கட்டுப்பாட்டு கட்டமைப்புகள்' }, videoId: 'eHcyJ0I0-yE', resources: [], description: { en: 'If, else, for, while, and do-while loops in C++.', ta: 'C++ இல் if, else, for, while, மற்றும் do-while சுழற்சிகள்.' } },
       { id: '11cs-l5', title: { en: 'Arrays and Structures', ta: 'வரிசைகள் மற்றும் கட்டமைப்புகள்' }, videoId: 'S-71nAmTjEs', resources: [], description: { en: 'Working with arrays and user-defined data types.', ta: 'வரிசைகள் மற்றும் பயனர் வரையறுத்த தரவு வகைகளுடன் வேலை செய்தல்.' } },
    ],
  },
  {
    id: '11-commerce', grade: 11, subject: 'Commerce', title: { en: 'Commerce', ta: 'வர்த்தகம்' }, icon: 'fa-chart-line',
    lessons: [
      { id: '11com-l1', title: { en: 'Introduction to Commerce', ta: 'வர்த்தகத்தின் அறிமுகம்' }, videoId: 'xI5I9Broc-8', resources: [], description: { en: 'History of commerce and its functions.', ta: 'வர்த்தகத்தின் வரலாறு மற்றும் அதன் செயல்பாடுகள்.' } },
      { id: '11com-l2', title: { en: 'Forms of Business Organisation', ta: 'வணிக அமைப்புகளின் வடிவங்கள்' }, videoId: '2F0hN2JTqD8', resources: [], description: { en: 'Sole proprietorship, partnership, and company.', ta: 'தனிநபர் வணிகம், கூட்டாண்மை மற்றும் நிறுவனம்.' } },
      { id: '11com-l3', title: { en: 'Business Services', ta: 'வணிக சேவைகள்' }, videoId: 'r5cQYgZcWyo', resources: [], description: { en: 'Banking, insurance, and warehousing services.', ta: 'வங்கி, காப்பீடு மற்றும் கிடங்கு சேவைகள்.' } },
      { id: '11com-l4', title: { en: 'Social Responsibilities of Business', ta: 'வணிகத்தின் சமூகப் பொறுப்புகள்' }, videoId: '10g3jT4XjG0', resources: [], description: { en: 'Business ethics and corporate social responsibility.', ta: 'வணிக நெறிமுறைகள் மற்றும் பெருநிறுவன சமூகப் பொறுப்பு.' } },
      { id: '11com-l5', title: { en: 'Internal Trade', ta: 'உள்நாட்டு வர்த்தகம்' }, videoId: 'Y9Jk9Z5J2d4', resources: [], description: { en: 'Wholesale and retail trade within a country.', ta: 'ஒரு நாட்டிற்குள் மொத்த மற்றும் சில்லறை வர்த்தகம்.' } },
    ],
  },
  {
    id: '11-accountancy', grade: 11, subject: 'Accountancy', title: { en: 'Accountancy', ta: 'கணக்கியல்' }, icon: 'fa-file-invoice-dollar',
    lessons: [
       { id: '11acc-l1', title: { en: 'Introduction to Accounting', ta: 'கணக்கியல் அறிமுகம்' }, videoId: 'LpcI6i95TfA', resources: [], description: { en: 'Meaning, objectives, and basic terms in accounting.', ta: 'கணக்கியலின் பொருள், நோக்கங்கள் மற்றும் அடிப்படை சொற்கள்.' } },
       { id: '11acc-l2', title: { en: 'Books of Prime Entry', ta: 'முதன்மைப் பதிவேடுகள்' }, videoId: 'g9y_s8yB5oQ', resources: [], description: { en: 'Journal and ledger.', ta: 'குறிப்பேடு மற்றும் பேரேடு.' } },
       { id: '11acc-l3', title: { en: 'Trial Balance', ta: 'இருப்பாய்வு' }, videoId: 't3KOPl_aRO4', resources: [], description: { en: 'Preparation and objectives of a trial balance.', ta: 'இருப்பாய்வு தயாரித்தல் மற்றும் அதன் நோக்கங்கள்.' } },
       { id: '11acc-l4', title: { en: 'Bank Reconciliation Statement', ta: 'வங்கி சரிக்கட்டும் பட்டியல்' }, videoId: '0U1D38k4b_s', resources: [], description: { en: 'Need and preparation of BRS.', ta: 'BRS இன் தேவை மற்றும் தயாரிப்பு.' } },
       { id: '11acc-l5', title: { en: 'Final Accounts', ta: 'இறுதிக் கணக்குகள்' }, videoId: 'OqK5K3BZS3o', resources: [], description: { en: 'Trading and Profit & Loss Account, and Balance Sheet.', ta: 'வர்த்தக மற்றும் இலாப நட்டக் கணக்கு, மற்றும் இருப்புநிலைக் குறிப்பு.' } },
    ],
  },
  {
    id: '11-cs-app', grade: 11, subject: 'Computer Applications', title: { en: 'Computer Applications', ta: 'கணினி பயன்பாடுகள்' }, icon: 'fa-desktop',
    lessons: [
      { id: '11csapp-l1', title: { en: 'Introduction to Multimedia', ta: 'பல்லூடகம் அறிமுகம்' }, videoId: 'zN8Yd_69f5s', resources: [], description: { en: 'Components of multimedia and their applications.', ta: 'பல்லூடகத்தின் கூறுகள் மற்றும் அவற்றின் பயன்பாடுகள்.' } },
      { id: '11csapp-l2', title: { en: 'Adobe Photoshop', ta: 'அடோப் போட்டோஷாப்' }, videoId: 'BfXyV9-6bOI', resources: [], description: { en: 'Tools and techniques for image editing.', ta: 'படங்களைத் திருத்துவதற்கான கருவிகள் மற்றும் நுட்பங்கள்.' } },
      { id: '11csapp-l3', title: { en: 'HTML Basics', ta: 'HTML அடிப்படைகள்' }, videoId: 'kUMe1FH4pro', resources: [], description: { en: 'Introduction to HTML tags for web page creation.', ta: 'இணையப் பக்கங்களை உருவாக்குவதற்கான HTML குறிச்சொற்களுக்கு அறிமுகம்.' } },
      { id: '11csapp-l4', title: { en: 'CSS Introduction', ta: 'CSS அறிமுகம்' }, videoId: 'OEV8gHsAayY', resources: [], description: { en: 'Styling web pages using Cascading Style Sheets.', ta: 'கேஸ்கேடிங் ஸ்டைல் ஷீட்களைப் பயன்படுத்தி இணையப் பக்கங்களை வடிவமைத்தல்.' } },
      { id: '11csapp-l5', title: { en: 'JavaScript Fundamentals', ta: 'ஜாவாஸ்கிரிப்ட் அடிப்படைகள்' }, videoId: 'W6NZfCO5eCU', resources: [], description: { en: 'Adding interactivity to web pages with JavaScript.', ta: 'ஜாவாஸ்கிரிப்ட் மூலம் இணையப் பக்கங்களுக்கு ஊடாடும் தன்மையைச் சேர்த்தல்.' } },
    ],
  },

  // ========== GRADE 12 ==========
   {
    id: '12-tamil', grade: 12, subject: 'Tamil', title: { en: 'Tamil', ta: 'தமிழ்' }, icon: 'fa-feather-alt',
    lessons: [
      { id: '12t-l1', title: { en: 'Ilaiya Thagaimaikku', ta: 'இளைய தகைமைக்கு' }, videoId: '7p5S1_8e8-I', resources: [], description: { en: 'A poem addressing the youth.', ta: 'இளைஞர்களை நோக்கிய ஒரு கவிதை.' } },
      { id: '12t-l2', title: { en: 'Grammar: Uyir, Mei Ezhuthukkal', ta: 'இலக்கணம்: உயிர், மெய் எழுத்துக்கள்' }, videoId: '2q076e-pyuY', resources: [], description: { en: 'Detailed study of vowels and consonants.', ta: 'உயிர் மற்றும் மெய் எழுத்துக்கள் பற்றிய விரிவான ஆய்வு.' } },
      { id: '12t-l3', title: { en: 'Kamba Ramayanam - Ayothya Kandam', ta: 'கம்ப ராமாயணம் - அயோத்தியா காண்டம்' }, videoId: 'Y9j2F_n4p3E', resources: [], description: { en: 'Exploring the Ayodhya chapter of Kambar\'s epic.', ta: 'கம்பரின் காவியத்தின் அயோத்தியா காண்டத்தை ஆராய்தல்.' } },
      { id: '12t-l4', title: { en: 'Prose: Paarathiyar', ta: 'உரைநடை: பாரதியார்' }, videoId: 'f5f0W_i_9m4', resources: [], description: { en: 'Life and works of the great poet Subramania Bharati.', ta: 'மகாகவி சுப்ரமணிய பாரதியின் வாழ்க்கை மற்றும் படைப்புகள்.' } },
      { id: '12t-l5', title: { en: 'Thirukkural - Arathuppal', ta: 'திருக்குறள் - அறத்துப்பால்' }, videoId: '9g2nZ1a3pSo', resources: [], description: { en: 'Studying the section on virtue and righteousness.', ta: 'அறம் மற்றும் நீதி பற்றிய பகுதியை படித்தல்.' } },
    ],
  },
  {
    id: '12-english', grade: 12, subject: 'English', title: { en: 'English', ta: 'ஆங்கிலம்' }, icon: 'fa-book-open',
    lessons: [
      { id: '12e-l1', title: { en: 'Two Gentlemen of Verona', ta: 'வெரோனாவின் இரண்டு பண்பாளர்கள்' }, videoId: 'BfXyV9-6bOI', resources: [], description: { en: 'A story of brotherhood and sacrifice.', ta: 'சகோதரத்துவம் மற்றும் தியாகத்தின் கதை.' } },
      { id: '12e-l2', title: { en: 'Poem: The Castle', ta: 'கவிதை: கோட்டை' }, videoId: 'gM5-04Ma4kQ', resources: [], description: { en: 'An allegorical poem by Edwin Muir.', ta: 'எட்வின் முயரின் ஒரு உருவகக் கவிதை.' } },
      { id: '12e-l3', title: { en: 'Grammar: Modals', ta: 'இலக்கணம்: துணைவினைச்சொற்கள்' }, videoId: 'q-REtT35u-0', resources: [], description: { en: 'Understanding the use of modal auxiliary verbs.', ta: 'துணைவினைச்சொற்களின் பயன்பாட்டைப் புரிந்துகொள்வது.' } },
      { id: '12e-l4', title: { en: 'Prose: A Nice Cup of Tea', ta: 'உரைநடை: ஒரு நல்ல கப் தேநீர்' }, videoId: 'm4uA6Py_42c', resources: [], description: { en: 'An essay by George Orwell on making the perfect tea.', ta: 'சரியான தேநீர் தயாரிப்பது குறித்த ஜார்ஜ் ஆர்வெல்லின் கட்டுரை.' } },
      { id: '12e-l5', title: { en: 'Writing: Report Writing', ta: 'எழுதுதல்: அறிக்கை எழுதுதல்' }, videoId: '13wZ-04-Evk', resources: [], description: { en: 'Learning the format and structure of reports.', ta: 'அறிக்கைகளின் வடிவம் மற்றும் கட்டமைப்பைக் கற்றுக்கொள்வது.' } },
    ],
  },
  {
    id: '12-maths', grade: 12, subject: 'Maths', title: { en: 'Mathematics', ta: 'கணிதம்' }, icon: 'fa-calculator',
    lessons: [
      { id: '12m-l1', title: { en: 'Applications of Matrices and Determinants', ta: 'அணிகள் மற்றும் அணிக்கோவைகளின் பயன்பாடுகள்' }, videoId: 'lk2-411a-oA', resources: [], description: { en: 'Solving systems of linear equations.', ta: 'நேரியல் சமன்பாடுகளின் அமைப்புகளைத் தீர்த்தல்.' } },
      { id: '12m-l2', title: { en: 'Complex Numbers', ta: 'கலப்பெண்கள்' }, videoId: 'FLntKgsb_fM', resources: [], description: { en: 'Properties and geometry of complex numbers.', ta: 'கலப்பெண்களின் பண்புகள் மற்றும் வடிவியல்.' } },
      { id: '12m-l3', title: { en: 'Theory of Equations', ta: 'சமன்பாட்டியல்' }, videoId: 'R90Jbu41vSg', resources: [], description: { en: 'Finding roots of polynomial equations.', ta: 'பல்லுறுப்புக்கோவை சமன்பாடுகளின் மூலங்களைக் கண்டறிதல்.' } },
      { id: '12m-l4', title: { en: 'Integral Calculus', ta: 'தொகை நுண்கணிதம்' }, videoId: '80GPLOQf_Yc', resources: [], description: { en: 'Indefinite and definite integrals and their properties.', ta: 'வரையறையற்ற மற்றும் வரையறுக்கப்பட்ட தொகையீடுகள் மற்றும் அவற்றின் பண்புகள்.' } },
      { id: '12m-l5', title: { en: 'Probability Distributions', ta: 'நிகழ்தகவு பரவல்கள்' }, videoId: 'y-8O1DAffts', resources: [], description: { en: 'Random variables, binomial, and normal distributions.', ta: 'சமவாய்ப்பு மாறிகள், ஈருறுப்பு மற்றும் இயல்நிலைப் பரவல்கள்.' } },
    ],
  },
  {
    id: '12-physics', grade: 12, subject: 'Physics', title: { en: 'Physics', ta: 'இயற்பியல்' }, icon: 'fa-atom',
    lessons: [
      { id: '12p-l1', title: { en: 'Electrostatics', ta: 'நிலைமின்னியல்' }, videoId: 'b-gUK6V_Y-c', resources: [], description: { en: 'Electric charge, field, and potential.', ta: 'மின்னூட்டம், மின்புலம் மற்றும் மின்னழுத்தம்.' } },
      { id: '12p-l2', title: { en: 'Current Electricity', ta: 'மின்னோட்டவியல்' }, videoId: 'b-gUK6V_Y-c', resources: [], description: { en: 'Ohm\'s law, Kirchhoff\'s laws, and electrical devices.', ta: 'ஓம் விதி, கிர்ச்சாஃப் விதிகள் மற்றும் மின்சாதனங்கள்.' } },
      { id: '12p-l3', title: { en: 'Electromagnetic Induction', ta: 'மின்காந்தத் தூண்டல்' }, videoId: 'e-g2fB2I2-Y', resources: [], description: { en: 'Faraday\'s laws, Lenz\'s law, and AC generator.', ta: 'பாரடே விதிகள், லென்ஸ் விதி மற்றும் AC ஜெனரேட்டர்.' } },
      { id: '12p-l4', title: { en: 'Optics', ta: 'ஒளியியல்' }, videoId: '98204-Tf2wg', resources: [], description: { en: 'Reflection, refraction, interference, and diffraction.', ta: 'பிரதிபலிப்பு, ஒளிவிலகல், குறுக்கீட்டு விளைவு மற்றும் விளிம்பு விளைவு.' } },
      { id: '12p-l5', title: { en: 'Semiconductor Electronics', ta: 'குறைக்கடத்தி மின்னணுவியல்' }, videoId: 'Y-8IeAb_7Tk', resources: [], description: { en: 'p-n junction diodes and transistors.', ta: 'p-n சந்தி டயோடுகள் மற்றும் டிரான்சிஸ்டர்கள்.' } },
    ],
  },
  {
    id: '12-chemistry', grade: 12, subject: 'Chemistry', title: { en: 'Chemistry', ta: 'வேதியியல்' }, icon: 'fa-flask',
    lessons: [
      { id: '12c-l1', title: { en: 'Solid State', ta: 'திண்ம நிலைமை' }, videoId: '5kRIyJa4a-A', resources: [], description: { en: 'Classification of solids and crystal lattices.', ta: 'திடப்பொருட்களின் வகைப்பாடு மற்றும் படிகக்கூடுகள்.' } },
      { id: '12c-l2', title: { en: 'p-Block Elements - II', ta: 'p-தொகுதி தனிமங்கள் - II' }, videoId: 'JgVCMs_G1eA', resources: [], description: { en: 'Group 16, 17, and 18 elements.', ta: 'தொகுதி 16, 17, மற்றும் 18 தனிமங்கள்.' } },
      { id: '12c-l3', title: { en: 'd and f Block Elements', ta: 'd மற்றும் f தொகுதி தனிமங்கள்' }, videoId: 'XmYLiOERhdo', resources: [], description: { en: 'Properties of transition and inner transition elements.', ta: 'இடைநிலை மற்றும் உள் இடைநிலை தனிமங்களின் பண்புகள்.' } },
      { id: '12c-l4', title: { en: 'Coordination Chemistry', ta: 'அணைவுச் சேர்மங்கள்' }, videoId: 'P9t6BazgRgA', resources: [], description: { en: 'Werner\'s theory and isomerism in coordination compounds.', ta: 'வெர்னரின் கோட்பாடு மற்றும் அணைவுச் சேர்மங்களில் உள்ள மாற்றியம்.' } },
      { id: '12c-l5', title: { en: 'Biomolecules', ta: 'உயிர்வேதி மூலக்கூறுகள்' }, videoId: 't3u-nU-cOi8', resources: [], description: { en: 'Carbohydrates, proteins, vitamins, and nucleic acids.', ta: 'கார்போஹைட்ரேட்டுகள், புரதங்கள், வைட்டமின்கள் மற்றும் நியூக்ளிக் அமிலங்கள்.' } },
    ],
  },
  {
    id: '12-biology', grade: 12, subject: 'Biology', title: { en: 'Biology', ta: 'உயிரியல்' }, icon: 'fa-dna',
    lessons: [
      { id: '12b-l1', title: { en: 'Reproduction in Organisms', ta: 'உயிரிகளில் இனப்பெருக்கம்' }, videoId: 'w-XoWp7M7js', resources: [], description: { en: 'Asexual and sexual reproduction.', ta: 'பாலிலா மற்றும் பால் இனப்பெருக்கம்.' } },
      { id: '12b-l2', title: { en: 'Human Reproduction', ta: 'மனித இனப்பெருக்கம்' }, videoId: 'bZhh-IZ3jZY', resources: [], description: { en: 'Male and female reproductive systems.', ta: 'ஆண் மற்றும் பெண் இனப்பெருக்க அமைப்புகள்.' } },
      { id: '12b-l3', title: { en: 'Principles of Inheritance and Variation', ta: 'மரபு கடத்தல் கோட்பாடுகள் மற்றும் மாறுபாடுகள்' }, videoId: 'kPzhbO0-d0Q', resources: [], description: { en: 'Mendel\'s laws and genetic disorders.', ta: 'மெண்டலின் விதிகள் மற்றும் மரபணு கோளாறுகள்.' } },
      { id: '12b-l4', title: { en: 'Molecular Basis of Inheritance', ta: 'மூலக்கூறு மரபியல்' }, videoId: 'uXdzH4KwA8Q', resources: [], description: { en: 'Structure of DNA, replication, and transcription.', ta: 'DNA இன் அமைப்பு, நகலெடுத்தல் மற்றும் படியெடுத்தல்.' } },
      { id: '12b-l5', title: { en: 'Biotechnology: Principles and Processes', ta: 'உயிரி தொழில்நுட்பவியல்: நெறிமுறைகளும் செயல்முறைகளும்' }, videoId: 'eDbhVEwYpTY', resources: [], description: { en: 'Genetic engineering and its applications.', ta: 'மரபணு பொறியியல் மற்றும் அதன் பயன்பாடுகள்.' } },
    ],
  },
  {
    id: '12-compsci', grade: 12, subject: 'Computer Science', title: { en: 'Computer Science', ta: 'கணினி அறிவியல்' }, icon: 'fa-laptop-code',
    lessons: [
      { id: '12cs-l1', title: { en: 'Python - Variables and Operators', ta: 'பைத்தான் - மாறிகள் மற்றும் செயற்குறிகள்' }, videoId: 'nbpdGo0Ppm4', resources: [], description: { en: 'Fundamentals of Python programming.', ta: 'பைத்தான் நிரலாக்கத்தின் அடிப்படைகள்.' } },
      { id: '12cs-l2', title: { en: 'Control Structures', ta: 'கட்டுப்பாட்டு கட்டமைப்புகள்' }, videoId: 'aJ-G320a24U', resources: [], description: { en: 'Conditional and looping statements in Python.', ta: 'பைத்தானில் நிபந்தனை மற்றும் சுழற்சி கூற்றுகள்.' } },
      { id: '12cs-l3', title: { en: 'Python Functions', ta: 'பைத்தான் செயற்கூறுகள்' }, videoId: '9Os0o3wzS_I', resources: [], description: { en: 'Defining and calling functions in Python.', ta: 'பைத்தானில் செயற்கூறுகளை வரையறுத்தல் மற்றும் அழைத்தல்.' } },
      { id: '12cs-l4', title: { en: 'Data Structures: Lists, Tuples, Sets', ta: 'தரவு கட்டமைப்புகள்: லிஸ்ட், டப்பிள், செட்' }, videoId: 'R-HLU9A50aE', resources: [], description: { en: 'Working with collection data types in Python.', ta: 'பைத்தானில் சேகரிப்பு தரவு வகைகளுடன் வேலை செய்தல்.' } },
      { id: '12cs-l5', title: { en: 'Introduction to SQL', ta: 'SQL அறிமுகம்' }, videoId: 'HXV3zeQKqGY', resources: [], description: { en: 'Basic SQL commands for database management.', ta: 'தரவுத்தள நிர்வாகத்திற்கான அடிப்படை SQL கட்டளைகள்.' } },
    ],
  },
   {
    id: '12-cs-app', grade: 12, subject: 'Computer Applications', title: { en: 'Computer Applications', ta: 'கணினி பயன்பாடுகள்' }, icon: 'fa-desktop',
    lessons: [
      { id: '12csapp-l1', title: { en: 'PHP Basics', ta: 'PHP அடிப்படைகள்' }, videoId: 'zN8Yd_69f5s', resources: [], description: { en: 'Introduction to server-side scripting with PHP.', ta: 'PHP உடன் சர்வர் பக்க ஸ்கிரிப்டிங்கிற்கு அறிமுகம்.' } },
      { id: '12csapp-l2', title: { en: 'MySQL Database', ta: 'MySQL தரவுத்தளம்' }, videoId: 'E_63S3-x4Fk', resources: [], description: { en: 'Connecting PHP with MySQL databases.', ta: 'PHP ஐ MySQL தரவுத்தளங்களுடன் இணைத்தல்.' } },
      { id: '12csapp-l3', title: { en: 'Network Security', ta: 'நெட்வொர்க் பாதுகாப்பு' }, videoId: 'inWWhr5tnEA', resources: [], description: { en: 'Concepts of cryptography and cybersecurity.', ta: 'குறியாக்கவியல் மற்றும் சைபர் பாதுகாப்பு பற்றிய கருத்துக்கள்.' } },
      { id: '12csapp-l4', title: { en: 'E-commerce', ta: 'மின்னணு வர்த்தகம்' }, videoId: 'OqK5K3BZS3o', resources: [], description: { en: 'Fundamentals of electronic commerce.', ta: 'மின்னணு வர்த்தகத்தின் அடிப்படைகள்.' } },
      { id: '12csapp-l5', title: { en: 'Web Development Frameworks', ta: 'வலை மேம்பாட்டு கட்டமைப்புகள்' }, videoId: 'S-71nAmTjEs', resources: [], description: { en: 'An overview of popular web frameworks.', ta: 'பிரபலமான வலை கட்டமைப்புகளின் கண்ணோட்டம்.' } },
    ],
  },
  {
    id: '12-commerce', grade: 12, subject: 'Commerce', title: { en: 'Commerce', ta: 'வர்த்தகம்' }, icon: 'fa-chart-line',
    lessons: [
      { id: '12com-l1', title: { en: 'Principles of Management', ta: 'மேலாண்மைத் தத்துவங்கள்' }, videoId: 'xI5I9Broc-8', resources: [], description: { en: 'Fayol\'s principles of management.', ta: 'ஃபயோலின் மேலாண்மைக் கோட்பாடுகள்.' } },
      { id: '12com-l2', title: { en: 'Financial Markets', ta: 'நிதிச் சந்தைகள்' }, videoId: 'b_f0Q2VdAgM', resources: [], description: { en: 'Money market and capital market.', ta: 'பணச் சந்தை மற்றும் மூலதனச் சந்தை.' } },
      { id: '12com-l3', title: { en: 'Marketing', ta: 'சந்தையியல்' }, videoId: 'R821e_w2a-Y', resources: [], description: { en: 'Functions of marketing and marketing mix.', ta: 'சந்தையியலின் செயல்பாடுகள் மற்றும் சந்தையியல் கலவை.' } },
      { id: '12com-l4', title: { en: 'Consumer Protection', ta: 'நுகர்வோர் பாதுகாப்பு' }, videoId: 'Q_VY-3p8sGA', resources: [], description: { en: 'Consumer rights and responsibilities.', ta: 'நுகர்வோர் உரிமைகள் மற்றும் பொறுப்புகள்.' } },
      { id: '12com-l5', title: { en: 'Entrepreneurship Development', ta: 'தொழில்முனைவோர் மேம்பாடு' }, videoId: 'uAzCa-c7-6s', resources: [], description: { en: 'Concept, functions, and role of an entrepreneur.', ta: 'தொழில்முனைவோரின் கருத்து, செயல்பாடுகள் மற்றும் பங்கு.' } },
    ],
  },
  {
    id: '12-accountancy', grade: 12, subject: 'Accountancy', title: { en: 'Accountancy', ta: 'கணக்கியல்' }, icon: 'fa-file-invoice-dollar',
    lessons: [
       { id: '12acc-l1', title: { en: 'Accounts of Not-for-Profit Organisation', ta: 'இலாப நோக்கமற்ற அமைப்புகளின் கணக்குகள்' }, videoId: 'LpcI6i95TfA', resources: [], description: { en: 'Preparation of financial statements for NPOs.', ta: 'NPO களுக்கான நிதிநிலை அறிக்கைகளைத் தயாரித்தல்.' } },
       { id: '12acc-l2', title: { en: 'Partnership Accounts - Fundamentals', ta: 'கூட்டாண்மை கணக்குகள் - அடிப்படைகள்' }, videoId: 'CqJg-S-yS2I', resources: [], description: { en: 'Partnership deed and profit and loss appropriation.', ta: 'கூட்டாண்மை ஒப்பாவணம் மற்றும் இலாப நட்டப் பகிர்வு.' } },
       { id: '12acc-l3', title: { en: 'Admission of a Partner', ta: 'கூட்டாளி சேர்ப்பு' }, videoId: 'R90Jbu41vSg', resources: [], description: { en: 'Goodwill treatment and revaluation of assets.', ta: 'நற்பெயர் கணக்கீடு மற்றும் சொத்துக்களை மறுமதிப்பீடு செய்தல்.' } },
       { id: '12acc-l4', title: { en: 'Company Accounts', ta: 'நிறுமக் கணக்குகள்' }, videoId: 'FLntKgsb_fM', resources: [], description: { en: 'Issue of shares and debentures.', ta: 'பங்குகள் மற்றும் கடன் பத்திரங்களை வெளியிடுதல்.' } },
       { id: '12acc-l5', title: { en: 'Ratio Analysis', ta: 'விகிதப் பகுப்பாய்வு' }, videoId: 'y-8O1DAffts', resources: [], description: { en: 'Liquidity, solvency, and profitability ratios.', ta: 'நீர்மை, தீர்வு மற்றும் இலாப விகிதங்கள்.' } },
    ],
  },
];


export const useMockData = (grade: Grade) => {
  const courses = useMemo(() => {
    // Grade 10 subjects
    if (grade === 10) {
      const subjects = ['Tamil', 'English', 'Maths', 'Science', 'Social Science'];
      return allCourses.filter(c => c.grade === 10 && subjects.includes(c.subject));
    }
    // Grade 11 & 12 subjects
    if (grade === 11 || grade === 12) {
      const subjects = ['Tamil', 'English', 'Maths', 'Physics', 'Chemistry', 'Accountancy', 'Commerce', 'Computer Science', 'Computer Applications', 'Biology'];
      return allCourses.filter(c => c.grade === grade && subjects.includes(c.subject));
    }
    return [];
  }, [grade]);
  return { courses };
};