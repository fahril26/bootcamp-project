import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../style/Hero.css";
import Logo from "../assets/hero/logo1.png";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="jumbotron jumbotron-fluid">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 col-12 text-light">
                <h4 className="anim1">We Will Teach You How To Learn</h4>
                <h1 className="anim2">
                  BEST SCHOOL & ANYTHING TO <span>LEARN</span> SMART WAY
                </h1>
                <p className="lead">Learning & Course etc.</p>

                <div className="btn-wrap d-flex gap-3 anim3">
                  <Button variant="warning">Discover More</Button>
                  <Button variant="outline-warning">Contact Us</Button>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 logo">
                <img src={Logo} alt="hero" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
