/* eslint-disable react-refresh/only-export-components */
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import Img1 from "../assets/cards-icon/001-teacher.png";
import Img2 from "../assets/cards-icon/002-award.png";
import Img3 from "../assets/cards-icon/003-programming.png";
import Img4 from "../assets/cards-icon/004-student.png";

import "../style/About.css";
import { memo, useEffect, useState } from "react";
import useScroll from "../hook/useScroll";

const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, dolores nam officia quam quae quaerat!`;

const cardList = [
  { title: "Best Teacher", img: Img1, visible: false },
  { title: "Certificate", img: Img2, visible: false },
  { title: "Good Program", img: Img3, visible: false },
  { title: "Student Service", img: Img4, visible: false },
];

const About = () => {
  const [isValiableHeader] = useScroll({ threShold: 200 });
  const [isValiableCards] = useScroll({ threShold: 400 });
  const [cards, setCards] = useState(cardList);

  const Cards = cards.map((data, index) => (
    <div
      className={`card-wrapper col mb-4 d-flex justify-content-center  ${
        cards[index].visible ? "show" : ""
      }`}
      key={data.title}
    >
      <Card key={data.title}>
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

  const showPerCard = (cards) => {
    let newCards = [];
    let timeout = null;

    // Clear Data Cards
    setCards(newCards);
    // Clone Data Cards
    newCards = cards.slice();

    for (const index in newCards) {
      timeout = setTimeout(() => {
        newCards[index].visible = true;
        setCards((prev) => [...prev, newCards[index]]);
      }, index * 200);
    }

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (isValiableCards) showPerCard(cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValiableCards]);

  return (
    <section id="about" className="about bg-body-secondary pt-5 pb-5">
      <div className="container">
        <div className="row">
          <Header
            description={description}
            className={isValiableHeader ? "show" : ""}
          >
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

export default memo(About);
