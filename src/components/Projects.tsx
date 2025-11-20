import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Middleware Integration - Microservices",
      company: "Saks Global",
      period: "Jun 2023 – Present",
      role: "Lead, Integration",
      description:
        "Led the transition from monolithic to microservices architecture leveraging IBM Integration Bus platform. Developed scalable RESTful APIs on Anypoint Platform, reducing deployment time and improving system reliability through comprehensive testing.",
      tags: ["MuleSoft", "RESTful APIs", "Microservices", "Anypoint Platform", "Agile"],
      achievements: [
        "Led architecture transition to microservices",
        "Mentored junior developers on best practices",
        "Implemented quality-first development approach",
      ],
    },
    {
      title: "BMW UK NSC DevOps Project",
      company: "IBM",
      period: "Oct 2021 – Feb 2023",
      role: "Lead, IIB team",
      description:
        "Designed and implemented message flow solutions based on HLD and CDD requirements. Conducted performance tuning and debugging to optimize throughput and latency in integration processes.",
      tags: ["IBM Integration Bus", "DevOps", "Performance Tuning", "Message Flows"],
      achievements: [
        "Optimized message flow performance",
        "Delivered comprehensive technical documentation",
        "Reduced integration process latency",
      ],
    },
    {
      title: "iRIS - Logistics Integration",
      company: "Ramco Systems",
      period: "Apr 2021 – Oct 2021",
      role: "Developer",
      description:
        "Developed and debugged integration flows for logistics domain requirements on WSO2 platform. Implemented API monitoring for 15 systems ensuring stability and performance of data transfers.",
      tags: ["WSO2", "Logistics", "API Monitoring", "Integration Flows"],
      achievements: [
        "Monitored 15 critical systems",
        "Facilitated cross-functional collaboration",
        "Ensured data transfer stability",
      ],
    },
    {
      title: "ESB for Primark",
      company: "Wipro Ltd.",
      period: "Oct 2019 – Apr 2021",
      role: "Developer, Administrator",
      description:
        "Developed and maintained message flows, message sets, and DFDL schemas using ESQL within IBM Integration Bus. Implemented comprehensive monitoring and error handling mechanisms.",
      tags: ["IBM IIB", "ESQL", "MQ Explorer", "DFDL", "Oracle"],
      achievements: [
        "Optimized queue performance and reliability",
        "Implemented robust error handling",
        "Maintained 99.9% system uptime",
      ],
    },
    {
      title: "Middleware Integration for GSK",
      company: "Tata Consultancy Service",
      period: "Mar 2012 – Oct 2019",
      role: "Service Specialist, Configuration Manager",
      description:
        "Proactively monitored middleware operations and implemented performance optimizations. Managed a 10-member cross-functional team coordinating successful deployments across multiple environments.",
      tags: ["WMB", "IIB", "Problem Management", "Team Management"],
      achievements: [
        "Reduced incident resolution time by 50%",
        "Achieved 99.9% uptime",
        "Received Star of the Quarter Awards",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">Work Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proven track record of delivering enterprise integration solutions for 
          Fortune 500 companies across various industries.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-semibold">{project.company}</span>
                      <span>•</span>
                      <span className="text-sm">{project.period}</span>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {project.role}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 gradient-bg text-white">
          <h3 className="text-2xl font-semibold mb-4">Recognition & Awards</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-white/90 mr-2">🏆</span>
              <span>Star of the Quarter Awards - Tata Consultancy Services</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/90 mr-2">🏆</span>
              <span>Client Appreciation Awards - Saks Cloud Services, Wipro, IBM, and TCS</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/90 mr-2">⭐</span>
              <span>Rising Star Program Participant - TCS UK and Ireland Leadership Program</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
