import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>With CheckBest Get Your Dream place to thrive</h1>
          <p>
          the perfect place to grow your business. Whether you're 
          launching a startup or expanding your brand, we offer 
          prime retail shops in a vibrant, high-traffic location 
          {/* designed to drive success. */}
          </p>
          <div>
          <SearchBar />
          </div>

          <div className="boxes">
            <div className="box">
              <h1>35+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
    
      </div>
      <div className='imgContainer'>
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage