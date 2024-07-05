const projects = [
  {
    title: "One Tower (Building Management System)",
    image: "https://i.ibb.co/qdS9LFZ/apartmentforrent.jpg",
    description:
      "The One Tower project is a comprehensive Building Management System (BMS) designed to streamline the management and operations of a single building. This dynamic web application caters to both residents and administrators, providing essential functionalities such as apartment details, rent payments, maintenance requests, and resident profiles.",
    features: [
      {
        name: "User Authentication",
        details:
          "Secure login and profile management for residents and administrators.",
      },
      {
        name: "Rent Payment System",
        details:
          "Integrated payment gateway for seamless rent transactions, with coupon code discounts.",
      },
      {
        name: "Dashboard",
        details:
          "Robust admin panel for managing apartment listings, viewing payment history, and handling maintenance requests.",
      },
    ],
    technologies: [
      {
        name: "React and Node.js",
        details:
          "React js used for front-end with Vite and Node.js used for backend with Express.js",
      },
      {
        name: "Stripe Secure Payments",
        details:
          "Integrated with Stripe for secure and efficient payment processing.",
      },
      {
        name: "MongoDB",
        details:
          "Efficient handling of user data and apartment information with a robust database.",
      },
    ],
    liveLink: "https://one1-tower.web.app",
    clientRepo: "https://github.com/maasajal/one-tower-client",
    serverRepo: "https://github.com/maasajal/one-tower-server",
    projectDate: "June 2024",
  },

  {
    title: "Tampereen Sähköopiskelijat TASO RY at TAMK",
    image: "https://i.ibb.co/2PzstbZ/taso.jpg",
    description:
      "TASO is a sub-association of the Tampere University of Applied Sciences (TAMK) student body (TAMKO). The majority of the club's members are electrical and automation students, but since any student at TAMK can become a member of TASO, many students from different degree programs have joined the strength of TASO.",
    features: [
      {
        name: "Language",
        details: "Translate the page using i18next",
      },
      {
        name: "News Pages & Admin panel",
        details:
          "Student are able to see update news and share on facebook. Only admin can post, update and delete a news there.",
      },
      {
        name: "Membership",
        details:
          "Student is able to join as a member through this website using Kida.app",
      },
    ],
    technologies: [
      {
        name: "React Bootstrap",
        details:
          "React js used for front-end with Vite and Node.js used for backend with Express.js",
      },
      {
        name: "Firebase",
        details: "Firestore, Realtime database, Firebase Authentication",
      },
      {
        name: "React calender & Carousel",
        details: "Used react calender and React Carousel",
      },
    ],
    liveLink: "https://taso-tamk-fi.netlify.app",
    clientRepo: "https://github.com/maasajal/taso.tamk.fi",
    projectDate: "June, 2022",
  },
  {
    title: "Auto Librarian is an e-Library",
    image: "https://i.ibb.co/gD88G4m/library.jpg",
    description:
      "Auto Librarian is an innovative e-library project designed to revolutionize the way users access and interact with digital books.",
    features: [
      {
        name: "Secure Authentication",
        details:
          "Ensure user data security and privacy with secure authentication mechanisms, including JWT tokens, providing a safe and reliable environment for users to explore and engage with the e-library.",
      },
      {
        name: "Interactive Borrowing System",
        details:
          "Borrow books directly from the platform with a simple click, allowing users to enjoy their selected titles hassle-free and track their borrowing history.",
      },
      {
        name: "Dashboard",
        details:
          "Robust dashboard panel for managing, viewing, and handling user and admin activities.",
      },
    ],
    technologies: [
      {
        name: "React and Node.js",
        details:
          "React js used for front-end with Vite and Node.js used for backend with Express.js",
      },
      {
        name: "Firebase & JWT",
        details:
          "Ensure user data security and privacy with secure authentication mechanisms, including JWT tokens, providing a safe and reliable environment for users to explore and engage with the e-library.",
      },
      {
        name: "MongoDB",
        details:
          "Efficient handling of user data and apartment information with a robust database.",
      },
    ],
    liveLink: "https://auto-e-librarian.web.app",
    clientRepo: "https://github.com/maasajal/auto-librarian-client",
    serverRepo: "https://github.com/maasajal/auto-librarian-server",
    projectDate: "May 2024",
  },
  {
    title: "Aurora ArtiCraft - Painting and Drawing",
    image: "https://i.ibb.co/XztzdCV/2150981113.jpg",
    description:
      "The Aurora Articraft project focuses on curating and showcasing exquisite artworks under the category of Painting and Drawing. ",
    features: [
      {
        name: "Firebase Authentication",
        details:
          "Ensure user data security and privacy with secure authentication mechanisms, providing a safe and reliable environment for users to explore.",
      },
      {
        name: "Paintings",
        details:
          "Categorized painting: Landscape Painting, Watercolour Painting, Oil Painting and so on.",
      },
      {
        name: "Drawings",
        details:
          "Categorized Drawing: Portrait Drawing, Cartoon Drawing also Charcoal Sketching",
      },
    ],
    technologies: [
      {
        name: "React and Node.js",
        details:
          "React js used for front-end with Vite and Node.js used for backend with Express.js",
      },
      {
        name: "Firebase",
        details:
          "Ensure user data security and privacy with secure authentication mechanisms, providing a safe and reliable environment for users to explore and engage with the e-library.",
      },
      {
        name: "MongoDB",
        details:
          "Efficient handling of user data and apartment information with a robust database.",
      },
    ],
    liveLink: "https://aurora-articraft.web.app",
    clientRepo: "https://github.com/maasajal/aurora-arti-craft-client",
    serverRepo: "https://github.com/maasajal/aurora-arti-craft-server",
    projectDate: "April 2024",
  },
];
export default projects;
