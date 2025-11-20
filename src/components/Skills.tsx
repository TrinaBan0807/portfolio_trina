import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Integration & Middleware",
      skills: [
        "MuleSoft ESB",
        "IBM Integration Bus",
        "WebSphere Message Broker",
        "REST APIs",
        "SOAP Web Services",
        "Microservices",
        "Integration Patterns",
      ],
    },
    {
      category: "Development & Tools",
      skills: [
        "ESQL",
        "Postman",
        "SOAP UI",
        "Git",
        "GitHub",
        "Bitbucket",
        "JIRA",
        "Anypoint Platform",
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "DevOps",
        "CI/CD",
        "Performance Tuning",
        "Monitoring",
        "Deployment",
      ],
    },
    {
      category: "Databases & Messaging",
      skills: [
        "Oracle",
        "MQ Explorer",
        "IBM MQ",
        "Message Queues",
        "DFDL Schemas",
        "Data Integration",
      ],
    },
    {
      category: "Methodologies & Management",
      skills: [
        "Agile",
        "Scrum",
        "Problem Management",
        "Incident Management",
        "Defect Management",
        "Requirements Analysis",
        "Team Leadership",
        "Cross-functional Collaboration",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">Technical Expertise</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive skill set in middleware integration, API development, and 
          enterprise system architecture built over 13+ years of hands-on experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-6 glass-effect">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-muted-foreground">
              Bachelor of Engineering in Electronics and Communication Engineering
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Rajiv Gandhi Technical University (2011)
            </p>
          </Card>

          <Card className="p-6 glass-effect">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                DevOps Fundamentals - IBM
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Building Cloud-Native and Multicloud Applications - IBM
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
