import News from "../News/News";
import './AllNews.css'
import { Link } from 'react-router-dom'


function AllNews({ news, search }) {
  const articles = news
  .filter(news => news.title.toLowerCase().includes(search.toLowerCase()))
  .map(news => {
    return (
    <Link to={`/${news.source.id}`} key={news.source.id}>
      <News 
        source={news.source.id}
        author={news.author}
        content={news.content}
        description={news.description}
        publishedAt={news.publishedAt}
        title={news.title}
        url={news.url}
        urlToImage={news.urlToImage}
      />
    </Link>
    )
  })

  return (
    <div className="all-news">
      {articles}
    </div>
  )
}

export default AllNews;