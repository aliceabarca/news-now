import News from "../News/News";


function AllNews({ news }) {

  // console.log('map', news)
  const articles = news.map(news => {
    
    return (
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
    )
  })

  return (
    <div className="all-news">
      {articles}
    </div>
  )
}

export default AllNews;