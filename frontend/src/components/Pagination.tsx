export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <ul className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full shadow-md">
        <li
          className={`px-3 py-1 rounded-full cursor-pointer ${
            page === 1 ? "text-gray-400 cursor-not-allowed" : "text-customBgLow"
          }`}
          onClick={() => page > 1 && onPageChange(page - 1)}
        >
          &laquo;
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              page === number
                ? "bg-customBgLow text-white"
                : "text-customBgLow bg-white border border-customBgLow"
            } transition-colors duration-300 ease-in-out hover:bg-blue-100`}
          >
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
        <li
          className={`px-3 py-1 rounded-full cursor-pointer ${
            page === pages
              ? "text-gray-400 cursor-not-allowed"
              : "text-customBgLow"
          }`}
          onClick={() => page < pages && onPageChange(page + 1)}
        >
          &raquo;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
