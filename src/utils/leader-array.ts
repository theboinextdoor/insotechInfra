// Data for your leadership team (Expanded with more dummy leaders for better carousel demo)
interface Leader {
  id: number;
  name: string;
  role: string;
  bio: string;
  photoSrc: string;
  email?: string;
  phone?: string;
}


export const leaders: Leader[] = [
  {
    id: 1,
    name: 'Jazib Zia',
    role: 'Managing Director',
    bio: "Jazib Zia is a dynamic and visionary leader with extensive experience in the civil engineering and infrastructure development sector. As a Director at Tough Team Infra, his strategic acumen and unwavering commitment have been instrumental in driving the company's growth and successful execution of complex projects across India. ",
    photoSrc: '/owner.jpg', // Replace with actual path like '/images/team/jazib-zia.jpg'
    email: 'insotechinfra@gmail.com',
    phone: '+91 9310727282',
  },
  {
    id: 2,
    name: 'Shazia Khan',
    role: 'General Manager',
    bio: "Shazia Khan is a dedicated Director at Tough Team Infra, bringing a robust foundation in operational management and a keen eye for detail. Her commitment to upholding the highest standards of quality and efficiency ensures seamless project delivery and contributes significantly to client satisfaction. ",
    photoSrc: '/placeholder-shazia.jpg', // Replace with actual path like '/images/team/shazia-khan.jpg'
  },
  {
    id: 3,
    name: 'Mustak Ali ',
    role: 'Contact Person',
    bio: 'Mustak Ali serves as a key contact person within Tough Team Infra, facilitating communication and support for various operational and client-related inquiries. His role is essential in ensuring smooth coordination and timely responses.',
    photoSrc: '/placeholder-anil.jpg', // Placeholder for a third leader
    // email: 'anil.sharma@example.com',
    // phone: '+91 9876543210',
  },
  {
    id: 4,
    name: 'Praval Pratap Singh (E)',
    role: 'Contact Person',
    bio: 'Praval Pratap Singh, indicated with an "(E)" likely denoting an Engineer, acts as a crucial contact person. His expertise contributes to addressing technical queries and ensuring project communication flows effectively.',
    photoSrc: '/placeholder-priya.jpg', // Placeholder for a fourth leader
    // email: 'priya.singh@example.com',
    // phone: '+91 9988776655',
  },
  {
    id: 5,
    name: 'Arjun Mule (Admin)',
    role: 'Contact Person',
    bio: 'Arjun Mule is a primary administrative contact person for Tough Team Infra. His efforts are vital in managing administrative aspects and serving as a reliable point of contact for organizational matters.',
    photoSrc: '/placeholder-priya.jpg', // Placeholder for a fourth leader
    // email: 'priya.singh@example.com',
    // phone: '+91 9988776655',
  },
  {
    id: 6,
    name: 'Mr. Baldev Singh ',
    role: 'Associated with Angel Global Corporate Consultants Pvt. Ltd',
    bio: 'Arjun Mule is a primary administrative contact person for Tough Team Infra. His efforts are vital in managing administrative aspects and serving as a reliable point of contact for organizational matters.',
    photoSrc: '/placeholder-priya.jpg', // Placeholder for a fourth leader
    // email: 'priya.singh@example.com',
    // phone: '+91 9988776655',
  },
];