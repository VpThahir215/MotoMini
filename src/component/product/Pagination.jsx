import React from 'react'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'

const Pagination = ({ currentPage, totalPages, onPageChange}) => {
  return (
    <div>
       <div className="flex items-center justify-center gap-2 py-8 bg-black pt-0">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-4 py-2 rounded-md border border-zinc-800 bg-zinc-900 text-gray-400 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <FiChevronLeft />
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-md border transition ${
              currentPage === page
                ? "bg-[#D3AF37] border-[#D3AF37] text-white"
                : "bg-zinc-900 border-zinc-800 text-gray-300 hover:bg-zinc-800"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-4 py-2 rounded-md border border-zinc-800 bg-zinc-900 text-gray-400 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
        <FiChevronRight />
      </button>
    </div>
    </div>
  )
}

export default Pagination
