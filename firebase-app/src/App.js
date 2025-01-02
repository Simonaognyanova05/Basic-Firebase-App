import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth.js';
import { db } from './config/firebase.js';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMovieList(filteredData);
      } catch (e) {
        console.log(e);
      }
    }

    getMovieList();
  }, [])

  return (
    <h1>
      <Auth />

      <div>
        {movieList.map(movie => (
          <div>
            <h1>{movie.title}</h1>
            <p>Date: {movie.releaseDate}</p>
            <p>Oskar: {movie.receivedAnOskar}</p>

          </div>
        ))}
      </div>
    </h1>
  );
}

export default App;
