import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1.6 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Graphql and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1.6 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js,Graphql and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "24-04-2023 - Present",
    role: " Full Stack Developer",
    company: "4Labs Technologies Technopark Phase-3, Trivandrum",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented Graphql APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "24-04-2023 - 24-08-2023",
    role: "Intern",
    company: "4Labs Technologies Technopark Phase-3, Trivandrum",
    description: `As a Frontend Development Intern at 4Labs, I developed responsive user interfaces using Next.js and React, collaborating closely with backend developers to integrate Node.js APIs. I optimized web performance and contributed to agile processes, gaining hands-on experience in creating seamless, efficient web applications across multiple devices..`,
    technologies: ["HTML", "CSS", "Javascript", "React.js"],
  },
  
 
];

export const PROJECTS = [
  {
    title: "Nearshopz ,E-Commerce Website",
    image: project1,
    description:
      "NearShopz is a Trivandrum-based eCommerce platform where customers can purchase products directly from local online stores. The portal was developed using modern technologies such as React.js, Next.js, MongoDB, and GraphQL, ensuring a responsive and efficient user experience. The platform includes comprehensive features like product listing, a shopping cart, and user authentication, making it easy for users to browse and securely purchase items. Additionally, we developed a responsive admin portal to manage product inventories, orders, and user data. ",
      link:"https://nearshopz.com/",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Makers Portal",
    image: project2,
    description:
      "MakersPortal is an Australian-based website designed for craft makers to manage their orders, suppliers, supplies, and clients efficiently. The platform allows users to track orders through a dashboard and onboard new users via a subscription model, with Stripe integrated for seamless subscription payments. We developed a responsive user interface using React, ensuring a smooth experience across devices. The backend was built with Node.js, GraphQL, and MongoDB, providing robust data handling and fast performance. This project highlights our expertise in developing full-stack applications that cater to the specific needs of niche markets.",
      link:"https://makertechsolutions.com/",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Stripe"],
  },
  {
    title: "Orange Insurance",
    image: project3,
    link:"https://orangeinsurance.com/",

    description:
      "Orange Insurance is a Dubai-based insurance company for which we developed a website using Next.js to showcase their insurance plans and policy information. The website features a responsive design, providing users with easy access to various insurance options. All data, including plans and policies, is dynamically connected to the Odoo CRM system via REST APIs for efficient data management. Additionally, we implemented an SEO-optimized blog page to enhance online visibility and integrated Google Analytics for performance tracking. This project highlights our expertise in building user-friendly, data-driven platforms with seamless third-party integrations.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Next.js"],
  }
];

export const CONTACT = {
  address: "18-101/1, Ottapanavillai, Elavuvillai Post, Kanyakumari district, Tamilnadu, Pin:629171",
  phoneNo: "+91 9486080321 ",
  email: "shivakumar13102000@gmail.com",
};
