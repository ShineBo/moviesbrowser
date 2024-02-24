import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Coming from './components/Cs';
import Aboutview from './components/Aboutview';
import { Routes, Route } from 'react-router-dom'
import SearchView from './components/SearchView';
import MovieDetailsView from './components/MovieDetailsView';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText.trim() !== '') {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=e658f60cafc89aaf0cda12cb8786293a&query=${searchText}&include_adult=false&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
        })
        // .catch(error => {
        //   console.error('Error fetching data:', error);
        // });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutview />} />
        <Route path='/comingsoon' element={<Coming />} />
        <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path='/movies/:id' element={<MovieDetailsView />} />
      </Routes>
    </div>
  );
}

export default App;
