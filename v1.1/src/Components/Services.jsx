import React from 'react'
import { Smartphone, Code2, Boxes, ShoppingCart, Users, ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    title: "Website Development",
    description: "Modern, fast and SEO-ready sites",
    icon: <Code2 size={20} />,
    bg: "bg-slate text-white",
    rotate: "-rotate-3" // 👈 only Website Development tilted
  },
  {
    title: "Mobile App Development",
    description: "iOS, Android & cross-platform builds",
    icon: <Smartphone size={20} />,
    bg: "bg-white text-black",
    rotate: ""
  },
  {
    title: "Systems Development",
    description: "Product catalogs, checkout & payments",
    icon: <ShoppingCart size={20} />,
    bg: "bg-white text-black",
    rotate: ""
  },
  {
    title: "Consultants",
    description: "Integrations, workflows & reporting",
    icon: <Boxes size={20} />,
    bg: "bg-white text-black",
    rotate: ""
  },
  {
    title: "Pen-Testing",
    description: "Leads, pipelines & analytics",
    icon: <Users size={20} />,
    bg: "bg-white text-black",
    rotate: ""
  },
];

const Services = () => {
  return (
    <section id='services'>
      <div className="relative mt-12 bg-neutral-50">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:gap-12 gap-6 lg:p-12 sm:p-6 p-4">
          
          {/* Section Heading */}
          <div className="flex flex-col gap-6">
            <h5>Amazing Services</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          {/* Services Cards */}
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 ${service.bg} shadow-xl p-6 rounded-md ${service.rotate}`}
            >
              <div className="flex gap-3 items-center">
                <div className="bg-accent text-black rounded-full p-1">
                  {service.icon}
                </div>
                <h6>{service.title}</h6>
              </div>
              <p className="text-sm opacity-80">{service.description}</p>

              {/* Contact Sales Button */}
              <a
                href={`mailto:info@isonge.co.ke?subject=${encodeURIComponent(service.title)}`}
                className="mt-4 inline-flex items-center gap-1 text-accent font-medium hover:text-black transition-transform duration-300 group"
              >
                Contact Sales
                <ArrowUpRight
                  size={18}
                  className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
