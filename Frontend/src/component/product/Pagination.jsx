import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-4 py-2 rounded-md border border-zinc-800 bg-zinc-900 text-gray-400 hover:bg-zinc-800 disabled:opacity-40"
      >
        <FiChevronLeft />
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-md border ${
              currentPage === page
                ? "bg-[#D3AF37] text-black border-[#D3AF37]"
                : "bg-zinc-900 text-gray-300 border-zinc-800 hover:bg-zinc-800"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-4 py-2 rounded-md border border-zinc-800 bg-zinc-900 text-gray-400 hover:bg-zinc-800 disabled:opacity-40"
      >
        Next
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;