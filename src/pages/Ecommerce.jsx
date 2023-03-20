import React,{useEffect,useState} from 'react';
import axios from './axios';

function Ecommerce() {

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
    <div class="p-8">
      
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
       
    {nfts &&
      nfts?.data.map((nft) => (
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {nft.title}
                </th>
                <td class="px-6 py-4">
                    {nft.about}
                </td>
                <td class="px-6 py-4">
                    {nft.symbol}
                </td>
                <td class="px-6 py-4">
                    {nft.price}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
      ))}
      
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Ecommerce