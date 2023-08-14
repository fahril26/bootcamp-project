import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import Img1 from "../assets/cards-icon/001-teacher.png";
import Img2 from "../assets/cards-icon/002-award.png";
import Img3 from "../assets/cards-icon/003-programming.png";
import Img4 from "../assets/cards-icon/004-student.png";

import "../style/About.css";

const About = () => {
  const cardList = [
    { title: "Best Teacher", img: Img1 },
    { title: "Certificate", img: Img2 },
    { title: "Good Program", img: Img3 },
    { title: "Student Service", img: Img4 },
  ];

  const Cards = cardList.map((data) => (
    <div className="col mb-4 d-flex justify-content-center" key={data.title}>
      <Card className="cards" key={data.title}>
        <Card.Body>
          <img
            src={data.img}
            alt="icon"
            style={{ width: "40%", marginBottom: "20px" }}
          />

          <Card.Title className="mb-3">{data.title}</Card.Title>

          <Card.Text>
            Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod
            tempor.
          </Card.Text>

          <Card.Link href="#">Read More</Card.Link>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <section id="about" className="about bg-body-secondary pt-5 pb-5">
      <div className="container">
        <div className="row">
          <Header>
            Welcome To <span>Bootcamp</span>
          </Header>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {Cards}
        </div>
      </div>
    </section>
  );
};

export default About;
