import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import fetchNews from './api';

function App() {
  const [news, setNews] = useState([])
  
  useEffect(() => {
    fetchNews()
      .then(data => {
        setNews(data.articles)
      })
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
