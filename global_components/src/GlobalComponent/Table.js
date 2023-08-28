import React, { useEffect, useState } from 'react';
import './custom.css';
import Pagination from './Pagination';

const GlobalTable = ({ tableData, columns, footer, showPagination }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(tableData.length);
  const [displayedData, setDisplayedData] = useState([]);
  const itemsPerPage = 6;

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    localStorage.setItem('currentPage', newPage);
  };

  useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setCurrentPage(parseInt(storedPage));
    }
  }, []);

  const fetchTotalItemsFromDatabase = async () => {
    // Fetch total number of items from the database
    // Example: const response = await fetch('/api/totalItems');
    // const totalItems = await response.json();
    // setTotalItems(totalItems);
  };

  const fetchDataFromDatabase = async (page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const dataSlice = tableData.slice(startIndex, endIndex);
    setDisplayedData(dataSlice);
  };

  useEffect(() => {
    fetchTotalItemsFromDatabase();
  }, []);

  useEffect(() => {
    fetchDataFromDatabase(currentPage, itemsPerPage);
  }, [currentPage, tableData]);

  return (
    <div className="container mt-5">
      <div className="table-responsive" style={{ marginLeft: '-84px', marginRight: '-84px' }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              {columns.map((column) => (
                <th className="custom-table-header" key={column.key}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td style={{ color: '#5f6468' }} key={column.key}>
                    {item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="table-footer" style={{ height: '80px' }}>
              <td style={{ color: "#5f6468", marginLeft: "5px" }} colSpan={columns.length} className="text-center align-middle">
                {footer}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {showPagination && (
        <Pagination totalPages={Math.ceil(totalItems / itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default GlobalTable;
