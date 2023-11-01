import './Header.css'
import Logo from '../../images/newspaper.png'
function Header() {
  return (
    <header className='header-top'>
      <div className='header'>
        <section className='img-section'>
          <img className='newspaper-img' src={Logo} alt='newspaper logo'></img>
        </section>
        <p className="news-now-title">
          NEWS NOW
        </p>
      </div>
    </header>
  )
}

export default Header