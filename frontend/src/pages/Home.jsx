import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; // Import animation components
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BookTable from '../components/home/BookTable';
import BookCard from '../components/home/BookCard';
import './Home.css'; // Create a CSS file for styling

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        console.log(response.data);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
     
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className={`view-button ${showType === 'table' ? 'active' : ''}`}
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className={`view-button ${showType === 'card' ? 'active' : ''}`}
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-7xl my-8 text-white'>Book List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-white text-5xl' />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <TransitionGroup>
          <CSSTransition
            key={showType}
            classNames='fade'
            timeout={300}
          >
            {showType === 'table' ? <BookTable books={books} /> : <BookCard books={books} />}
          </CSSTransition>
        </TransitionGroup>
      )}
    </div>
  );
}

export default Home;
