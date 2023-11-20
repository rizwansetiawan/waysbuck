import React, { useState } from "react";
import Navbar from "./Navbar";
import pin from "../../assets/Svg/pin.svg";
import FormAddToping from "./FormAddToping";

const AddToping = () => {
  return (
    <>
      <Navbar />
      <div className=" rounded-lg h-[500px] mx-[150px] flex flex-row justify-between items-center">
        <Content />
      </div>
    </>
  );
};

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      readAndPreview(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      readAndPreview(file);
    }
  };

  const readAndPreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="grid grid-cols-5 w-screen h-full ">
      <div className="col-span-3 pr-16">
        <h1 className=" text-3xl font-bold text-[#BD0707] mb-7">Toping</h1>

        <FormAddToping>
          <div className="col-span-1">
            <div
              className="flex items-center justify-center w-full"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center px-2 py-5 mt-5 h-[35px] w-full border-2 border-[#BD0707] border-solid rounded-lg cursor-pointer bg-[#f7eeee] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-row items-center justify-between  w-full ">
                  <p className=" text-sm text-gray-500 dark:text-gray-400">
                    {selectedFile ? "Selected File" : "Photo Product"}
                  </p>

                  <img src={pin} alt="" />
                </div>

                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
        </FormAddToping>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        {selectedFile ? (
          <img src={selectedFile} alt="Preview" className="w-[300px] mb-2" />
        ) : (
          <div
            h-full
            className="border-2 p-20 border-emerald-950 border-dotted"
          >
            <h1>Preview Image In Here</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToping;
