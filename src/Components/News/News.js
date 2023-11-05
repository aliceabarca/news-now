import './News.css'

function News(props) {
  return (
    <div className='news'>
      <p> {props.title} </p>
    </div>
  )
}

export default News;