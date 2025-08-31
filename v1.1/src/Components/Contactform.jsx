import { useState, useEffect } from "react";

const Contactform = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [result, setResult] = useState("");

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "aa2160e8-90c6-4518-818b-6d0b1013f29b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Enquiry sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blur + Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Enquire About Our Services</h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="border p-2 rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number (optional)"
            className="border p-2 rounded-md"
          />
          <select name="service" required className="border p-2 rounded-md">
            <option value="">Select a Service</option>
            <option value="Website Development">Website Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="ERP Systems">ERP Systems</option>
            <option value="E-commerce Sites">E-commerce Sites</option>
            <option value="CRMs">CRMs</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            required
            rows="5"
            className="border p-2 rounded-md"
          ></textarea>

          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Submit Enquiry
          </button>
        </form>

        {result && (
          <span className="block mt-3 text-sm text-gray-700">{result}</span>
        )}
      </div>
    </div>
  );
};

export default Contactform;
