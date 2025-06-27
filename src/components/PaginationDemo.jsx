import { useState } from "react";
import usePagination from "../hooks/usePagination";

function PaginationDemo() {
  const totalItems = 123;

  const allItems = [];

  for (let i = 1; i <= totalItems; i++) {
    allItems.push(`Item ${i}`);
  }
  // console.log(allItems);

  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination({ totalItems, itemsPerPage });

  const currentItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    currentItems.push(allItems[i]);
  }
  const handleItemsPerPage = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setItemsPerPage(value);
      setPage(1);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center border rounded-lg">
       <h3 className="text-center text-lg font-bold mb-4"> Pagnation Demo</h3>
      <label htmlFor="perPage" className="mr-2 font-medium">
        Items per page:
      </label>
      <select
        value={itemsPerPage}
        onChange={handleItemsPerPage}
        className="border p-1 rounded"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>

      <ul className="mb-4">
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      

      <button
        className="mr-4 px-2 py-1 border rounded"
        onClick={prevPage}
        disabled={!canPrevPage}
      >
        prevPage
      </button>
      <label htmlFor="perPage" className="mr-2 font-medium">
        Page
      </label>
      <input
       className="w-8"
        type="number"
        value={currentPage}
        onChange={(e) => setPage(Number(e.target.value))}
      ></input>
      <label htmlFor="perPage" className="mr-2 font-medium">
        of {totalPages}
      </label>
      <button
        className="ms-2 px-2 py-1 border rounded"
        onClick={nextPage}
        disabled={!canNextPage}
      >
        nextPage
      </button>

      {/* <p className="mt-2">
        Page {currentPage} of {totalPages}
      </p> */}

      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`px-2 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginationDemo;
