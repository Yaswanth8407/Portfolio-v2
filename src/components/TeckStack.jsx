import React from "react";

const skillsData = [
    {
    title: "Programming Languages",
    desc: "I have a strong foundation in programming and problem-solving using multiple languages.",
    items: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Web Development",
    desc: "I build responsive and dynamic web applications with modern frontend and backend technologies.",
    items: ["HTML", "CSS", "React", "Node.js", "Express", "Tailwind"],
  },
  {
    title: "Databases",
    desc: "I work with both SQL and NoSQL databases to store and manage application data efficiently.",
    items: ["MongoDB", "MySQL", "Oracle", "MS Access"],
  },
  {
    title: "Tools & Technologies",
    desc: "I use various tools and platforms to develop, manage, and deploy applications efficiently.",
    items: ["Git", "GitHub", "VS Code", "Power BI", "Vercel", "FireBase"],
    isTag: true,
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16  border-b-2 border-[gray]" id="TechStack">
      <div className="max-w-6xl w-full">
        <h1 className="text-center text-3xl font-semibold mb-12">Skills</h1>

        <div className="grid md:grid-cols-2 gap-6 md:auto-rows-fr">
          {skillsData.map((card, i) => (
            <div
              key={i}
              className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg transition hover:scale-[1.02]
              flex flex-col justify-between h-full
              ${i === 1 && "mt-7"} ${i === 3 && "mt-7"}`}
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {card.title}
                </h2>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {card.items.map((item, idx) =>
                  card.isTag ? (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-sm "
                    >
                      {item}
                    </span>
                  ) : (
                    <div
                      key={idx}
                className="w-fit h-10 flex items-center justify-center bg-white/10 rounded-md text-xs px-4"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;