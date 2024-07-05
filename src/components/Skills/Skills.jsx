import SectionTitle from "../SectionTitle";

const Skills = () => {
  return (
    <div id="skills" className="my-12">
      <SectionTitle
        title={"My Skills"}
        intro={
          "Proficient in JavaScript, React.js, Node.js, Express.js, Firebase, MongoDB, Vite, DaisyUI, and TailwindCSS, with a passion for continuous learning and growth in web development."
        }
      />
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillSet.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white shadow-lg rounded-lg"
            >
              {/* Display skill image if available */}
              {skill.skillImage && (
                <img
                  src={skill.skillImage}
                  alt={skill.skillName}
                  className="h-12 w-auto"
                />
              )}
              {/* Display skill name */}
              <span className="ml-2 text-lg font-semibold">
                {skill.skillName}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Skills;

const skillSet = [
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
    // skillImage: "https://i.ibb.co/YfJ1GXD/reacts.jpg",
  },
  {
    skillImage: "https://img.shields.io/badge/-React--Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white",
  },
  {
    skillImage: "https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white",
  },
  {
    skillImage: "https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
  },
  {
    skillImage: "https://img.shields.io/badge/-DaisyUI-5A29E4?style=flat-square&logo=daisyui&logoColor=white",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white",
    // skillImage: "https://i.ibb.co/cTkK2SZ/nodejs.png",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white",
  },
  {
    skillImage: "https://img.shields.io/badge/-Firebase--Auth-FFCA28?style=flat-square&logo=firebase&logoColor=white",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
  },
  {
    skillName: "",
    skillImage: "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white",
  },
  {
    skillImage: "https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white",
  },
  {
    skillImage: "https://img.shields.io/badge/-React--Native-61DAFB?style=flat-square&logo=react&logoColor=black",
  },
  {
    skillImage: "https://img.shields.io/badge/-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white",
  },
  {
    skillImage: "https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat-square&logo=google-cloud&logoColor=white",
  },
];
