import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Apps",
    description:
      "React frontends, Node.js APIs, databases, authentication, and third-party integrations.",
  },
  {
    icon: Rocket,
    title: "Practical Features",
    description:
      "Real-time chat, media uploads, AI detection, persistent data, and dynamic UI updates.",
  },
  {
    icon: Users,
    title: "Developer Workflow",
    description:
      "Git, GitHub, pull requests, issue tracking, and open-source collaboration.",
  },
  {
    icon: Lightbulb,
    title: "Always Improving",
    description:
      "Growing through projects, CS coursework, and consistent full-stack development practice.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                full-stack applications.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a junior full-stack developer and Computer Science student
                who enjoys turning ideas into working web applications. I work
                mainly with React, TypeScript, Node.js, Express, MongoDB, and
                PostgreSQL.
              </p>
              <p>
                I have built projects that include authentication, REST APIs,
                real-time chat, media uploads, database persistence, third-party
                API integrations, and responsive frontend interfaces. I care
                about building apps that are useful, understandable, and easy to
                keep improving.
              </p>
              <p>
                Right now, I'm focused on sharpening my full-stack skills
                through personal projects, open-source work, and real-world
                development workflows. I'm looking for junior developer
                opportunities where I can contribute to a team and grow into a
                stronger software engineer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build clean, reliable web applications that
                combine thoughtful user experiences with maintainable full-stack
                architecture."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
