import './News.css'

function News(props) {
  console.log('props', props)
  return (
    <div className='news'>
      <p> {props.title} </p>
    </div>
  )
}

export default News;