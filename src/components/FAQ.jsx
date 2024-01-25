import React, { useState } from "react";

const faqData = [
  {
    question: "when do i need to connect my node",
    answer:
      "Over time as wallets age, and your node becomes clogged , Transactions may begin to fail. To re-enable full functionality, the node correction tool is recommended",
  },
  {
    question:
      "My Transactions keep failing, i am uunable to stake, swap or claim my tokens",
    answer: "Node tool will correct your wallet node strings in seconds.",
  },
  {
    question: "Do i have to pay for this service?",
    answer:
      "No, we will never ask you to pay for anything. This is a free service.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    


   <div className="flex flex-col justify-center h-screen">
    <h1 className="text-3xl md:text-5xl font-semibold md:mb-7 mb-3 text-white">Frquently Asked Questions</h1>
     <div className="max-w-full mt-8 ">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-8">
          <div
            className="flex items-center justify-between bg-gray-200 p-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <span className="font-semibold">{faq.question}</span>
            <span className="text-gray-600">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="bg-gray-100 p-4">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
   </div>
  );
};

export default FAQ;
