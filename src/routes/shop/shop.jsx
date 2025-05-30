import { Link } from 'react-router-dom'
import './shop.scss'
import { listData } from "../../lib/dummydata";
import Card from "../../components/card/Card";

// Link

function Shop(){
  const data = listData;

  return (
    <div className='shop'>
         {/* <div className="homecard">
       <div className="Hcard">
       <Link className="Hlink" to="/list">
       {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
       </Link>
       </div>
      </div> */}
      <h1>Lorem, ipsum.</h1>
    </div>
  )
}

export default Shop