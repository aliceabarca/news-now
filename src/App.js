import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import fetchNews from './api';
import AllNews from './Components/AllNews/AllNews';
import SearchNews from './Components/SearchNews/SearchNews';
import { Route, Routes, useLocation } from 'react-router';

function App() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  const location = useLocation().pathname
  console.log('local', location)
  
  useEffect(() => {
    setSearch('')
  }, [location])

  useEffect(() => {
    fetchNews()
      .then(data => {
        setNews(data.articles)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<AllNews news={news} search={search}/>} />
      </Routes>
        <SearchNews setSearch={setSearch} />
    </div>
  );
}

export default App;
