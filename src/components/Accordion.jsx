import Accordion from "react-bootstrap/Accordion";

import "../style/Accordion.css";

function AccordionComponent() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to register it?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              a! Esse exercitationem cupiditate, amet repudiandae reprehenderit
              sapiente voluptatibus in fugiat!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Is there a fee for registration?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              After graduating, are you directly hired?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              eveniet omnis quia magni, distinctio quisquam molestias culpa id
              similique ab.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionComponent;
