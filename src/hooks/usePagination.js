import { useState } from "react";

function usePagination({ totalItems, itemsPerPage = 10, initialPage = 1 }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages =  Math.ceil(totalItems / itemsPerPage);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage
  const itemsOnCurrentPage =totalItems

    const setPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

  const nextPage = () => {
        setCurrentPage(currentPage+1)
    }

   const prevPage = () => {
        setCurrentPage(currentPage-1)
    }

  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  };
}

export default usePagination;
