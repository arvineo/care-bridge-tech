
import { Card, CardContent } from "./ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Chandrima Mehra",
    role: "Cofounder & CEO",
    image: "/lovable-uploads/c0e8a5eb-8a7c-47cd-8539-e8c485e65196.png",
    linkedin: "#",
  },
  {
    name: "Arvind Karna",
    role: "Cofounder, Product & Technology",
    image: "/lovable-uploads/65bc6a87-0813-4dce-be19-c35df23cf73f.png",
    linkedin: "#",
  },
  {
    name: "Dr. Shwet Sabnis",
    role: "Medical Innovations, M.B.B.S, M.D Geriatrics, FGIE",
    image: "/lovable-uploads/69165008-873b-4a06-900c-83f10a11d07d.png",
    linkedin: "#",
  },
];

const extendedTeam = [
  {
    name: "Sarang Kadam",
    role: "Engineering Lead",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
  },
  {
    name: "Sai Kumar",
    role: "Customer Success Manager",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    linkedin: "#",
  },
  {
    name: "Rounak Agarwal",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to revolutionizing senior care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-primary text-lg">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Extended Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The talented individuals who help bring our vision to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {extendedTeam.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-primary text-lg">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
