import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building polished React and Next.js frontends with reliable Node.js APIs, databases, authentication, and integrations.",
  },
  {
    icon: Rocket,
    title: "Interactive Features",
    description:
      "Creating real-time chat, live coding tools, media workflows, AI-powered features, and dynamic user interfaces.",
  },
  {
    icon: Users,
    title: "Developer Workflow",
    description:
      "Working with Git, GitHub, pull requests, issue tracking, documentation, and collaborative development practices.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Growth",
    description:
      "Strengthening my skills through full-stack projects, computer science coursework, and consistent development practice.",
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
              Clean interfaces.
              <br />
              <span className="font-serif italic font-normal text-white">
                {" "}
                Strong systems.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m Brandon May, a full-stack developer and Computer Science
                student building interactive web applications with React,
                Next.js, TypeScript, Node.js, and modern backend tools.
              </p>
              <p>
                My projects focus on real-world workflows: live coding
                interviews, music streaming with real-time chat, AI face
                detection, authentication, databases, media handling, and
                third-party API integrations.
              </p>
              <p>
                I like building applications that feel polished on the frontend
                and dependable behind the scenes. Right now, I’m focused on
                growing through independent projects, open-source contributions,
                and team-based development workflows while pursuing remote
                frontend and full-stack developer opportunities.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build clean, reliable web applications that pair thoughtful
                user experiences with maintainable full-stack architecture."
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
