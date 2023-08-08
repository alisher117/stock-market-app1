import React from 'react';

const Modal = ({ isOpen, onClose, stock }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{stock.company} Детали</h2>
        <p>Символ Компании: {stock.symbol}</p>
        <p>Дата прихода: {stock.date}</p>
        <p>Высокий коэффициент: {stock.high}</p>
        <p>Низкий коэффициент: {stock.low}</p>
        <p>Коэфициент открытия: {stock.open}</p>
        <p>Коэфициент закрытия {stock.close}</p>
        <p>Обьём: {stock.volume}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
