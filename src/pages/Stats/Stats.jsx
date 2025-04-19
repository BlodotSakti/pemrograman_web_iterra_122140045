import { useContext } from 'react';
import { useBookStats } from '../../hooks/useBookStats';
import { BookContext } from '../../context/BookContext';
import './Stats.css';

function Stats() {
  const { books } = useContext(BookContext);
  const stats = useBookStats(books);

  return (
    <div className="stats-page">
      <h2>Statistik Koleksi Buku</h2>
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total Buku</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card owned">
          <h3>Dimiliki</h3>
          <p>{stats.owned}</p>
        </div>
        <div className="stat-card reading">
          <h3>Sedang Dibaca</h3>
          <p>{stats.reading}</p>
        </div>
        <div className="stat-card wishlist">
          <h3>Daftar Beli</h3>
          <p>{stats.wishlist}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;