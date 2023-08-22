import "../style/Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            <header>
              <h3>
                Get In <span>Touch</span>
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                culpa optio voluptates maiores error! Voluptate.
              </p>
            </header>

            <form>
              <div className="row justify-content-between">
                <input type="text" placeholder="Your Name" className="half" />
                <input type="text" placeholder="Your Email" className="half" />
              </div>
              <div className="row">
                <div className="col-12">
                  <input type="text" placeholder="Your Subject" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <textarea
                    cols={50}
                    placeholder="Message"
                    wrap="off"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-6 ps-lg-5 contact-info">
            <header>
              <h3>Contact Info</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quibusdam, nam aliquam nobis nostrum ullam est natus,
                exercitationem veritatis neque cumque deleniti consequatur sunt
                molestias
              </p>
            </header>

            <div className="row">
              <div className="col-1 icon">
                <i className="bi bi-house-door-fill"></i>
              </div>

              <div className="col-11">
                <span className="info">Address Location</span> <br />
                <span className="text-secondary">Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="row">
              <div className="col-1 icon">
                <i className="bi bi-telephone-fill"></i>
              </div>

              <div className="col-11">
                <span className="info">Phone Number</span> <br />
                <span className="text-secondary">+62 1234567890</span>
              </div>
            </div>
            <div className="row">
              <div className="col-1 icon">
                <i className="bi bi-envelope-fill"></i>
              </div>

              <div className="col-11">
                <span className="info">Mail Address</span> <br />
                <span className="text-secondary">fhrl@mail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
