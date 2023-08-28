import React , {useEffect} from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  
    useEffect(() => {
      // When the component mounts, try to retrieve the pagination state from localStorage
      const storedPage = localStorage.getItem('currentPage');
      const storedTotalPages = localStorage.getItem('totalPages');



    }, []);
  
    useEffect(() => {
      // When the currentPage or totalPages change, store them in localStorage
      localStorage.setItem('currentPage', currentPage);
      localStorage.setItem('totalPages', totalPages);
        // Log the saved values for debugging
  console.log('Saved currentPage:', currentPage);
  console.log('Saved totalPages:', totalPages);
    }, [currentPage, totalPages]);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const visiblePageNumbers = [];
  const showFirstAndLast = true; // Set this to true to show only the first and last pages

  if (showFirstAndLast) {
    if (totalPages <= 1) {
      // If there's only one page, show nothing
      visiblePageNumbers.push();
    } else {
      if (currentPage !== 1) {
        visiblePageNumbers.push(1);
      }

      if (currentPage - 2 > 2) {
        visiblePageNumbers.push('...');
      }

      if (currentPage > 1 && currentPage < totalPages) {
        visiblePageNumbers.push(currentPage);
      }

      if (currentPage + 2 < totalPages) {
        visiblePageNumbers.push('...');
      }

      if (currentPage !== totalPages) {
        visiblePageNumbers.push(totalPages);
      }
    }
  } else {
    // Include the original logic for displaying a subset of pages
    if (currentPage <= 3) {
      visiblePageNumbers.push(...pageNumbers.slice(0, 5));
      if (totalPages > 5) {
        visiblePageNumbers.push('...');
      }
    } else if (currentPage >= totalPages - 2) {
      if (totalPages > 5) {
        visiblePageNumbers.push('...');
      }
      visiblePageNumbers.push(...pageNumbers.slice(totalPages - 5, totalPages));
    } else {
      visiblePageNumbers.push(1);
      if (currentPage > 4) {
        visiblePageNumbers.push('...');
      }
      visiblePageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      if (currentPage < totalPages - 3) {
        visiblePageNumbers.push('...');
      }
      visiblePageNumbers.push(totalPages);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && ( // Render the previous arrow only if currentPage is greater than 1
          <li className={`page-item`}>
            <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
              &laquo; {/* Previous page */}
            </button>
          </li>
        )}
        {visiblePageNumbers.map((pageNumber, index) => (
          <li key={index} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(pageNumber)}>
              {pageNumber === '...' ? '...' : pageNumber}
            </button>
          </li>
        ))}
        {currentPage < totalPages && ( // Render the next arrow only if currentPage is less than totalPages
          <li>
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
              &raquo; {/* Next page */}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
