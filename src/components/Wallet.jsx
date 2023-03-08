import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

import { Loader } from "../components/Loader";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-blue border-none text-sm blue-glassmorphism"
  />
);


const Wallet = () => {
    const linkingWallet = () =>{        //connectWallet

    }
    return (
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" >
      <div class="bg-gradient-to-r from-black via-purple-900 to-cyan-300"></div>
      <div className="flex w-full justify-center items-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className=" flex flex-1 justify-start flex-col md:mr-10">
             <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              Send Your Crypto <br /> Around The Globe
             </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on SectorX.
          </p>
          <button
              type="button"
              onClick={linkingWallet}  //connectWallet
              className="flex flex-row justify-center items-center my-5 bg-[#38319d] p-3 rounded-full cursor-pointer hover:bg-[#38319d]"
            >
             <p className="text-white text-base text-[14px] font-sans"> Connect Wallet </p>
            </button>

            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
               Security
              </div>
              <div className={companyCommonStyles}>Security</div>
              <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                Bitcoin
              </div>
             <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
             </div>
             <div className={companyCommonStyles}>Easy Transfer</div>
             <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
             </div>
            </div>

           </div>  

           <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
             <div className="p-4 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
               <div className="flex justify-between item`~s-start">
                 <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                 </div>
                 <BsInfoCircle fontSize={17} color="#fff" />
             </div>
             <div>
                <p className="text-white font-serif text-sm">
                  Blockchain
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
           </div>
           
           </div>
            <div className="p-5 sm:w-96 w-full flex-col justify-start items-center blue-glassmorphism">
               <Input placeholder="Address To" name="addressTo" type="text"  />
               <Input placeholder="Amount (ETH)" name="amount" type="number" />
               <Input placeholder="Keyword (Gif)" name="keyword" type="text"  />
               <Input placeholder="Enter Message" name="message" type="text"  />

            
               <button
                  type="button"
                 // onClick={handleSubmit}
                  
                // className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                 >
                  <li className="bg-[#ce4a77] py-0 px-1 mx-0 rounded-full cursor-pointer hover:bg-[#da7899] ">
                  Send now
                  </li>
                </button>
                
            
            </div>

          
         </div>
        </div>
     </div>
     </div>
    );
}

export default Wallet;