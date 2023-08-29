/* eslint-disable react-refresh/only-export-components */
import { Button, Spinner } from "react-bootstrap";
import "../style/Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { memo, useContext, useEffect, useState } from "react";
import useScroll from "../hook/useScroll";
import { ResizeWindowContext } from "../context/WindowWidthContext";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(6, "*Must be 6 characters or more")
    .required("*Required"),
  email: Yup.string()
    .email("*Invalid email address")
    .required("*Required")
    .min(10, "*Must be 10 characters or more"),
  subject: Yup.string()
    .required("*Required")
    .min(10, "*Must be 10 characters or more"),
  message: Yup.string()
    .required("*Required")
    .min(15, "*Must be 15 characters or more"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isValiable] = useScroll({ threShold: 4820 });
  const [isValiableInfoResize, setIsValiableInfoResize] = useScroll({});
  const [isValiableFormResize, setIsValiableFormResize] = useScroll({});

  const windowWidth = useContext(ResizeWindowContext);
  const [resizeWindow, setResizeWindow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,

    onSubmit: (values, { resetForm }) => {
      setLoading(true);

      const timeoutSubmit = setTimeout(() => {
        resetForm();
        setLoading(false);

        alert("Success :)");
      }, 2000);

      return () => clearTimeout(timeoutSubmit);
    },
  });

  const handleChangeInitialValueScroll = (width) => {
    if (width < 992 && width > 768) {
      setIsValiableInfoResize({
        threShold: 4430,
      });
      setIsValiableFormResize({
        threShold: 4745,
      });
    } else if (width < 768 && width > 540) {
      setIsValiableInfoResize({
        threShold: 4535,
      });
      setIsValiableFormResize({
        threShold: 4865,
      });
    }

    if (width < 540) {
      setIsValiableInfoResize({
        threShold: 5040,
      });
      setIsValiableFormResize({
        threShold: 5353,
      });
    }
  };

  const handleResizeWindow = () => {
    windowWidth < 992 ? setResizeWindow(true) : setResizeWindow(false);
  };

  useEffect(() => {
    handleChangeInitialValueScroll(windowWidth);
    handleResizeWindow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <section id="contact" className="contact pb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 pe-lg-5 contact-info">
            <header
              className={
                resizeWindow
                  ? isValiableInfoResize
                    ? "show"
                    : ""
                  : isValiable
                  ? "show"
                  : ""
              }
            >
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

          <div className="col-12 col-lg-6 form">
            <header
              className={
                resizeWindow
                  ? isValiableFormResize
                    ? "show"
                    : ""
                  : isValiable
                  ? "show"
                  : ""
              }
            >
              <h3>
                Get In <span>Touch</span>
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                culpa optio voluptates maiores error! Voluptate.
              </p>
            </header>

            <form onSubmit={formik.handleSubmit}>
              <div className="row justify-content-between">
                <div className="half">
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.errors.name ? (
                    <span className="error">
                      {formik.touched.name && formik.errors.name}
                    </span>
                  ) : null}
                </div>

                <div className="half">
                  <input
                    type="text"
                    placeholder="Your Email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.errors.email ? (
                    <span className="error">
                      {formik.touched.email && formik.errors.email}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Your Subject"
                    {...formik.getFieldProps("subject")}
                  />
                  {formik.errors.subject ? (
                    <span className="error">
                      {formik.touched.subject && formik.errors.subject}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <textarea
                    cols={50}
                    placeholder="Message"
                    wrap="off"
                    {...formik.getFieldProps("message")}
                  ></textarea>
                  {formik.errors.message ? (
                    <span className="error">
                      {formik.touched.message && formik.errors.message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="row">
                {!loading ? (
                  <Button type="submit" variant="warning">
                    Submit
                  </Button>
                ) : (
                  <Button variant="warning" disabled>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
