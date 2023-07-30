import "./index.css";
import { BiMenu } from "react-icons/bi";
import Img from './img.jpg'

function App() {
  return (
    <>
      <div className="main">
        <div className="nav">
          <h1>LOGO</h1>
          <div className="nav2">
            <h4>Store</h4>
            <h4>Exam</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <button>Sign In</button>
            <h3 className="icon">
              <BiMenu />
            </h3>
          </div>
        </div>
        <div id="content-bg">
          <div id="left">
            <h1>This is an best <span>Responsive</span> website of India</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus minus in alias molestias consectetur cum doloribus iure nesciunt eos!</p>
            <button>Explore</button>
          </div>
          <div id="right">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
