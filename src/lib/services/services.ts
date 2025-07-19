export type Service = {
  id: number;
  title: string; // slug
  heading: string;
  description: string;
  image: string;
  content: string;
  process?: string[];
  projects?: { name: string; detail: string }[];
  testimonial?: { quote: string; author: string };
};

export const services: Service[] = [
  {
    id: 1,
    title: 'utility-diversion-works',
    heading: 'Utility Diversion Works',
    description: 'Expert handling of sewer, water, electrical & telecom utility redirection.',
    image: '/utility-diversion.jpg',
    content: `Tough Team Infra delivers end-to-end utility diversion services—ensuring minimal disruption to communities and traffic. We specialize in: trenchless HDD, pipe jacking, microtunnelling, and meticulous open-trench methods. Our engineers coordinate all required approvals and strictly follow utility-mapping protocols using GPR, preventing accidental strikes and ensuring public safety.`,
    process: [
      'Utility mapping with ground penetrating radar (GPR)',
      'Detailed engineering & NOC approvals',
      'Execution using HDD, pipe-jacking, microtunnelling or open-trench',
      'Quality testing, reinstatement and surfacing',
      'As-built documentation and final handover'
    ],
    projects: [
      { name: 'DMRC Delhi Metro DC‑08', detail: '600 mm sewer line laid using open-trench (2023)' },
      { name: 'MMRDA Mumbai Metro Line 9', detail: 'Diversion of live 600 mm water line via HDD (2023)' },
      { name: 'BMC Goregaon–Mulund Link Road', detail: '560 mm sewer line realigned using pipe-jacking (2023)' }
    ],
    testimonial: {
      quote: `“The team completed road crossings without any traffic closures—highly professional execution.”`,
      author: 'DMRC Project Manager'
    }
  },
  {
    id: 2,
    title: 'civil-construction-works',
    heading: 'Civil Construction Works',
    description: 'Reliable excavation, concrete works, and finishing solutions.',
    image: '/roadcons.jpg',
    content: `Our Civil Construction division handles major infrastructure including large-scale excavation, reinforced concrete foundation pouring, structural formwork, and surfacing. We operate high-capacity cranes, concrete booms, and GPS-enabled excavators to ensure precision and efficiency. All work is fully compliant with BIS standards and local regulatory norms.`,
    process: [
      'Site mobilization and layout',
      'Earthwork and compaction',
      'Reinforcement and formwork installation',
      'Concrete pouring with slump control',
      'Curing, finishing, and quality inspections',
      'Handover with structural certification'
    ],
    projects: [
      { name: 'MMRDA Metro Depot, Mumbai', detail: 'Foundation & structural concrete frame (2022)' },
      { name: 'Thane Casting Yard', detail: 'Permanent road & pavement works (2023)' }
    ],
    testimonial: {
      quote: `“Their civil crew delivered top quality finishes under a tight timeline.”`,
      author: 'Project Manager, MMRDA'
    }
  },
  {
    id: 3,
    title: 'structural-retrofitting',
    heading: 'Structural Retrofitting',
    description: 'Upgrading and strengthening old structures to meet modern standards and extend their lifespan.',
    image: '/structural-retrofit.jpg',
    content: `We provide expert retrofitting solutions to reinforce existing structures against modern load, seismic, and safety codes. Techniques include jacketing, fiber-reinforced polymer (FRP) wrapping, grouting, steel bracing, and base isolation. Structural audits are conducted to assess load-bearing capacity and retrofitting feasibility, followed by methodical reinforcement and validation.`,
    process: [
      'Structural audit and load analysis',
      'Design of retrofitting solution (FRP, jacketing, etc.)',
      'Surface preparation and strengthening',
      'Structural integration and quality checks',
      'Certification and documentation'
    ],
    projects: [
      { name: 'Mahatma Phule Hospital', detail: 'Column retrofitting using FRP wrap (2022)' },
      { name: 'Dahisar Metro Station', detail: 'Beam and slab jacketing during extension (2023)' }
    ],
    testimonial: {
      quote: '“Their retrofitting work saved us from full reconstruction.”',
      author: 'PMC Structural Head'
    }
  },
  {
    id: 4,
    title: 'metro-rail-projects',
    heading: 'Metro Rail Projects',
    description: 'Specialized services for metro pillars, stations, and associated infrastructure.',
    image: '/metro.jpg',
    content: `Our Metro Rail project capabilities cover turnkey execution of viaduct pillars, U-girders, pre-cast segments, and station civil work. We work in active metro zones with traffic and safety restrictions, adhering to DMRC/MMRDA specifications and employing advanced precast + cast-in-situ hybrid construction models.`,
    process: [
      'Geotechnical survey & pile foundation works',
      'Rebar cage fabrication and cage lowering',
      'Casting of pier, pier cap, and U-girders',
      'Station box construction and track slab',
      'Integration with signaling and E&M'
    ],
    projects: [
      { name: 'Delhi Metro Phase IV', detail: 'Viaduct pillars & U-girders for Package DC-08 (2023–2024)' },
      { name: 'Mumbai Metro Line 7A', detail: 'Metro Station box work (2022)' }
    ],
    testimonial: {
      quote: '“They delivered 28 pier caps ahead of schedule with zero safety incidents.”',
      author: 'MMRDA Engineer-in-Charge'
    }
  },
  {
    id: 5,
    title: 'pre-construction-planning',
    heading: 'Pre-Construction & Planning',
    description: 'Technical assessments and design validations for efficient project initiation.',
    image: '/planning.jpg',
    content: `Before physical work begins, our Pre-Construction & Planning team handles surveys, design reviews, utility conflict checks, and coordination. Services include DPR preparation, tender assistance, cost estimation, traffic diversion plan, and method statements for faster approvals and smoother construction.`,
    process: [
      'Topographic & utility surveys',
      'Soil testing & design validation',
      'Preparation of detailed project report (DPR)',
      'Authority approvals & documentation',
      'Execution strategy, staging & planning'
    ],
    projects: [
      { name: 'PMC for Goregaon Link Road', detail: 'Pre-bid planning and survey (2023)' },
      { name: 'Metro Line 9 Depot', detail: 'Pre-construction DPR & utility plan (2022)' }
    ],
    testimonial: {
      quote: '“Helped reduce construction delays by 30% through early conflict resolution.”',
      author: 'Chief Planner, Contractor'
    }
  },
  {
    id: 6,
    title: 'cast-in-situ-structures',
    heading: 'Cast-in-situ Structures',
    description: 'Precision in-place concrete structures like columns, foundations, and slabs.',
    image: '/cis.jpg',
    content: `Cast-in-situ construction is essential for monolithic structures that demand continuity and high load-bearing strength. We provide RCC solutions for foundations, footings, plinth beams, and pier caps. Shuttering, de-shuttering, reinforcement, and post-pour quality checks are managed in-house by trained engineers and supervisors.`,
    process: [
      'Shuttering and leveling setup',
      'Steel bar bending and cage fixing',
      'Concrete pouring with vibrators',
      'Curing and stripping of formwork',
      'Cube testing and final QC'
    ],
    projects: [
      { name: 'Metro Line 5 Casting Yard', detail: 'Pier & pile cap casting (2023)' },
      { name: 'MMRDA Thane Viaduct', detail: 'CIS piers for elevated corridor (2022)' }
    ],
    testimonial: {
      quote: '“The form finish and accuracy of their cast-in-situ elements was exceptional.”',
      author: 'Metro Consultant'
    }
  },
  {
    id: 7,
    title: 'fabrication-works',
    heading: 'Fabrication Works',
    description: 'Steel fabrication of sheds, cages, reinforcements, and custom structures.',
    image: '/fabri.jpg',
    content: `We have a dedicated fabrication facility with CNC profile cutting, MIG welding, and hot-dip galvanization. Products include rebar cages, formwork frames, sheds, walkway supports, anchor bolt cages, etc. All output is tested for dimensional tolerance and load capacity as per IS 2062/800 standards.`,
    process: [
      'Shop drawing and BOQ generation',
      'Steel cutting and layout',
      'Welding and fitting',
      'Surface treatment and finishing',
      'Dispatch and erection'
    ],
    projects: [
      { name: 'Depot Shed Fabrication – Line 5', detail: 'Structural shed with 22 m span (2023)' },
      { name: 'Pier Cap Cages – DC07', detail: 'Rebar cage fabrication (2022)' }
    ],
    testimonial: {
      quote: '“Fabricated components fit perfectly during erection—great precision.”',
      author: 'Site Engineer, Metro Contractor'
    }
  },
  {
    id: 8,
    title: 'peb-works',
    heading: 'PEB Works',
    description: 'Design, fabrication, and erection of pre-engineered buildings.',
    image: '/PEB.jpg',
    content: `We deliver Pre-Engineered Buildings (PEBs) including industrial sheds, warehouses, and container terminals. From CAD modeling to bolt-up erection on site, our PEB team manages the structural, envelope, and finishing works. All PEBs are designed to resist seismic and wind loads per IS 800:2007.`,
    process: [
      'Design & modeling in Tekla/STAAD',
      'Component fabrication in shop',
      'Surface protection (zinc/paint)',
      'On-site bolt-up erection',
      'Cladding and finishing'
    ],
    projects: [
      { name: 'RMC Plant Shed', detail: '18m x 30m steel shed with turbo ventilators (2023)' },
      { name: 'Casting Yard Warehouse', detail: 'Fully enclosed PEB with mezzanine (2022)' }
    ],
    testimonial: {
      quote: '“Their PEB delivery was faster and cheaper than traditional RCC construction.”',
      author: 'Client – Infra EPC'
    }
  }
];
