import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const Pagination = ({ totalGames, paginate, currentPage, gamesPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    
        <div className="join lg:hidden flex justify-center">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`join-item btn ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
          <button className="join-item btn">Page {currentPage} /{parseInt(totalGames / 8)} </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`join-item btn ${
              currentPage === totalGames ? "cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalGames}
          >
            <FaAngleRight />
          </button>
        </div>
      
     <div className="hidden lg:block">
     <div className="flex justify-center mt-4 ">
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`mx-2 px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-green-500 text-white"
          }`}
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-2 px-4 py-2 rounded-lg ${
              currentPage === number
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          className={`mx-2 px-4 py-2 rounded-lg ${
            currentPage === Math.ceil(totalGames / gamesPerPage)
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-green-500 text-white"
          }`}
          disabled={currentPage === Math.ceil(totalGames / gamesPerPage)}
        >
          <FaAngleRight />
        </button>
      </div>
     </div>
    </>
  );
};

export default Pagination;
