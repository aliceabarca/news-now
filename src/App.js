import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import fetchNews from './api';
import AllNews from './Components/AllNews/AllNews';

function App() {
  const [news, setNews] = useState([])
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
    </div>
  );
}

export default App;
