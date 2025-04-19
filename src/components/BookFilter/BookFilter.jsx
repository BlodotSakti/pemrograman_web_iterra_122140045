import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import './BookFilter.css';

function BookFilter() {
  const { setSearchQuery, setFilterStatus } = useContext(BookContext);

  // Validasi untuk memastikan fungsi tersedia
  const handleSearchChange = (e) => {
    if (setSearchQuery) {
      setSearchQuery(e.target.value);
    } else {
      console.error('setSearchQuery is not defined in BookContext.');
    }
  };

  const handleFilterChange = (e) => {
    if (setFilterStatus) {
      setFilterStatus(e.target.value);
    } else {
      console.error('setFilterStatus is not defined in BookContext.');
    }
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Cari buku..."
        className="search-input"
        onChange={handleSearchChange}
      />
      <select 
        className="status-filter"
        onChange={handleFilterChange}
      >
        <option value="all">Semua Status</option>
        <option value="milik">Milik Saya</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Membeli</option>
      </select>
    </div>
  );
}

export default BookFilter;