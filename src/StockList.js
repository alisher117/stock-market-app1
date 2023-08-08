import React, { useState, useEffect } from 'react';
import { fetchStockData } from './api';
import Pagination from './Pagination';
import Modal from './Model.js';
import './stock.css'; 
const StocksPerPage = 10;

const StockList = () => {
  const [stockData, setStockData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStock, setSelectedStock] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStockData();
      setStockData(data);
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedStock(null);
  };

  const openModal = (stock) => {
    setSelectedStock(stock);
  };

  const closeModal = () => {
    setSelectedStock(null);
  };

  const indexOfLastStock = currentPage * StocksPerPage;
  const indexOfFirstStock = indexOfLastStock - StocksPerPage;

  const filteredStocks = stockData.filter((stock) =>
    stock.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentStocks = filteredStocks.slice(indexOfFirstStock, indexOfLastStock);

  return (
    <div className="stock-list">
      <h1>Фондовый Рынок</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by company"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Символ Компании</th>
            <th>Наименование Компании</th>
            <th>Дата прихода</th>
            <th>Коэфициент закрытия</th>
            <th>Высокий коэффициент</th>
            <th>Низкий коэффициент</th>
            <th>Коэфициент открытия</th>
            <th>Объем</th>
          </tr>
        </thead>
        <tbody>
          {currentStocks.map((stock) => (
            <tr key={stock.id} onClick={() => openModal(stock)}>
              <td>{stock.symbol}</td>
              <td>{stock.company}</td>
              <td>{stock.date}</td>
              <td>{stock.close}</td>
              <td>{stock.high}</td>
              <td>{stock.low}</td>
              <td>{stock.open}</td>
              <td>{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredStocks.length / StocksPerPage)}
        onPageChange={handlePageChange}
      />
      <Modal isOpen={selectedStock !== null} onClose={closeModal} stock={selectedStock} />
    </div>
  );
};

export default StockList;
