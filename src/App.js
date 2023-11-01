import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import fetchNews from './api';
import AllNews from './Components/AllNews/AllNews';
import SearchNews from './Components/SearchNews/SearchNews';

function App() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  // console.log(news[1].source.id)
  useEffect(() => {
    fetchNews()
      .then(data => {
        setNews(data.articles)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <AllNews news={news} />
      <SearchNews setSearch={setSearch} />
    </div>
  );
}

export default App;
