import "./home.scss";
import img1 from "../../assets/image/Frame 22.png";
import img2 from "../../assets/image/image 3.png";
import img3 from "../../assets/image/image 8.png";
import img4 from "../../assets/image/image 6.png";
const Home = () => {
  return (
    <div id="home">
      <div id="header">
        <h1>Order delicious Foods</h1>
        <p className="headerContent1">bella Onojie mobile app</p>
        <p className="headeContent2">Ui Ux | 2020</p>
      </div>
      <div>
        <div className="content">
          <img src={img1} alt="" className="image1" />
           <img src={img2} alt="" className="image2" />
          <img src={img3} alt="" className="image3" />
          <img src={img4} alt="" className="image4" /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
