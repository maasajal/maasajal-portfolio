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
      <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  );
};
export default Skills;

const skillSet = [
  {
    skillName: "HTML5",
    skillImage: "",
  },
  {
    skillName: "CSS3",
    skillImage: "",
  },
  {
    skillName: "JavaScript",
    skillImage: "",
  },
  {
    skillName: "React.js",
    skillImage: "https://i.ibb.co/YfJ1GXD/reacts.jpg",
  },
  {
    skillName: "Node.js",
    skillImage: "https://i.ibb.co/cTkK2SZ/nodejs.png",
  },
  {
    skillName: "Express.js",
    skillImage: "",
  },
  {
    skillName: "Firebase",
    skillImage: "https://i.ibb.co/YfBtFG8/firebase-authentication.png",
  },
  {
    skillName: "MongoDB",
    skillImage: "https://i.ibb.co/jMX71TZ/Mongodb.png",
  },
  {
    skillName: "Vite",
    skillImage: "https://i.ibb.co/yRVVST6/vite.png",
  },
  {
    skillName: "TailwindCSS",
    skillImage: "",
  },
  {
    skillName: "DaisyUI",
    skillImage: "",
  },
  {
    skillName: "React Bootstrap",
    skillImage: "",
  },
  {
    skillName: "Stripe",
    skillImage: "",
  },
  {
    skillName: "VS Code",
    skillImage: "",
  },
];
