import './SingleNews.css'
import React from "react";
import { useParams } from "react-router"


function SingleNews({ news }) {
  const { articleId } = useParams()

  const selectedArticle = news[articleId]
 
  if (!selectedArticle) {
    return <div>Article not found!</div>
  }
  
  return (
    <div>
      <h2>{selectedArticle.title}</h2>
      <p>Author: {selectedArticle.author}</p>
      <p>{selectedArticle.description}</p>
      <p>{selectedArticle.publishedAt}</p>
      <img className="image" src={selectedArticle.urlToImage} name="image-poster" alt={selectedArticle.title}/>
    </div>
  )

}

export default SingleNews