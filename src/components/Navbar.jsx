import "../style/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import useScroll from "../hook/useScroll";

const initialValues = { threShold: 50, theBeginning: true };

function OffCanvasExample() {
  const [isValiable] = useScroll(initialValues);

  const navList = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Course", link: "#course" },
    { title: "Gallery", link: "#gallery" },
    { title: "Blog", link: "#blog" },
    { title: "Contact", link: "#contact" },
  ];

  const Navigation = navList.map((data) => (
    <Nav.Link href={data.link} key={data.title}>
      {data.title}
    </Nav.Link>
  ));

  return (
    <>
      <Navbar
        expand="lg"
        className={`container-fluid ${isValiable ? "on-scroll" : ""}`}
        bg={isValiable && "dark"}
      >
        <Container fluid>
          <Navbar.Brand href="#">Bootcamp</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            className={`bg-dark text-light`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Bootcamp
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                {Navigation}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffCanvasExample;
