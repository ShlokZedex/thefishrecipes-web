import React from "react";

const Categories = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-primary-2 py-9 gap-6 px-10 flex flex-col">
        <h1 className="font-bold border-b pb-5">Categories</h1>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="flex justify-between cursor-pointer">
              <h4 className="text-gray-500  hover:text-primary-3">Travel</h4>
              <p className="text-primary-3 text-xs">24</p>
            </li>
            <li className="flex justify-between cursor-pointer">
              <h4 className="text-gray-500  hover:text-primary-3">Lifestyle</h4>
              <p className="text-primary-3 text-xs">5</p>
            </li>
            <li className="flex justify-between cursor-pointer">
              <h4 className="text-gray-500  hover:text-primary-3">Food</h4>
              <p className="text-primary-3 text-xs">8</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
