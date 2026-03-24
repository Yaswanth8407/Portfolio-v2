import React from "react";

const skillsData = [
  {
    title: "Backend",
    desc: "I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.",
    items: ["TS", "Node", "Go", "Postgres", "Mongo", "Kafka", "GraphQL"],
  },
  {
    title: "Frontend & Design",
    desc: "I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences.",
    items: ["Vue", "React", "Nuxt", "Next", "Tailwind", "Figma"],
  },
  {
    title: "Cloud & DevOps",
    desc: "I have deployed and managed various applications using tools such as AWS, GCP, and other cloud services.",
    items: ["AWS", "Linux", "Docker", "Kubernetes", "Terraform", "Redis"],
  },
  {
    title: "Management",
    desc: "I have worked with multiple clients and stakeholders to define projects that suit their needs and have led these projects.",
    items: ["Agile", "Scrum", "Jira", "Office"],
    isTag: true,
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16  border-b-2 border-[gray]">
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
                      className="px-4 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-sm"
                    >
                      {item}
                    </span>
                  ) : (
                    <div
                      key={idx}
                      className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md text-xs"
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