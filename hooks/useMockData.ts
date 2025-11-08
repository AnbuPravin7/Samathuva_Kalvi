import { useMemo } from 'react';
import { Course, Grade } from '../types';

const allCourses: Course[] = [
  // ========== GRADE 10 ==========
  {
    id: '10-tamil', grade: 10, subject: 'Tamil', title: { en: 'Tamil', ta: 'தமிழ்' }, icon: 'fa-feather-alt',
    lessons: [
      { id: '10t-l1', title: { en: 'Anbai Mozhi', ta: 'அன்னை மொழியே' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Exploring the beauty of the Tamil language.', ta: 'தமிழ் மொழியின் அழகை ஆராய்தல்.'} },
      { id: '10t-l2', title: { en: 'Uyirin Osai', ta: 'உயிரின் ஓசை' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Understanding life through poetry.', ta: 'கவிதை மூலம் வாழ்க்கையைப் புரிந்துகொள்வது.'} },
      { id: '10t-l3', title: { en: 'Grammar: Ezhuthu, Sol', ta: 'இலக்கணம்: எழுத்து, சொல்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Basics of Tamil grammar.', ta: 'தமிழ் இலக்கணத்தின் அடிப்படைகள்.'} },
    ],
  },
  {
    id: '10-english', grade: 10, subject: 'English', title: { en: 'English', ta: 'ஆங்கிலம்' }, icon: 'fa-book-open',
    lessons: [
      { id: '10e-l1', title: { en: 'His First Flight', ta: 'அவரது முதல் விமானம்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'A story about overcoming fear.', ta: 'பயத்தை வெல்வது பற்றிய கதை.'} },
      { id: '10e-l2', title: { en: 'Poem: Life', ta: 'கவிதை: வாழ்க்கை' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Analysis of the poem "Life".', ta: '“வாழ்க்கை” கவிதையின் பகுப்பாய்வு.'} },
      { id: '10e-l3', title: { en: 'Grammar: Active & Passive Voice', ta: 'இலக்கணம்: செயப்படுபொருள் குன்றிய மற்றும் குன்றா வினை' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Learn to convert between voice forms.', ta: 'குரல் வடிவங்களுக்கு இடையில் மாற்ற கற்றுக்கொள்ளுங்கள்.'} },
    ],
  },
  {
    id: '10-maths', grade: 10, subject: 'Maths', title: { en: 'Mathematics', ta: 'கணிதம்' }, icon: 'fa-calculator',
    lessons: [
      { id: '10m-l1', title: { en: 'Relations and Functions', ta: 'உறவுகளும் சார்புகளும்' }, videoId: '5n8fP9IC_qQ', resources: [], description: {en: 'Explore properties of relations and functions.', ta: 'உறவுகள் மற்றும் சார்புகளின் பண்புகளை ஆராயுங்கள்.'} },
      { id: '10m-l2', title: { en: 'Algebra', ta: 'இயற்கணிதம்' }, videoId: 'v3iiy_--A8U', resources: [], description: {en: 'Learn about algebraic expressions and polynomials.', ta: 'இயற்கணித கோவைகள் மற்றும் பல்லுறுப்புக்கோவைகள் பற்றி அறிக.'} },
      { id: '10m-l3', title: { en: 'Geometry', ta: 'வடிவியல்' }, videoId: 'p2u59Ztk2Js', resources: [], description: {en: 'Properties of triangles and circles.', ta: 'முக்கோணங்கள் மற்றும் வட்டங்களின் பண்புகள்.'} },
    ],
  },
  {
    id: '10-science', grade: 10, subject: 'Science', title: { en: 'Science', ta: 'அறிவியல்' }, icon: 'fa-microscope',
    lessons: [
      { id: '10s-l1', title: { en: 'Laws of Motion', ta: 'இயக்க விதிகள்' }, videoId: '2iTc5t3f0eA', resources: [], description: {en: 'Explore Newton\'s laws of motion.', ta: 'நியூட்டனின் இயக்க விதிகளை ஆராயுங்கள்.'} },
      { id: '10s-l2', title: { en: 'Optics', ta: 'ஒளியியல்' }, videoId: 'YiCc42a_iCQ', resources: [], description: {en: 'Learn about light, reflection, and refraction.', ta: 'ஒளி, பிரதிபலிப்பு மற்றும் ஒளிவிலகல் பற்றி அறிக.'} },
      { id: '10s-l3', title: { en: 'Acids, Bases and Salts', ta: 'அமிலங்கள், காரங்கள் மற்றும் உப்புகள்' }, videoId: 'cGFSaRqQO3E', resources: [], description: {en: 'Properties and reactions of acids and bases.', ta: 'அமிலங்கள் மற்றும் காரங்களின் பண்புகள் மற்றும் வினைகள்.'} },
    ],
  },
  {
    id: '10-social', grade: 10, subject: 'Social Science', title: { en: 'Social Science', ta: 'சமூக அறிவியல்' }, icon: 'fa-landmark',
    lessons: [
      { id: '10ss-l1', title: { en: 'Outbreak of World War I', ta: 'முதலாம் உலகப் போரின் வெடிப்பு' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Causes and consequences of WWI.', ta: 'முதலாம் உலகப் போரின் காரணங்கள் மற்றும் விளைவுகள்.'} },
      { id: '10ss-l2', title: { en: 'India: Location and Relief', ta: 'இந்தியா: இருப்பிடம் மற்றும் நிவாரணம்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Geographical features of India.', ta: 'இந்தியாவின் புவியியல் அம்சங்கள்.'} },
      { id: '10ss-l3', title: { en: 'Indian Constitution', ta: 'இந்திய அரசியலமைப்பு' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Fundamental rights and duties.', ta: 'அடிப்படை உரிமைகள் மற்றும் கடமைகள்.'} },
    ],
  },

  // ========== GRADE 11 ==========
  {
    id: '11-physics', grade: 11, subject: 'Physics', title: { en: 'Physics', ta: 'இயற்பியல்' }, icon: 'fa-atom',
    lessons: [
      { id: '11p-l1', title: { en: 'Units and Measurement', ta: 'அலகுகள் மற்றும் அளவீடு' }, videoId: '2NSZ8jsvAUc', resources: [], description: {en: 'Understand physical quantities and the SI system.', ta: 'இயற்பியல் அளவுகள் மற்றும் SI அமைப்பைப் புரிந்து கொள்ளுங்கள்.'} },
      { id: '11p-l2', title: { en: 'Motion in a Straight Line', ta: 'நேர்கோட்டில் இயக்கம்' }, videoId: '89yt2P61-sE', resources: [], description: {en: 'Kinematics concepts like velocity and acceleration.', ta: 'திசைவேகம் மற்றும் முடுக்கம் போன்ற இயக்கவியல் கருத்துக்கள்.'} },
      { id: '11p-l3', title: { en: 'Laws of Motion', ta: 'இயக்க விதிகள்' }, videoId: 'bF7W03saU88', resources: [], description: {en: 'Newton\'s three laws of motion.', ta: 'நியூட்டனின் மூன்று இயக்க விதிகள்.'} },
    ],
  },
  {
    id: '11-chemistry', grade: 11, subject: 'Chemistry', title: { en: 'Chemistry', ta: 'வேதியியல்' }, icon: 'fa-flask',
    lessons: [
      { id: '11c-l1', title: { en: 'Basic Concepts of Chemistry', ta: 'வேதியியலின் அடிப்படைக் கருத்துக்கள்' }, videoId: 'FCtOfb24d5s', resources: [], description: {en: 'Introduction to atoms, molecules, and stoichiometry.', ta: 'அணுக்கள், மூலக்கூறுகள் மற்றும் στοιச்சியோமெட்ரி பற்றிய அறிமுகம்.'} },
      { id: '11c-l2', title: { en: 'States of Matter', ta: 'பருப்பொருளின் நிலைகள்' }, videoId: 'i8j6-WqWMfE', resources: [], description: {en: 'Learn about gases, liquids, and solids.', ta: 'வாயுக்கள், திரவங்கள் மற்றும் திடப்பொருள்கள் பற்றி அறிக.'} },
      { id: '11c-l3', title: { en: 'Chemical Bonding', ta: 'வேதிப் பிணைப்பு' }, videoId: 'cqe82a93_lA', resources: [], description: {en: 'Understanding ionic and covalent bonds.', ta: 'அயனி மற்றும் சக பிணைப்புகளைப் புரிந்துகொள்வது.'} },
    ],
  },
  {
    id: '11-commerce', grade: 11, subject: 'Commerce', title: { en: 'Commerce', ta: 'வர்த்தகம்' }, icon: 'fa-chart-line',
    lessons: [
      { id: '11com-l1', title: { en: 'Introduction to Commerce', ta: 'வர்த்தக அறிமுகம்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Fundamentals of business and trade.', ta: 'வணிகம் மற்றும் வர்த்தகத்தின் அடிப்படைகள்.'} },
      { id: '11com-l2', title: { en: 'Forms of Business Organisation', ta: 'வணிக அமைப்பின் வடிவங்கள்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Sole proprietorship, partnership, etc.', ta: 'தனிநபர் உரிமை, கூட்டாண்மை போன்றவை.'} },
      { id: '11com-l3', title: { en: 'Banking', ta: 'வங்கியியல்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Types of banks and their functions.', ta: 'வங்கிகளின் வகைகள் மற்றும் அவற்றின் செயல்பாடுகள்.'} },
    ],
  },
  {
    id: '11-accountancy', grade: 11, subject: 'Accountancy', title: { en: 'Accountancy', ta: 'கணக்கியல்' }, icon: 'fa-file-invoice-dollar',
    lessons: [
      { id: '11acc-l1', title: { en: 'Basics of Accounting', ta: 'கணக்கியலின் அடிப்படைகள்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Introduction to accounting principles.', ta: 'கணக்கியல் கொள்கைகளுக்கான அறிமுகம்.'} },
      { id: '11acc-l2', title: { en: 'Journal and Ledger', ta: 'குறிப்பேடு மற்றும் பேரேடு' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'The process of recording transactions.', ta: 'பரிவர்த்தனைகளைப் பதிவு செய்யும் செயல்முறை.'} },
      { id: '11acc-l3', title: { en: 'Trial Balance', ta: 'இருப்பாய்வு' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Preparing and understanding trial balance.', ta: 'இருப்பாய்வு தயாரித்தல் மற்றும் புரிந்துகொள்ளுதல்.'} },
    ],
  },
  {
    id: '11-cs-app', grade: 11, subject: 'Computer Applications', title: { en: 'Computer Applications', ta: 'கணினி பயன்பாடுகள்' }, icon: 'fa-desktop',
    lessons: [
      { id: '11csapp-l1', title: { en: 'Introduction to Computers', ta: 'கணினி அறிமுகம்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'History and generations of computers.', ta: 'கணினிகளின் வரலாறு மற்றும் தலைமுறைகள்.'} },
      { id: '11csapp-l2', title: { en: 'Word Processing', ta: 'சொல் செயலாக்கம்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Using software for document creation.', ta: 'ஆவண உருவாக்கத்திற்கான மென்பொருளைப் பயன்படுத்துதல்.'} },
      { id: '11csapp-l3', title: { en: 'Spreadsheets', ta: 'விரிதாள்கள்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Basics of spreadsheet software.', ta: 'விரிதாள் மென்பொருளின் அடிப்படைகள்.'} },
    ],
  },

  // ========== GRADE 12 ==========
  {
    id: '12-maths', grade: 12, subject: 'Maths', title: { en: 'Mathematics', ta: 'கணிதம்' }, icon: 'fa-calculator',
    lessons: [
      { id: '12m-l1', title: { en: 'Matrices & Determinants', ta: 'அணிகளும் அணிக்கோவைகளும்' }, videoId: 'He62n1s32yI', resources: [{id: '12m-l1-n1', type: 'pdf', title: { en: 'Chapter 1 Notes', ta: 'பாடம் 1 குறிப்புகள்'}, url: '#' }], description: {en: 'Learn about matrix operations, determinants, and their properties.', ta: 'அணி செயல்பாடுகள், அணிக்கோவைகள் மற்றும் அவற்றின் பண்புகள் பற்றி அறிக.'} },
      { id: '12m-l2', title: { en: 'Vector Algebra', ta: 'வெக்டர் இயற்கணிதம்' }, videoId: '1n84G1eX0oM', resources: [], description: {en: 'Understanding vectors, dot products, and cross products.', ta: 'வெக்டர்கள், புள்ளி பெருக்கல் மற்றும் குறுக்கு பெருக்கல் ஆகியவற்றைப் புரிந்துகொள்வது.'} },
      { id: '12m-l3', title: { en: 'Complex Numbers', ta: 'கலப்பெண்கள்' }, videoId: '23pYfT-H4aM', resources: [], description: {en: 'Introduction to complex numbers and their properties.', ta: 'கலப்பெண்கள் மற்றும் அவற்றின் பண்புகளுக்கு அறிமுகம்.'} },
    ],
  },
  {
    id: '12-physics', grade: 12, subject: 'Physics', title: { en: 'Physics', ta: 'இயற்பியல்' }, icon: 'fa-atom',
    lessons: [
      { id: '12p-l1', title: { en: 'Electrostatics', ta: 'நிலைமின்னியல்' }, videoId: 'BXFv7qV_LMM', resources: [], description: {en: 'Study of electric charges at rest.', ta: 'ஓய்வு நிலையில் உள்ள மின் கட்டணங்கள் பற்றிய ஆய்வு.'} },
      { id: '12p-l2', title: { en: 'Current Electricity', ta: 'மின்னோட்டவியல்' }, videoId: 'Zjw4oKv_5-w', resources: [], description: {en: 'Learn about electric current, resistance, and circuits.', ta: 'மின்சாரம், எதிர்ப்பு மற்றும் சுற்றுகள் பற்றி அறிக.'} },
      { id: '12p-l3', title: { en: 'Magnetism', ta: 'காந்தவியல்' }, videoId: 'yGz-g__fQAE', resources: [], description: {en: 'Explore magnetic fields and forces.', ta: 'காந்தப்புலங்கள் மற்றும் விசைகளை ஆராயுங்கள்.'} },
    ],
  },
  {
    id: '12-compsci', grade: 12, subject: 'Computer Science', title: { en: 'Computer Science', ta: 'கணினி அறிவியல்' }, icon: 'fa-laptop-code',
    lessons: [
      { id: '12cs-l1', title: { en: 'Data Structures', ta: 'தரவு கட்டமைப்புகள்' }, videoId: '9-O0q_v-f_s', resources: [], description: {en: 'Learn about fundamental data structures like arrays, linked lists, and stacks.', ta: 'வரிசைகள், இணைக்கப்பட்ட பட்டியல்கள் மற்றும் அடுக்குகள் போன்ற அடிப்படை தரவு கட்டமைப்புகளைப் பற்றி அறிக.'} },
      { id: '12cs-l2', title: { en: 'Algorithms', ta: 'நெறிமுறைகள்' }, videoId: 'YT_22r-A4rE', resources: [], description: {en: 'Introduction to algorithm design and analysis.', ta: 'நெறிமுறை வடிவமைப்பு மற்றும் பகுப்பாய்வுக்கான அறிமுகம்.'} },
      { id: '12cs-l3', title: { en: 'Database Management', ta: 'தரவுத்தள மேலாண்மை' }, videoId: '4cWkVbCgI-s', resources: [], description: {en: 'Basics of SQL and database design.', ta: 'SQL மற்றும் தரவுத்தள வடிவமைப்பின் அடிப்படைகள்.'} },
    ],
  },
  {
    id: '12-commerce', grade: 12, subject: 'Commerce', title: { en: 'Commerce', ta: 'வர்த்தகம்' }, icon: 'fa-chart-line',
    lessons: [
      { id: '12com-l1', title: { en: 'Principles of Management', ta: 'மேலாண்மை கோட்பாடுகள்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Learn about Fayol\'s principles of management.', ta: 'ஃபாயோலின் மேலாண்மைக் கோட்பாடுகளைப் பற்றி அறிக.'} },
      { id: '12com-l2', title: { en: 'Marketing', ta: 'சந்தைப்படுத்தல்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Functions and importance of marketing.', ta: 'சந்தைப்படுத்தலின் செயல்பாடுகள் மற்றும் முக்கியத்துவம்.'} },
      { id: '12com-l3', title: { en: 'Consumer Protection', ta: 'நுகர்வோர் பாதுகாப்பு' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Rights and responsibilities of consumers.', ta: 'நுகர்வோரின் உரிமைகள் மற்றும் பொறுப்புகள்.'} },
    ],
  },
  {
    id: '12-accountancy', grade: 12, subject: 'Accountancy', title: { en: 'Accountancy', ta: 'கணக்கியல்' }, icon: 'fa-file-invoice-dollar',
    lessons: [
      { id: '12acc-l1', title: { en: 'Partnership Accounts', ta: 'கூட்டாண்மை கணக்குகள்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Fundamentals of partnership firms.', ta: 'கூட்டாண்மை நிறுவனங்களின் அடிப்படைகள்.'} },
      { id: '12acc-l2', title: { en: 'Company Accounts', ta: 'நிறுவன கணக்குகள்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Issue of shares and debentures.', ta: 'பங்குகள் மற்றும் கடனீட்டுப் பத்திரங்களை வழங்குதல்.'} },
      { id: '12acc-l3', title: { en: 'Cash Flow Statement', ta: 'ரொக்க ஓட்ட அறிக்கை' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'Preparation and analysis of cash flow.', ta: 'ரொக்க ஓட்டத்தைத் தயாரித்தல் மற்றும் பகுப்பாய்வு செய்தல்.'} },
    ],
  },
];


export const useMockData = (grade: Grade) => {
  const courses = useMemo(() => allCourses.filter(c => {
    if (grade === 10) {
      return ['Tamil', 'English', 'Maths', 'Science', 'Social Science'].includes(c.subject);
    }
    // For grades 11 and 12, show all other subjects
    return c.grade === grade;
  }).filter(c => c.grade === grade), [grade]);
  return { courses };
};