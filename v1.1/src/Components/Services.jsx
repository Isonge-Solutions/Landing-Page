import React from 'react'
import { Smartphone, Code2, Boxes, ShoppingCart, Users, ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    title: "Website Development & SEO",
    description: "Build a fast, mobile-friendly, and SEO-optimized website that attracts customers and converts traffic into revenue.",
    icon: <Code2 size={20} />,
    bg: "bg-slate text-white",
    rotate: "-rotate-3" // 👈 only Website Development tilted
  },
  {
    title: "Mobile App Solutions",
    description: "Custom iOS, Android, and cross-platform apps to connect your business with customers anywhere, anytime.",
    icon: <Smartphone size={20} />,
    bg: "bg-white text-black",
    rotate: ""
  },
  {
    title: "Enterprise System Development",
    description: "Custom ERP, CRM, and POS solutions with product catalogs, checkout, and secure payment integrations. ",
    icon: <ShoppingCart size={20} />,
    bg: "bg-white text-black",
    rotate: ""
  },
  {
    title: "Business & Tech Consulting",
    description: "Expert guidance on process automation, integrations, and business analytics to help you scale efficiently.",
    icon: <Boxes size={20} />,
    bg: "bg-white text-black",
    rotate: ""
  },
  {
    title: "Cybersecurity & Pen Testing",
    description: "Safeguard your systems with penetration testing, risk assessments, and advanced analytics.",
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
            <h5>What We Offer</h5>
            <p>We provide end-to-end technology solutions to help your business grow.</p>
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
                className="mt-4 inline-flex items-center gap-1 text-slate font-semibold hover:text-black transition-transform duration-300 group"
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
