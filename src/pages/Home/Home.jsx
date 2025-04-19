import React, { /* useContext,*/ useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';
// import { BookContext } from '../../context/BookContext';
import './Home.css';

function Home() {
  // const { setNotification } = useContext(BookContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  return (
    <div className="home-page">
      <BookFilter 
        setSearchQuery={setSearchQuery}
        setFilterStatus={setFilterStatus}
      />
      
      <div className="actions-section">
        <BookForm />
        <BookList 
          searchQuery={searchQuery}
          filterStatus={filterStatus}
        />
      </div>
    </div>
  );
}

export default Home;