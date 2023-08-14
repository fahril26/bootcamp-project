import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../style/Hero.css";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="jumbotron jumbotron-fluid">
          <Navbar />
          <div className="container content">
            <div className="row">
              <div className="col-lg-10 col-12">
                <h4 className="anim1">We Will Teach You How To Learn</h4>
                <h1 className="anim2">
                  BEST SCHOOL & ANYTHING TO <span>LEARN</span> SMART WAY
                </h1>
                <p className="lead">Learning & Course etc.</p>
              </div>
            </div>
            <div className="btn-wrap d-flex gap-3 anim3">
              <Button variant="warning">Discover More</Button>
              <Button variant="outline-warning">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
