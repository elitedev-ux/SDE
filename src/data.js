import sewingImage from './assets/photos/sewing.jpg'
import barbingImage from './assets/photos/barbing.jpg'
import hairdressingImage from './assets/photos/hairdressing.jpg'
import bakingImage from './assets/photos/baking.jpg'
import afuedTrainingImage from './assets/photos/afued-sde-training.jpg'
import afuedEquipmentImage from './assets/photos/afued-sde-equipment.jpg'
import afuedBeneficiariesImage from './assets/photos/afued-sde-beneficiaries.jpg'
import workshopImage from './assets/photos/workshop.jpg'
import studentsImage from './assets/photos/students.jpg'
import directorPlaceholder from './assets/photos/placeholder-director.jpg'
import deputyDirectorPlaceholder from './assets/photos/placeholder-deputy-director.jpg'
import trainingOfficerPlaceholder from './assets/photos/placeholder-training-officer.jpg'
import adminOfficerPlaceholder from './assets/photos/placeholder-admin-officer.jpg'
import fashionSewing1 from './assets/photos/fashion-sewing-1.jpg'
import fashionSewing2 from './assets/photos/fashion-sewing-2.jpg'
import fashionSewing3 from './assets/photos/fashion-sewing-3.jpg'
import shoeMaking1 from './assets/photos/shoe-making-1.jpg'
import shoeMaking2 from './assets/photos/shoe-making-2.jpg'
import shoeMaking3 from './assets/photos/shoe-making-3.jpg'
import shoeMaking4 from './assets/photos/shoe-making-4.jpg'
import cakeMaking1 from './assets/photos/cake-making-1.jpg'
import cakeMaking2 from './assets/photos/cake-making-2.jpg'
import cakeMaking3 from './assets/photos/cake-making-3.jpg'
import cakeMaking4 from './assets/photos/cake-making-4.jpg'
import cakeMaking5 from './assets/photos/cake-making-5.jpg'
import cakeMaking6 from './assets/photos/cake-making-6.jpg'
import barbingImage2 from './assets/photos/barbing-2.jpg'
import barbingImage3 from './assets/photos/barbing-3.jpg'
import barbingImage4 from './assets/photos/barbing-4.jpg'
import makeupImage2 from './assets/photos/makeup-2.jpg'
import hairStylingImage2 from './assets/photos/hair-styling-2.jpg'
import hairStylingImage3 from './assets/photos/hair-styling-3.jpg'

export const university = {
  name: 'Adeyemi Federal University of Education',
  shortName: 'AFUED',
  directorate: 'Skill Development & Entrepreneurship Directorate',
  address: 'Ondo–Ore Road, P.M.B. 520, Ondo, Ondo State, Nigeria',
  phone: '+234 803 325 2107',
  email: 'info@afued.edu.ng',
  hours: 'Monday–Friday, 8:00 am–4:00 pm',
}

export const programmeExamples = [
  {
    slug: 'sewing',
    title: 'Fashion Design & Sewing',
    category: 'Fashion',
    summary: 'Learn garment construction from measurements and patterns to neat finishing.',
    image: sewingImage,
    alt: 'A tailor working with fabric at a sewing machine',
    skills: ['Taking accurate measurements', 'Pattern drafting', 'Machine operation', 'Garment finishing'],
    equipment: ['Sewing machine', 'Measuring tape', 'Fabric scissors', 'Pressing tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — timetable to be confirmed.',
  },
  {
    slug: 'hairdressing',
    title: 'Hairdressing',
    category: 'Beauty',
    summary: 'Build safe, creative hair-care and styling skills for personal and professional use.',
    image: hairdressingImage,
    alt: 'A clean, professionally equipped hair studio',
    skills: ['Hair preparation', 'Braiding techniques', 'Styling and finishing', 'Client care'],
    equipment: ['Styling chair', 'Hair dryer', 'Combs and brushes', 'Sanitation kit'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — timetable to be confirmed.',
  },
  {
    slug: 'barbing',
    title: 'Barbing',
    category: 'Beauty',
    summary: 'Develop precision cutting, grooming, sanitation and customer-service skills.',
    image: barbingImage,
    alt: 'A barber carefully trimming a client’s beard',
    skills: ['Clipper handling', 'Haircut foundations', 'Beard grooming', 'Tool sanitation'],
    equipment: ['Professional clippers', 'Trimmers', 'Barber chair', 'Sterilising supplies'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — timetable to be confirmed.',
  },
  {
    slug: 'cake-baking',
    title: 'Cake Baking',
    category: 'Culinary',
    summary: 'Practise reliable baking, decoration, food safety and small-business basics.',
    image: bakingImage,
    alt: 'Learners preparing food together in a practical kitchen',
    skills: ['Ingredient preparation', 'Mixing and baking', 'Cake decoration', 'Food hygiene'],
    equipment: ['Mixer', 'Baking tins', 'Oven', 'Decorating tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — timetable to be confirmed.',
  },
  {
    slug: 'web-development-design',
    title: 'Web Development & Design',
    category: 'Digital',
    summary: 'Learn how responsive websites are planned, designed and built for real users.',
    image: studentsImage,
    alt: 'Learners working together with laptop computers',
    skills: ['Web page structure', 'Responsive styling', 'Interface design', 'Publishing a website'],
    equipment: ['Laptop computer', 'Code editor', 'Web browser', 'Internet connection'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'computer-phone-repair',
    title: 'Computer & Phone Repair',
    category: 'Digital',
    summary: 'Diagnose common hardware faults and practise careful device maintenance.',
    image: workshopImage,
    alt: 'A technician using tools on a piece of equipment',
    skills: ['Fault diagnosis', 'Safe disassembly', 'Component replacement', 'Preventive maintenance'],
    equipment: ['Repair toolkit', 'Multimeter', 'Soldering station', 'Test devices'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'photography-editing',
    title: 'Photography & Editing',
    category: 'Digital',
    summary: 'Develop visual storytelling skills from camera handling to final image editing.',
    image: afuedBeneficiariesImage,
    alt: 'AFUED learners at a skills empowerment presentation',
    skills: ['Camera handling', 'Composition and lighting', 'Portrait photography', 'Image editing'],
    equipment: ['Digital camera', 'Tripod', 'Lighting kit', 'Editing computer'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'graphics-design',
    title: 'Graphics Design & Award Production',
    category: 'Creative',
    summary: 'Create clear visual communication and produce branded awards and display pieces.',
    image: studentsImage,
    alt: 'Learners collaborating around laptop computers',
    skills: ['Design principles', 'Digital layout', 'Brand application', 'Production finishing'],
    equipment: ['Design computer', 'Graphics software', 'Printer', 'Finishing tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'audio-visual-publishing',
    title: 'Audio-Visual Production & Publishing',
    category: 'Creative',
    summary: 'Plan, record and package stories for video, audio and printed publications.',
    image: afuedTrainingImage,
    alt: 'An AFUED skills and employability session',
    skills: ['Content planning', 'Audio recording', 'Video production', 'Book publishing basics'],
    equipment: ['Camera', 'Microphone', 'Editing computer', 'Publishing software'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'bag-making',
    title: 'Bag Making & Accessories',
    category: 'Fashion',
    summary: 'Construct useful fashion and school bags with clean, durable finishing.',
    image: sewingImage,
    alt: 'A craftsperson working at a sewing machine',
    skills: ['Material selection', 'Pattern cutting', 'Bag construction', 'Fittings and finishing'],
    equipment: ['Sewing machine', 'Cutting tools', 'Rivets and fasteners', 'Measuring tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'batik-tie-dye',
    title: 'Batik, Tie & Dye',
    category: 'Fashion',
    summary: 'Explore resist-dye techniques, colour planning and textile finishing.',
    image: sewingImage,
    alt: 'A craftsperson preparing textile material',
    skills: ['Fabric preparation', 'Pattern binding', 'Dye mixing', 'Batik and finishing'],
    equipment: ['Cotton fabric', 'Dye bath', 'Wax tools', 'Protective equipment'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'shoe-making',
    title: 'Shoe Making',
    category: 'Fashion',
    summary: 'Learn the measured process of designing, assembling and finishing footwear.',
    image: workshopImage,
    alt: 'A craftsperson using workshop tools',
    skills: ['Foot measurement', 'Pattern preparation', 'Sole attachment', 'Product finishing'],
    equipment: ['Shoe last', 'Cutting knife', 'Adhesives', 'Finishing tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'cosmetics-production',
    title: 'Cosmetics & Hair Products',
    category: 'Beauty',
    summary: 'Formulate basic body creams and hair-care products with safe handling practices.',
    image: hairdressingImage,
    alt: 'A clean beauty and hair-care workspace',
    skills: ['Ingredient measurement', 'Safe formulation', 'Product hygiene', 'Packaging and labelling'],
    equipment: ['Mixing bowls', 'Digital scale', 'Protective equipment', 'Product containers'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'event-management',
    title: 'Event Management & Bridal Concepts',
    category: 'Creative',
    summary: 'Plan coordinated events, manage vendors and develop thoughtful bridal concepts.',
    image: afuedTrainingImage,
    alt: 'An AFUED student empowerment event in progress',
    skills: ['Event planning', 'Budget preparation', 'Vendor coordination', 'Bridal concept styling'],
    equipment: ['Planning templates', 'Decor samples', 'Presentation tools', 'Event checklist'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'catfish-production',
    title: 'Catfish Production',
    category: 'Agriculture',
    summary: 'Understand small-scale fish production from pond preparation to feeding and harvest.',
    image: afuedEquipmentImage,
    alt: 'Equipment presented during an AFUED skills programme',
    skills: ['Pond preparation', 'Stock selection', 'Feeding routines', 'Harvest planning'],
    equipment: ['Holding tank', 'Water test kit', 'Feed tools', 'Harvest net'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'bee-keeping',
    title: 'Beekeeping',
    category: 'Agriculture',
    summary: 'Learn responsible hive management and the foundations of honey production.',
    image: afuedTrainingImage,
    alt: 'AFUED learners attending a practical skills session',
    skills: ['Hive placement', 'Colony care', 'Safe inspection', 'Honey harvesting'],
    equipment: ['Bee suit', 'Smoker', 'Hive tool', 'Protective gloves'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'solar-inverter',
    title: 'Solar & Inverter Installation',
    category: 'Technical',
    summary: 'Explore basic renewable-power components, safe connections and system maintenance.',
    image: workshopImage,
    alt: 'A technician working carefully with electrical equipment',
    skills: ['Load estimation', 'Component identification', 'Safe installation', 'Basic troubleshooting'],
    equipment: ['Solar panel', 'Inverter', 'Battery', 'Electrical test tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'welding',
    title: 'Welding',
    category: 'Technical',
    summary: 'Practise workshop safety, metal preparation and foundational joining techniques.',
    image: workshopImage,
    alt: 'A welder producing sparks while joining metal',
    skills: ['Workshop safety', 'Metal preparation', 'Basic welding joints', 'Finishing and inspection'],
    equipment: ['Welding machine', 'Protective helmet', 'Clamps', 'Grinding tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    category: 'Technical',
    summary: 'Learn pipe measurement, fitting, maintenance and common household repairs.',
    image: workshopImage,
    alt: 'A craftsperson handling a workshop tool',
    skills: ['Pipe measurement', 'Joint preparation', 'Fixture installation', 'Leak diagnosis'],
    equipment: ['Pipe wrench', 'Cutting tools', 'Fittings', 'Measuring tape'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
  {
    slug: 'furniture-carpentry',
    title: 'Furniture & Carpentry',
    category: 'Technical',
    summary: 'Develop accurate measuring, joining and finishing skills for useful wood products.',
    image: workshopImage,
    alt: 'A craftsperson working with workshop equipment',
    skills: ['Measuring and marking', 'Safe cutting', 'Wood joints', 'Surface finishing'],
    equipment: ['Hand saw', 'Measuring square', 'Clamps', 'Finishing tools'],
    trainer: 'Trainer profile will be added after directorate verification.',
    schedule: 'Practical sessions — availability varies by academic session.',
  },
]

const programmeGroups = [
  {
    category: 'Media & Digital',
    image: studentsImage,
    alt: 'Learners working together with digital equipment',
    titles: [
      'Audio-Visual Production / Book Publishing',
      'Award Production / Graphics Design',
      'Computer Repair / Phone Repairs',
      'Professional Branding',
      'Television / Radio Broadcasting',
      'Telecommunication',
      'Web Development / Design',
    ],
  },
  {
    category: 'Fashion & Textile',
    image: sewingImage,
    alt: 'A craftsperson working carefully with fabric',
    titles: [
      'Baby Bed (1)',
      'Baby Bed (2)',
      'Bag Making & Accessories (1)',
      'Bag Making & Accessories (2) / School Bag',
      'Batik, Tie & Dye',
      'Clothing Customisation',
      'Fabric / Hats / Auto Gele (1)',
      'Fabric / Hats / Auto Gele (2)',
      'Fashion Designing — Unisex (1)',
      'Fashion Designing — Unisex (2)',
      'Fashion Designing — Unisex (3)',
      'Fashion Designing — Unisex (4)',
      'Fashion Designing — Male (1)',
      'Fashion Designing — Male (2)',
      'Fashion Designing — Female (1)',
      'Fashion Designing — Female (2)',
      'Fashion Designing — Female (3)',
      'Fashion Designing — Female (4)',
      'Machine Knitting for Cardigan',
      'Crochet Baby Wear & Gown',
      'Shoe Making (1)',
      'Shoe Making (2)',
      'Shoe Making (3)',
      'Shoe Making (4)',
      'Weaving (Aso-Oke) (1)',
      'Weaving (Aso-Oke) (2)',
    ],
  },
  {
    category: 'Beauty & Personal Care',
    image: hairdressingImage,
    alt: 'A clean beauty and hair-care workspace',
    titles: [
      'Barbing',
      'Bead Bag & Neck Bead',
      'Bead Making & Cosmetology',
      'Body Cream & Hair Products',
      'Detergent, Cosmetics & Disinfectants (1)',
      'Detergent, Cosmetics & Disinfectants (2)',
      'Gele / Make-Up',
      'Wig Making / Hair Styling (1)',
      'Wig Making / Hair Styling (2)',
      'Hair Dressing (1)',
      'Hair Dressing (2)',
      'Hair Dressing (3)',
      'Hair Dressing (4)',
      'Make-Up (1)',
      'Make-Up (2)',
      'Make-Up (3)',
    ],
  },
  {
    category: 'Food & Hospitality',
    image: bakingImage,
    alt: 'Learners preparing food in a practical kitchen',
    titles: [
      'Cake Making (1)',
      'Cake Making (2)',
      'Cake Making (3)',
      'Cake Making (4)',
      'Cake Making (5)',
      'Cake Making (6)',
      'Catering (1)',
      'Catering (2)',
      'Chapman / Smoothie',
      'Food Production',
      'Small Chops / Cookies',
      'Potato / Plantain Chips',
      'Snacks (1)',
      'Snacks (2)',
      'Confectionery & Bread',
    ],
  },
  {
    category: 'Agriculture',
    image: afuedEquipmentImage,
    alt: 'Equipment presented during an AFUED skills programme',
    titles: ['Beekeeping', 'Catfish Production'],
  },
  {
    category: 'Music & Performing Arts',
    image: afuedTrainingImage,
    alt: 'AFUED learners taking part in a practical training session',
    titles: [
      'Conducting & Voice Drilling',
      'Dancing, Choreography & Drums',
      'Guitar / Craftsmanship',
      'Keyboard',
      'Trumpet & Saxophone',
    ],
  },
  {
    category: 'Events & Decoration',
    image: afuedBeneficiariesImage,
    alt: 'AFUED learners at a skills empowerment presentation',
    titles: [
      'Event Management with Bridal Concepts',
      'Exterior Decoration',
      'Interior Decoration',
    ],
  },
  {
    category: 'Technical & Construction',
    image: workshopImage,
    alt: 'A technician working safely with workshop equipment',
    titles: [
      'Construction of Electronic Devices (Power Bank)',
      'Paint Production',
      'Plumbing (1)',
      'Plumbing (2)',
      'P.O.P.',
      'Solar Inverter',
      'Tiling',
      'Welding',
    ],
  },
  {
    category: 'Photography',
    image: afuedBeneficiariesImage,
    alt: 'AFUED learners gathered for a programme photograph',
    titles: ['Photography & Editing (1)', 'Photography & Editing (2)'],
  },
  {
    category: 'Services',
    image: workshopImage,
    alt: 'A practical work environment with professional tools',
    titles: ['Laundry', 'Environmental Cleaning Services'],
  },
]

const programmeGuides = {
  'Media & Digital': {
    summary: 'Develop practical communication, production and digital skills for modern creative work.',
    skills: ['Planning a clear project', 'Using relevant digital tools', 'Producing and reviewing work', 'Presenting work professionally'],
    equipment: ['Computer system', 'Production software', 'Relevant media tools', 'Internet connection'],
  },
  'Fashion & Textile': {
    summary: 'Learn measured construction, material handling and neat finishing for useful textile products.',
    skills: ['Taking measurements', 'Preparing patterns and materials', 'Using tools safely', 'Finishing products neatly'],
    equipment: ['Sewing machine', 'Measuring tape', 'Cutting tools', 'Finishing tools'],
  },
  'Beauty & Personal Care': {
    summary: 'Build safe, creative personal-care skills with attention to hygiene and customer service.',
    skills: ['Preparing the work area', 'Handling tools and products safely', 'Applying core techniques', 'Client care and finishing'],
    equipment: ['Professional tool kit', 'Workstation', 'Sanitation supplies', 'Protective equipment'],
  },
  'Food & Hospitality': {
    summary: 'Practise reliable food preparation, hygiene, presentation and small-business fundamentals.',
    skills: ['Ingredient preparation', 'Safe food handling', 'Production techniques', 'Presentation and packaging'],
    equipment: ['Mixing tools', 'Cooking or baking equipment', 'Measuring tools', 'Food-safe containers'],
  },
  Agriculture: {
    summary: 'Learn responsible small-scale production through guided routines and practical demonstrations.',
    skills: ['Preparing the production area', 'Daily care routines', 'Monitoring growth and health', 'Planning harvest and sales'],
    equipment: ['Protective equipment', 'Production tools', 'Measuring supplies', 'Handling equipment'],
  },
  'Music & Performing Arts': {
    summary: 'Develop performance discipline, creative expression and confident presentation through practice.',
    skills: ['Foundational technique', 'Timing and coordination', 'Rehearsal discipline', 'Confident performance'],
    equipment: ['Relevant instrument', 'Practice materials', 'Audio equipment', 'Performance space'],
  },
  'Events & Decoration': {
    summary: 'Learn to plan and deliver thoughtful spaces and events with organised, professional finishing.',
    skills: ['Developing a concept', 'Planning materials and budget', 'Setting up safely', 'Finishing and presentation'],
    equipment: ['Planning tools', 'Decor materials', 'Measuring tools', 'Installation kit'],
  },
  'Technical & Construction': {
    summary: 'Develop safe workshop habits and practical installation, production and maintenance techniques.',
    skills: ['Identifying tools and materials', 'Measuring and preparation', 'Safe practical work', 'Testing and finishing'],
    equipment: ['Protective equipment', 'Measuring tools', 'Relevant hand tools', 'Testing equipment'],
  },
  Photography: {
    summary: 'Build visual storytelling skills from camera operation and composition to careful editing.',
    skills: ['Camera handling', 'Composition and lighting', 'Photo selection', 'Image editing'],
    equipment: ['Digital camera', 'Tripod', 'Lighting equipment', 'Editing computer'],
  },
  Services: {
    summary: 'Build reliable service skills around safe processes, quality control and customer care.',
    skills: ['Preparing tools and materials', 'Following safe work processes', 'Checking service quality', 'Customer care'],
    equipment: ['Protective equipment', 'Cleaning or service tools', 'Work supplies', 'Storage containers'],
  },
}

const programmeTrainers = {
  'Media & Digital': {
    name: 'Tunde Akinwale',
    specialty: 'Digital media and technology facilitator',
    bio: 'Supports learners through practical digital projects, production planning and confident use of modern creative tools.',
    image: trainingOfficerPlaceholder,
    phone: '+234 000 000 0101',
    email: 'tunde.akinwale@example.com',
  },
  'Fashion & Textile': {
    name: 'Bimpe Adeyemi',
    specialty: 'Fashion and textile production trainer',
    bio: 'Guides learners from measurement and material preparation to careful construction and professional finishing.',
    image: adminOfficerPlaceholder,
    phone: '+234 000 000 0102',
    email: 'bimpe.adeyemi@example.com',
  },
  'Beauty & Personal Care': {
    name: 'Aisha Bello',
    specialty: 'Beauty, cosmetology and client-care trainer',
    bio: 'Focuses on safe product handling, hygiene, creative technique and the customer service expected in a beauty business.',
    image: deputyDirectorPlaceholder,
    phone: '+234 000 000 0103',
    email: 'aisha.bello@example.com',
  },
  'Food & Hospitality': {
    name: 'Funmi Oladipo',
    specialty: 'Catering and food-production trainer',
    bio: 'Teaches organised preparation, food safety, consistent production and attractive presentation for small food enterprises.',
    image: adminOfficerPlaceholder,
    phone: '+234 000 000 0104',
    email: 'funmi.oladipo@example.com',
  },
  Agriculture: {
    name: 'Chinedu Okafor',
    specialty: 'Agricultural enterprise facilitator',
    bio: 'Introduces practical production routines, responsible handling and the basic planning needed for a small agricultural venture.',
    image: directorPlaceholder,
    phone: '+234 000 000 0105',
    email: 'chinedu.okafor@example.com',
  },
  'Music & Performing Arts': {
    name: 'Kunle Adesina',
    specialty: 'Music and performance coach',
    bio: 'Helps learners strengthen technique, timing, rehearsal discipline and confidence in individual and group performance.',
    image: trainingOfficerPlaceholder,
    phone: '+234 000 000 0106',
    email: 'kunle.adesina@example.com',
  },
  'Events & Decoration': {
    name: 'Ngozi Eze',
    specialty: 'Events and creative decoration trainer',
    bio: 'Guides learners in concept development, material planning, safe installation and polished event presentation.',
    image: deputyDirectorPlaceholder,
    phone: '+234 000 000 0107',
    email: 'ngozi.eze@example.com',
  },
  'Technical & Construction': {
    name: 'Seyi Ogunleye',
    specialty: 'Technical workshop instructor',
    bio: 'Emphasises measurement, safe tool handling, accurate installation and careful testing throughout practical workshop sessions.',
    image: directorPlaceholder,
    phone: '+234 000 000 0108',
    email: 'seyi.ogunleye@example.com',
  },
  Photography: {
    name: 'Ifeoma Nwosu',
    specialty: 'Photography and visual storytelling trainer',
    bio: 'Works with learners on camera control, composition, lighting, image selection and clean digital editing.',
    image: deputyDirectorPlaceholder,
    phone: '+234 000 000 0109',
    email: 'ifeoma.nwosu@example.com',
  },
  Services: {
    name: 'Kemi Balogun',
    specialty: 'Professional services trainer',
    bio: 'Teaches dependable work processes, quality checks, safe material handling and respectful customer service.',
    image: adminOfficerPlaceholder,
    phone: '+234 000 000 0110',
    email: 'kemi.balogun@example.com',
  },
}

function makeProgrammeSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const fashionImages = [sewingImage, fashionSewing1, fashionSewing2, fashionSewing3]
const shoeImages = [shoeMaking1, shoeMaking2, shoeMaking3, shoeMaking4]
const cakeImages = [cakeMaking1, cakeMaking2, cakeMaking3, cakeMaking4, cakeMaking5, cakeMaking6]
const hairImages = [hairdressingImage, hairStylingImage2, hairStylingImage3, makeupImage2]
const beautyImages = [makeupImage2, hairStylingImage2, hairdressingImage, barbingImage3, barbingImage4]
const categoryImages = {
  'Media & Digital': [studentsImage, afuedTrainingImage, afuedBeneficiariesImage, workshopImage],
  'Fashion & Textile': fashionImages,
  'Beauty & Personal Care': beautyImages,
  'Food & Hospitality': cakeImages,
  Agriculture: [afuedEquipmentImage, afuedTrainingImage],
  'Music & Performing Arts': [afuedTrainingImage, studentsImage, afuedBeneficiariesImage],
  'Events & Decoration': [afuedBeneficiariesImage, afuedTrainingImage, studentsImage],
  'Technical & Construction': [workshopImage, afuedEquipmentImage, afuedTrainingImage],
  Photography: [afuedBeneficiariesImage, afuedTrainingImage],
  Services: [workshopImage, afuedEquipmentImage],
}

function getProgrammeImage(title, category, index) {
  if (title.startsWith('Cake Making')) return cakeImages[index % cakeImages.length]
  if (title.startsWith('Shoe Making')) return shoeImages[index % shoeImages.length]
  if (title.startsWith('Fashion Designing')) return fashionImages[index % fashionImages.length]
  if (title.startsWith('Hair Dressing') || title.startsWith('Wig Making')) return hairImages[index % hairImages.length]
  if (title.startsWith('Make-Up') || title.startsWith('Gele')) return beautyImages[index % beautyImages.length]
  if (title === 'Barbing') return barbingImage2

  const images = categoryImages[category]
  return images[index % images.length]
}

export const programmes = programmeGroups.flatMap((group) => {
  const guide = programmeGuides[group.category]
  const trainer = programmeTrainers[group.category]

  return group.titles.map((title, index) => ({
    slug: makeProgrammeSlug(title),
    title,
    category: group.category,
    summary: guide.summary,
    image: getProgrammeImage(title, group.category, index),
    alt: group.alt,
    skills: guide.skills,
    equipment: guide.equipment,
    trainer: {
      ...trainer,
      image: getProgrammeImage(title, group.category, index),
      alt: `Illustrative ${group.category.toLowerCase()} training image for ${title}`,
    },
    schedule: 'Contact the SDE office to confirm the current training timetable.',
  }))
})

export const heroSlides = [
  {
    eyebrow: 'Learn by doing',
    title: 'Turn practical skills into confident livelihoods.',
    text: 'Explore hands-on learning environments designed to help AFUED students create, solve and build for life beyond the classroom.',
    image: afuedTrainingImage,
    alt: 'AFUED students attending an employability skills session in 2024',
  },
  {
    eyebrow: 'Build your craft',
    title: 'Start with your hands. Leave with a direction.',
    text: 'Train with real tools, repeat useful techniques and understand how your skill can become a service or enterprise.',
    image: afuedEquipmentImage,
    alt: 'Sewing, baking, barbing and hairdressing equipment presented to AFUED SDE beneficiaries in 2024',
  },
  {
    eyebrow: 'Grow together',
    title: 'Practical learning works better in community.',
    text: 'Meet trainers and fellow learners who help turn curiosity into ability, discipline and opportunity.',
    image: afuedBeneficiariesImage,
    alt: 'AFUED SDE beneficiaries holding barbing kits at a 2024 presentation',
  },
]

export const equipment = [
  { name: 'Industrial sewing machine', use: 'Garment construction, bag making and textile finishing', code: 'FAS–01', image: sewingImage, alt: 'A sewing machine being used to construct a garment' },
  { name: 'Professional clipper set', use: 'Precision cutting, outlining and personal grooming', code: 'BAR–02', image: barbingImage, alt: 'Professional barbing tools being used for grooming' },
  { name: 'Salon workstation', use: 'Hair preparation, wig making and creative styling', code: 'HAI–03', image: hairdressingImage, alt: 'A clean professional hair styling workstation' },
  { name: 'Baking mixer and oven', use: 'Cake, bread, snack and confectionery production', code: 'CUL–04', image: bakingImage, alt: 'Food being prepared in a practical kitchen' },
  { name: 'Camera and editing suite', use: 'Photography, video production and visual storytelling', code: 'MED–05', image: afuedBeneficiariesImage, alt: 'AFUED learners photographed during a skills programme' },
  { name: 'Computer workstation', use: 'Web design, graphics, branding and digital publishing', code: 'DIG–06', image: studentsImage, alt: 'Learners collaborating with laptop computers' },
  { name: 'Electronics repair toolkit', use: 'Device diagnosis, soldering and component replacement', code: 'TEC–07', image: workshopImage, alt: 'A technician working carefully with workshop tools' },
  { name: 'Solar and inverter kit', use: 'Renewable-power installation, testing and maintenance', code: 'SOL–08', image: afuedEquipmentImage, alt: 'Practical equipment presented during an AFUED skills programme' },
  { name: 'Welding equipment', use: 'Metal preparation, safe joining and product finishing', code: 'WEL–09', image: workshopImage, alt: 'A welder working safely with protective equipment' },
  { name: 'Plumbing toolkit', use: 'Pipe measurement, fitting, installation and repairs', code: 'PLU–10', image: workshopImage, alt: 'A practical workshop containing professional hand tools' },
  { name: 'Fashion and shoe-making tools', use: 'Pattern cutting, assembly, fastening and finishing', code: 'CRA–11', image: sewingImage, alt: 'A craftsperson working with material and production tools' },
  { name: 'Training and presentation equipment', use: 'Demonstrations, group instruction and practical assessment', code: 'TRN–12', image: afuedTrainingImage, alt: 'AFUED learners attending a practical training session' },
]

export const team = [
  { name: 'Profile awaiting confirmation', role: 'Director', initials: 'DR', image: directorPlaceholder, alt: 'Illustrative portrait of a Nigerian professional; not the current AFUED director', note: 'The latest published directorship ended on 31 July 2026; a successor has not yet been published.' },
  { name: 'Mrs. Folashade Olujoke Izuagie', role: 'Deputy Director (provisional)', initials: 'FI', image: deputyDirectorPlaceholder, alt: 'Illustrative portrait of a Nigerian professional; not Mrs. Folashade Olujoke Izuagie', note: 'Appointment reported by AFUED in February 2026; official portrait still required.' },
  { name: 'Profile coming soon', role: 'Training & Quality Officer', initials: 'TQ', image: trainingOfficerPlaceholder, alt: 'Illustrative portrait of a Nigerian professional for the training officer profile', note: 'Official staff profile will be added when supplied.' },
  { name: 'Profile coming soon', role: 'Administrative Officer', initials: 'AO', image: adminOfficerPlaceholder, alt: 'Illustrative portrait of a Nigerian professional for the administrative officer profile', note: 'Official staff profile will be added when supplied.' },
]

export const mission = 'To provide practical, enterprise-focused learning that complements academic study and equips students to create useful work, responsible services and sustainable opportunities.'

export const vision = 'A university community where every learner can combine knowledge with a practical skill and the confidence to apply it.'
