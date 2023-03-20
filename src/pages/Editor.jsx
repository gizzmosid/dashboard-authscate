import axios from "./axios";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";

import { Header } from "../components";

function Editor() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("0");
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState("");

  const [formFields, setFormFields] = useState([
    { labelname: "", labelvalue: "" },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      labelname: "",
      labelvalue: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const addnft = (e) => {
    e.preventDefault();
    axios
      .post("/nfts", { name, about, symbol, price, photo, date })
      .then(() => {
        setName("");
        setAbout("");
        setSymbol("");
        setPrice("0");
        setPhoto("");
        setDate("");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="p-2 m-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10">
      <Header title="Create your NFT" />

      <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                NFT details
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                This information will be displayed on your NFT
              </p>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label
                        for="company-website"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Product Name
                      </label>
                      <div class="flex mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Name"
                          m-3
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="about"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      About the Product
                    </label>
                    <div class="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        class="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 px-4"
                        placeholder="Product Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      ></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description for your product. URLs are hyperlinked.
                    </p>
                  </div>

                  <label
                    for="company-website"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div class="flex mt-2 rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 text-gray-500 rounded-l-md border border-r-0 border-gray-300 sm:text-sm">
                      {" "}
                      <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setSymbol(e.target.value)}
                        value={symbol}
                      >
                        <option>$</option>
                        <option>₹</option>
                        <option>€</option>
                      </select>
                    </span>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=" &nbsp; amount in numbers"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </div>

                  {/* <div>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                      {" "}
                      Product Cover photo
                    </label>
                    <div class="flex justify-center px-6 pt-5 pb-6 mt-2 rounded-md border-2 border-gray-300 border-dashed">
                      <div class="space-y-1 text-center">
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          for="file_input"
                        >
                          Upload Image
                        </label>
                        <input
                          class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer purple:text-gray-400 focus:outline-none purple:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                          onChange={(e) => setPhoto(e.target.value)}
                          value={photo}
                        />
                        <p
                          class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                          id="file_input_help"
                        >
                          SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    onClick={addnft}
                    class="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Create your NFT
                  </button>
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
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                Additonal Information
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                More description about your product
              </p>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form>
              {formFields.map((form, index) => {
                <div key={index}>
                  <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Label Name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.labelname}
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Label Value
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.labelvalue}
                          />

                          <button
                            onClick={() => removeFields(index)}
                            class="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>;
              })}
            </form>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
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
