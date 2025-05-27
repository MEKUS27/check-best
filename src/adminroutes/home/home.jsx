// import BarChartBox from "../../components/barChartBox/BarChartBox";
// import BigChartBox from "../../components/bigChartBox/BigChartBox";
// import ChartBox from "../../components/chartBox/ChartBox";
// import PieChartBox from "../../components/pieCartBox/PieChartBox";
// import TopBox from "../../components/topBox/TopBox";
// import {
//   barChartBoxRevenue,
//   barChartBoxVisit,
//   chartBoxConversion,
//   chartBoxProduct,
//   chartBoxRevenue,
//   chartBoxUser,
// } from "../../data";

import {
     barChartBoxRevenue,
     barChartBoxVisit,
    chartBoxConversion,
     chartBoxProduct,
     chartBoxRevenue,
     chartBoxUser,
  } from "../../data";

import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";
// import Navbar from "../../components/navbar/DashboardNavbar";

const Home = () => {
  return (
    
   <>
   {/* <Navbar /> */}
    <div className="test">
    <div className="home">
      
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      {/* <div className="box box4">
        <PieChartBox />
      </div> */}
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      {/* <div className="box box7">
        <BigChartBox />
      </div> */}
      {/* <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div> */}
      {/* <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div> */}
    </div>
    </div>
   </>
  );
};

export default Home;
