import React from 'react';

interface PaginationProps {
  page: number;
  totalResults: number;
  resultsPerPage?: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalResults,
  resultsPerPage = 10,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 m-8">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`px-4 py-2 rounded bg-black text-white font-semibold transition ${
          page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-800'
        }`}
      >
        Prev
      </button>
      <span className="font-semibold text-white">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className={`px-4 py-2 rounded bg-black text-white font-semibold transition ${
          page >= totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-800'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
