import Header from "../components/Header";

import Img1 from "../assets/blog/1.jpg";
import Img2 from "../assets/blog/2.jpg";
import Img3 from "../assets/blog/3.jpg";
import Img4 from "../assets/blog/4.jpg";
import { Card } from "react-bootstrap";
import SlidesPerView from "../components/SlidesPerView";
import useScroll from "../hook/useScroll";

import "../style/Blog.css";
import { useEffect } from "react";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos esse earum molestiae laboriosam voluptates.";

// eslint-disable-next-line react/prop-types
const Blog = ({ windowWidth, moduleActive }) => {
  const initialValues = { threShold: 3500 };

  const [isValiable, setCurrentValue] = useScroll(initialValues);

  const styleCardHeader = {
    background: "inherit",
    fontSize: "0.8rem",
    fontStyle: "italic",
  };

  const newsList = [
    {
      img: Img1,
      title: "Many companies need programmers",
    },
    {
      img: Img2,
      title: "This bootcamp offers jobs after graduate",
    },
    {
      img: Img3,
      title: "This bootcamp is one of the best in the wolrd",
    },
    {
      img: Img4,
      title: "companies cooperate with this company",
    },
  ];

  const slides = newsList.map((slide) => (
    <Card key={slide.title}>
      <Card.Img variant="top" src={slide.img} />
      <Card.Header className="text-secondary " style={styleCardHeader}>
        <i className="bi bi-calendar2-event-fill me-1"></i> Wednesdey, 16 August
        2023
      </Card.Header>
      <Card.Body>
        <Card.Title>{slide.title}</Card.Title>
        <Card.Text className="text-secondary">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Card.Link href="#" className="text-decoration-none">
          Read More
        </Card.Link>
      </Card.Body>
    </Card>
  ));

  const handleChangeInitialValueScroll = (width) => {
    if (width < 992 && width > 768) setCurrentValue({ threShold: 3350 });
    else if (width < 768 && width > 540) setCurrentValue({ threShold: 3565 });

    if (width < 540) setCurrentValue({ threShold: 3800 });
  };

  useEffect(() => {
    handleChangeInitialValueScroll(windowWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <section id="blog" className="blog bg-body-secondary pt-5 pb-5">
      <div className="container">
        <Header description={description} className={isValiable ? "show" : ""}>
          Recent <span>News</span>
        </Header>

        <SlidesPerView
          slides={slides}
          windowWidth={windowWidth}
          moduleActive={moduleActive}
        />
      </div>
    </section>
  );
};

export default Blog;
