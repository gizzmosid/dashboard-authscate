import axios from './axios';
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';


import { Header } from '../components';


function Editor  () {
  const [title,setTitle]=useState("");
  const [about,setAbout]=useState("");
  const [symbol,setSymbol]=useState("");
  const [price,setPrice]=useState("0");
  const [photo,setPhoto]=useState("");
  const [formFields, setFormFields] = useState([
    { labelname: '', labelvalue: '' },
  ])

  
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      labelname: '',
      labelvalue: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

const addnft=(e)=>{
  e.preventDefault()
  axios.post("/nfts",{title,about,symbol,price,photo}).then(()=>{
    setTitle("");
    setAbout("");
    setSymbol("");
    setPrice("0");
    setPhoto("");
  }).catch((error)=>alert(error.message));




}
  
  return(
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header  title="Create your NFT" />
    
<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6 text-gray-900">NFT details</h3>
        <p class="mt-1 text-sm text-gray-600">This information will be displayed on your NFT</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form  >
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-medium leading-6 text-gray-900">Product Label</label>
                <div class="mt-2 flex rounded-md shadow-sm">
                  
                  <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder= " &nbsp; Label name " m-3 onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About the Product</label>
              <div class="mt-2">
                <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6" placeholder=" &nbsp; some lines about the product" onChange={(e)=>setAbout(e.target.value)} value={about}></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">Brief description for your product. URLs are hyperlinked.</p>
            </div>


            <label for="company-website" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div class="mt-2 flex rounded-md shadow-sm ">
            
                  <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm"> <select id="country" name="country" autocomplete="country-name" class="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setSymbol(e.target.value)} value={symbol}>
                  <option>$</option>
                  <option>₹</option>
                  <option>€</option></select></span>
                  <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" &nbsp; amount in numbers"onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
              







         
            









            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900"> Product Cover photo</label>
              <div class="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" onChange={(e)=>setPhoto(e.target.value)} value={photo}/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button onClick={addnft}
             class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create your NFT</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6 text-gray-900">Additonal Information</h3>
        <p class="mt-1 text-sm text-gray-600">More description about your product</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
    
      <form >
      {formFields.map((form, index) => {
     <div key={index}>
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Label Name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={event => handleFormChange(event, index)}
                value={form.labelname}/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Label Value</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={event => handleFormChange(event, index)}
                value={form.labelvalue}/>


<button  onClick={() => removeFields(index)} class="inline-flex justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Remove</button>
          
              </div>

            
              
             

            </div>
          </div>
         
        </div>
        </div>
      })}
      </form>
      <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
          </div>
      
    </div>
  </div>
</div>
      
<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>


  </div>
  
  );
}
export default Editor;
