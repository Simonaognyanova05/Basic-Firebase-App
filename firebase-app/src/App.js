import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth.js';
import { db } from './config/firebase.js';
import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {
  const [movieList, setMovieList] = useState([]);

  //Movie Info
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOskar, setIsNewMovieOskar] = useState(false);


  const moviesCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMovieList(filteredData);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
  };

  useEffect(() => {
    getMovieList();
  }, [movieList]);

  const onSumbitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, { title: newMovieTitle, releaseDate: newReleaseDate, receivedAnOskar: isNewMovieOskar });

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>
        <Auth />

      </h1>
      <div>
        <input placeholder='Movie title' onChange={(e) => setNewMovieTitle(e.target.value)} />
        <input placeholder='Release date' type='number' onChange={(e) => setNewReleaseDate(Number(e.target.value))} />
        <input type='checkbox'
          checked={isNewMovieOskar}
          onChange={(e) => setIsNewMovieOskar(e.target.checked)} />
        <label>Reseived Oskar</label>
        <button onClick={onSumbitMovie}>Submit Movie</button>
      </div>
      <div>
        {movieList.map(movie => (
          <div>
            <h1>{movie.title}</h1>
            <p>Date: {movie.releaseDate}</p>
            <p>Oskar: {movie.receivedAnOskar}</p>

            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
