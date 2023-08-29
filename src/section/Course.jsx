/* eslint-disable react/prop-types */
import Header from "../components/Header";
import SlidesPerView from "../components/SlidesPerView";
import FrontEnd from "../assets/course/frontend.jpg";
import BackEnd from "../assets/course/backend.jpg";
import FullStuck from "../assets/course/fullstuck.jpg";
import UiUx from "../assets/course/uiux.jpg";
import useScroll from "../hook/useScroll";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

const datas = [
  { img: FrontEnd, title: "Front End" },
  { img: BackEnd, title: "Back End" },
  { img: FullStuck, title: "Full Stuck" },
  { img: UiUx, title: "Ui/Ux" },
];

const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, architecto laborum consectetur itaque porro amet!`;

const Course = ({ windowWidth, moduleActive }) => {
  const initialValues = { threShold: 1400 };

  const [isValiable, setCurrentValue] = useScroll(initialValues);

  const slides = datas.map((data) => (
    <Card key={data.title}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text className="text-secondary">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="warning">Register</Button>
      </Card.Body>
    </Card>
  ));

  const handleChangeInitialValueScroll = (width) => {
    if (width < 992 && width > 768) setCurrentValue({ threShold: 1850 });
    else if (width < 768 && width > 540) setCurrentValue({ threShold: 2290 });

    if (width < 540) setCurrentValue({ threShold: 2450 });
  };

  useEffect(() => {
    handleChangeInitialValueScroll(windowWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <section id="course" className="course pt-5 pb-5 bg-body-secondary">
      <div className="container">
        <div className="row justify-content-center">
          <Header
            description={description}
            className={isValiable ? "show" : ""}
          >
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
