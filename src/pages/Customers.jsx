import React,{useEffect,useState} from 'react';
import axios from './axios';

const Customers = () => {
  const [nfts, setNfts ] = useState("");
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/nfts");
      setNfts(data);
      console.log(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
    {nfts &&
      nfts?.data.map((nft) => (
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{nft.title}</h5>
            <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{nft.about}</h3>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            
           
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{nft.symbol}</span><span>{nft.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Deploy to IPFS</a>
        </div>
    </div>
</div>
 ))}
 </div>

  );
};

export default Customers;
