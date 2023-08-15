/* eslint-disable react/prop-types */
import Header from "../components/Header";
import SlidesPerView from "../components/SlidesPerView";
import FrontEnd from "../assets/course/frontend.jpg";
import BackEnd from "../assets/course/backend.jpg";
import FullStuck from "../assets/course/fullstuck.jpg";
import UiUx from "../assets/course/uiux.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Course = ({ windowWidth, moduleActive }) => {
  const datas = [
    { img: FrontEnd, title: "Front End" },
    { img: BackEnd, title: "Back End" },
    { img: FullStuck, title: "Full Stuck" },
    { img: UiUx, title: "Ui/Ux" },
  ];
  const slides = datas.map((data) => (
    <Card key={data.title}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text className="text-secondary">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <section id="course" className="course pt-5 pb-5 bg-body-secondary">
      <div className="container">
        <div className="row justify-content-center">
          <Header>
            Our Popular <span>Course</span>
          </Header>
        </div>

        <SlidesPerView
          slides={slides}
          windowWidth={windowWidth}
          moduleActive={moduleActive}
        ></SlidesPerView>
      </div>
    </section>
  );
};

export default Course;
