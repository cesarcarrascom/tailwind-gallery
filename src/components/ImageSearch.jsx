import { useState } from "react";
const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hiddenm my-10 mx-auto">
      <form
        action=""
        className="w-full max-w-sm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex items-center border-teal-500 py-2 border-b-2">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search Image term..."
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
