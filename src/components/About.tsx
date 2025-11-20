import { Card } from "@/components/ui/card";
import { Code2, Users, Rocket, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "13+ Years Experience",
      description: "Extensive background in middleware integration and API development",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored junior developers",
    },
    {
      icon: Rocket,
      title: "Enterprise Solutions",
      description: "Delivered solutions for Fortune 500 companies like GSK, BMW, SAKS Global and Primark",
    },
    {
      icon: Award,
      title: "Award Winner",
      description: "Star of the Quarter and multiple client appreciation awards",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Results-driven Integration Developer with hands-on expertise in middleware 
          technology, building scalable solutions and leading successful project deliveries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 card-hover"
            >
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 glass-effect">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I started my career in software development over 13 years ago at Tata Consultancy Services, 
              where I specialized in middleware integration solutions. Throughout my journey, I've had 
              the privilege of working with leading global organizations including GlaxoSmithKline, 
              Primark, BMW UK, and Saks Global.
            </p>
            <p>
              My expertise spans the full integration lifecycle - from requirements gathering and design 
              to implementation, testing, and deployment. I'm proficient in building and maintaining REST 
              and SOAP Web Services, and have extensive experience with MuleSoft ESB and IBM Integration Bus. 
              I led the transition from monolithic architectures to microservices, delivering scalable 
              solutions in Agile environments.
            </p>
            <p>
             Currently serving as a Lead Service Integration Engineer at Saks Global, I specialize in designing and developing scalable, reusable RESTful APIs, mentoring junior developers, and driving quality-first development practices. 
             I hold a Bachelor's degree in Electronics and Communication Engineering and am certified in DevOps Fundamentals from IBM and as a Certified ScrumMaster (CSM) from Scrum Alliance.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
