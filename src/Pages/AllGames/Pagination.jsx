const Pagination = ({ totalGames, paginate, currentPage, gamesPerPage }) => {
  
    
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center mt-4">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-2 px-4 py-2 rounded-lg ${
              currentPage === number ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  export default Pagination