import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import fetchNews from './api';
import AllNews from './Components/AllNews/AllNews';
import SearchNews from './Components/SearchNews/SearchNews';
import { Route, Routes, useLocation } from 'react-router';
import SingleNews from './Components/SingleNews/SingleNews';

function App() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  const location = useLocation().pathname
  const [selectedNews, setSelectedNews] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  console.log('news', news)
  useEffect(() => {
    setSearch('')
  }, [location])

  useEffect(() => {
    fetchNews()
      .then(data => {
        setNews(data.articles)
        setLoading(true)
      })
      .catch(err => {
        setError(`Request failed - ${err.message}`)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      {location === '/' && <SearchNews setSearch={setSearch}/>}
      <Routes>
        <Route path='/' element={<AllNews news={news} search={search}/>} />
        <Route path='/article/:articleId' element={<SingleNews news={news} selectedNews={selectedNews} setSelectedNews={setSelectedNews}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
