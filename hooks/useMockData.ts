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
      { id: '10t-l5', title: { en: 'Silappathikaram', ta: 'சிலப்பதிகாரம்' }, videoId: 'VIDEO_ID_HERE', resources: [], description: {en: 'One of the five great epics of Tamil literature.', ta: 'தமிழ் இலக்கியத்தின் ஐம்பெரும் காப்பியங்களில் ஒன்று.'} },
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
      { id: '10e-l1', title: { en: 'His First Flight', ta: 'அவரது முதல் விமானம்' }, videoId: 'O133_33Lavk', resources: [], description: {en: 'A story about overcoming fear.', ta: 'பயத்தை வெல்வது பற்றிய கதை.'} },
      { id: '10e-l2', title: { en: 'Poem: Life', ta: 'கவிதை: வாழ்க்கை' }, videoId: 'Jqn-Aw2nKpg', resources: [], description: {en: 'Analysis of the poem "Life".', ta: '“வாழ்க்கை” கவிதையின் பகுப்பாய்வு.'} },
      { id: '10e-l3', title: { en: 'Grammar: Active & Passive Voice', ta: 'இலக்கணம்: செயப்படுபொருள் குன்றிய மற்றும் குன்றா வினை' }, videoId: 'C8V8f4kCTT0', resources: [], description: {en: 'Learn to convert between voice forms.', ta: 'குரல் வடிவங்களுக்கு இடையில் மாற்ற கற்றுக்கொள்ளுங்கள்.'} },
      { id: '10e-l4', title: { en: 'Prose: The Tempest', ta: 'உரைநடை: தி டெம்பஸ்ட்' }, videoId: 'rv1Z11a7qJQ', resources: [], description: {en: 'An adaptation of Shakespeare\'s play.', ta: 'ஷேக்ஸ்பியரின் நாடகத்தின் தழுவல்.'} },
      { id: '10e-l5', title: { en: 'Poem: The Solitary Reaper', ta: 'கவிதை: தி சானிட்டரி ரீப்பர்' }, videoId: 'qf4a0aL4aNA', resources: [], description: {en: 'Wordsworth\'s poem about a beautiful song.', ta: 'ஒரு அழகான பாடலைப் பற்றிய வேர்ட்ஸ்வொர்த்தின் கவிதை.'} },
      { id: '10e-l6', title: { en: 'Grammar: Direct and Indirect Speech', ta: 'இலக்கணம்: நேர்க்கூற்று மற்றும் அயற்கூற்று' }, videoId: '0zshaNf7K3s', resources: [], description: {en: 'Reporting speech and conversations.', ta: 'பேச்சு மற்றும் உரையாடல்களை அறிவித்தல்.'} },
      { id: '10e-l7', title: { en: 'Supplementary: The Last Leaf', ta: 'துணைப்பாடம்: கடைசி இலை' }, videoId: 'k15Dx-If_vI', resources: [], description: {en: 'A story of hope and sacrifice.', ta: 'நம்பிக்கை மற்றும் தியாகத்தின் கதை.'} },
      { id: '10e-l8', title: { en: 'Writing: Letter Writing', ta: 'எழுதுதல்: கடிதம் எழுதுதல்' }, videoId: 'Ktf-92Vu64E', resources: [], description: {en: 'Formal and informal letter formats.', ta: 'முறையான மற்றும் முறைசாரா கடித வடிவங்கள்.'} },
      { id: '10e-l9', title: { en: 'Grammar: Tenses', ta: 'இலக்கணம்: காலங்கள்' }, videoId: 'o44wR4_a-Ao', resources: [], description: {en: 'Understanding past, present, and future tenses.', ta: 'இறந்த, நிகழ் மற்றும் எதிர்காலங்களைப் புரிந்துகொள்வது.'} },
      { id: '10e-l10', title: { en: 'Prose: The Night the Ghost Got In', ta: 'உரைநடை: பேய் உள்ளே வந்த இரவு' }, videoId: '4hVQx2E2JgA', resources: [], description: {en: 'A humorous story by James Thurber.', ta: 'ஜேம்ஸ் தர்பரின் ஒரு நகைச்சுவைக் கதை.'} },
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
      { id: '10s-l7', title: { en: 'Plant Anatomy and Physiology', ta: 'தாவர உள்ளமைப்பியல் மற்றும் உடலியல்' }, videoId: '4jY-4eB6S5g', resources: [], description: { en: 'Structure and function of plant parts.', ta: 'தாவர பாகங்களின் அமைப்பு மற்றும் செயல்பாடு.' } },
      { id: '10s-l8', title: { en: 'Human Anatomy and Physiology', ta: 'மனித உள்ளமைப்பியல் மற்றும் உடலியல்' }, videoId: 'gEUu-A2wfSE', resources: [], description: { en: 'Organ systems in the human body.', ta: 'மனித உடலில் உள்ள உறுப்பு மண்டலங்கள்.' } },
      { id: '10s-l9', title: { en: 'Electricity and Energy', ta: 'மின்சாரமும் ஆற்றலும்' }, videoId: 'G12-eGkKkIY', resources: [], description: { en: 'Concepts of electric current and power.', ta: 'மின்சாரம் மற்றும் ஆற்றல் பற்றிய கருத்துக்கள்.' } },
      { id: '10s-l10', title: { en: 'Environmental Science', ta: 'சுற்றுச்சூழல் அறிவியல்' }, videoId: '7G3eXI_DPn8', resources: [], description: { en: 'Ecosystems and conservation.', ta: 'சுற்றுச்சூழல் அமைப்புகள் மற்றும் பாதுகாப்பு.' } },
    ],
  },
  {
    id: '10-social', grade: 10, subject: 'Social Science', title: { en: 'Social Science', ta: 'சமூக அறிவியல்' }, icon: 'fa-landmark',
    lessons: [
      { id: '10ss-l1', title: { en: 'Outbreak of World War I', ta: 'முதலாம் உலகப் போரின் வெடிப்பு' }, videoId: '6_3wum_4r-w', resources: [], description: {en: 'Causes and consequences of WWI.', ta: 'முதலாம் உலகப் போரின் காரணங்கள் மற்றும் விளைவுகள்.'} },
      { id: '10ss-l2', title: { en: 'India: Location and Relief', ta: 'இந்தியா: இருப்பிடம் மற்றும் நிவாரணம்' }, videoId: 'RSaLdA3v3j0', resources: [], description: {en: 'Geographical features of India.', ta: 'இந்தியாவின் புவியியல் அம்சங்கள்.'} },
      { id: '10ss-l3', title: { en: 'Indian Constitution', ta: 'இந்திய அரசியலமைப்பு' }, videoId: 'aU2HGISgY7o', resources: [], description: {en: 'Fundamental rights and duties.', ta: 'அடிப்படை உரிமைகள் மற்றும் கடமைகள்.'} },
      { id: '10ss-l4', title: { en: 'The World After World War II', ta: 'இரண்டாம் உலகப் போருக்குப் பிந்தைய உலகம்' }, videoId: '3C5IsGjo1T4', resources: [], description: { en: 'The Cold War era and its impact.', ta: 'பனிப்போர் காலம் மற்றும் அதன் தாக்கம்.' } },
      { id: '10ss-l5', title: { en: 'Social and Religious Reform Movements', ta: 'சமூக மற்றும் மத சீர்திருத்த இயக்கங்கள்' }, videoId: 'MvCSpvA7T4E', resources: [], description: { en: '19th-century reform movements in India.', ta: '19 ஆம் நூற்றாண்டில் இந்தியாவில் நடந்த சீர்திருத்த இயக்கங்கள்.' } },
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
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11t-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'un0N5L93g8g',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-english', grade: 11, subject: 'English', title: { en: 'English', ta: 'ஆங்கிலம்' }, icon: 'fa-book-open',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11e-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'O133_33Lavk',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
   {
    id: '11-maths', grade: 11, subject: 'Maths', title: { en: 'Mathematics', ta: 'கணிதம்' }, icon: 'fa-calculator',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11m-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: '5n8fP9IC_qQ',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-physics', grade: 11, subject: 'Physics', title: { en: 'Physics', ta: 'இயற்பியல்' }, icon: 'fa-atom',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11p-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: '2iTc5t3f0eA',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-chemistry', grade: 11, subject: 'Chemistry', title: { en: 'Chemistry', ta: 'வேதியியல்' }, icon: 'fa-flask',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11c-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'cGFSaRqQO3E',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-biology', grade: 11, subject: 'Biology', title: { en: 'Biology', ta: 'உயிரியல்' }, icon: 'fa-dna',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11b-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'Zt8z1MXs_1I',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-cs', grade: 11, subject: 'Computer Science', title: { en: 'Computer Science', ta: 'கணினி அறிவியல்' }, icon: 'fa-laptop-code',
     lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11cs-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'jfKfPfyJRdk',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-commerce', grade: 11, subject: 'Commerce', title: { en: 'Commerce', ta: 'வர்த்தகம்' }, icon: 'fa-chart-line',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11com-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'xI5I9Broc-8',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-accountancy', grade: 11, subject: 'Accountancy', title: { en: 'Accountancy', ta: 'கணக்கியல்' }, icon: 'fa-file-invoice-dollar',
    lessons: [
       ...Array.from({ length: 10 }, (_, i) => ({
        id: `11acc-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'LpcI6i95TfA',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '11-cs-app', grade: 11, subject: 'Computer Applications', title: { en: 'Computer Applications', ta: 'கணினி பயன்பாடுகள்' }, icon: 'fa-desktop',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `11csapp-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'zN8Yd_69f5s',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },

  // ========== GRADE 12 ==========
   {
    id: '12-tamil', grade: 12, subject: 'Tamil', title: { en: 'Tamil', ta: 'தமிழ்' }, icon: 'fa-feather-alt',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12t-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'un0N5L93g8g',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-english', grade: 12, subject: 'English', title: { en: 'English', ta: 'ஆங்கிலம்' }, icon: 'fa-book-open',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12e-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'O133_33Lavk',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-maths', grade: 12, subject: 'Maths', title: { en: 'Mathematics', ta: 'கணிதம்' }, icon: 'fa-calculator',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12m-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: '5n8fP9IC_qQ',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-physics', grade: 12, subject: 'Physics', title: { en: 'Physics', ta: 'இயற்பியல்' }, icon: 'fa-atom',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12p-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: '2iTc5t3f0eA',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-chemistry', grade: 12, subject: 'Chemistry', title: { en: 'Chemistry', ta: 'வேதியியல்' }, icon: 'fa-flask',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12c-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'cGFSaRqQO3E',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-biology', grade: 12, subject: 'Biology', title: { en: 'Biology', ta: 'உயிரியல்' }, icon: 'fa-dna',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12b-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'Zt8z1MXs_1I',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-compsci', grade: 12, subject: 'Computer Science', title: { en: 'Computer Science', ta: 'கணினி அறிவியல்' }, icon: 'fa-laptop-code',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12cs-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'jfKfPfyJRdk',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-cs-app', grade: 12, subject: 'Computer Applications', title: { en: 'Computer Applications', ta: 'கணினி பயன்பாடுகள்' }, icon: 'fa-desktop',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12csapp-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'zN8Yd_69f5s',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-commerce', grade: 12, subject: 'Commerce', title: { en: 'Commerce', ta: 'வர்த்தகம்' }, icon: 'fa-chart-line',
    lessons: [
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `12com-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'xI5I9Broc-8',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
    ],
  },
  {
    id: '12-accountancy', grade: 12, subject: 'Accountancy', title: { en: 'Accountancy', ta: 'கணக்கியல்' }, icon: 'fa-file-invoice-dollar',
    lessons: [
       ...Array.from({ length: 10 }, (_, i) => ({
        id: `12acc-l${i + 1}`,
        title: { en: `Lesson ${i + 1}`, ta: `பாடம் ${i + 1}` },
        videoId: 'LpcI6i95TfA',
        resources: [],
        description: { en: `Description for lesson ${i + 1}`, ta: `பாடம் ${i + 1} க்கான விளக்கம்` },
      })),
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