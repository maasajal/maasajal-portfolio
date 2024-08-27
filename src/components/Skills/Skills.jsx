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
        <div role="tablist" className="tabs tabs-bordered tabs-md">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Technical_Skills"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content py-10">
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
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Communication_Skills"
          />
          <div role="tabpanel" className="tab-content py-10">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Effective Verbal Communication
                </div>
                <div className="collapse-content">
                  <p>
                    Articulate ideas clearly and confidently in both individual
                    and group settings.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Active Listening
                </div>
                <div className="collapse-content">
                  <p>
                    Engage in conversations attentively, ensuring full
                    understanding and appropriate response.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Written Communication
                </div>
                <div className="collapse-content">
                  <p>
                    Write clear, concise, and well-structured documents, emails,
                    and reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Teamwork"
          />
          <div role="tabpanel" className="tab-content py-10">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Collaboration
                </div>
                <div className="collapse-content">
                  <p>
                    Work effectively within diverse teams to achieve common
                    goals.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Adaptability & Networking
                </div>
                <div className="collapse-content">
                  <p>
                    Adjust to different roles and team dynamics as needed to
                    contribute to team success. Build and maintain professional
                    relationships with colleagues, and clients.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Leadership
                </div>
                <div className="collapse-content">
                  <p>
                    Lead by example, motivate team members, and manage team
                    projects efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skills;

const skillSet = [
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
    // skillImage: "https://i.ibb.co/YfJ1GXD/reacts.jpg",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-React--Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-DaisyUI-5A29E4?style=flat-square&logo=daisyui&logoColor=white",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white",
    // skillImage: "https://i.ibb.co/cTkK2SZ/nodejs.png",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-Firebase--Auth-FFCA28?style=flat-square&logo=firebase&logoColor=white",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
  },
  {
    skillName: "",
    skillImage:
      "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-React--Native-61DAFB?style=flat-square&logo=react&logoColor=black",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white",
  },
  {
    skillImage:
      "https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat-square&logo=google-cloud&logoColor=white",
  },
];
