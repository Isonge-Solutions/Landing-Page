import React, { useState } from "react";
import CTABG from "../assets/images/CTABG.jpeg";
import Contactform from "./Contactform";

const CTA = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative mt-12">
      <div
        className="flex flex-col items-center justify-center gap-6 m-12 rounded-md lg:p-12 p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${CTABG})` }}
      >
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold">
            Build your ideal workspace today.
          </h2>
          <p className="text-center mt-2">
            Your growth starts with the right technology partner. Let's create solutions that help your business lead, compete, and thrive.
          </p>
        </div>
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-slate text-accent font-medium rounded-full px-3 py-1 text-xl hover:bg-accent hover:text-black"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Contactform open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default CTA;
