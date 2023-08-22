import { useEffect, useState } from "react";
import "../style/NewLetter.css";

const NewsLetter = () => {
  const [isShowMessage, setisShowMessage] = useState(false);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("error");
  const [classStyle, setClassStyle] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleValidation = () => {
    checkValidValue(value);
  };

  const checkValidValue = (input) => {
    const newValue = input;

    if (newValue) {
      setisShowMessage(true);
      if (newValue.length < 10) {
        setMessage("Minimum input is 10 characters");
      } else {
        if (
          !newValue.includes("@") ||
          (!newValue.includes(".com") && !newValue.includes(".co.id"))
        ) {
          setStatus("error");
          setMessage("Input a valid email");
        } else {
          setMessage("Email valid");
          setStatus("success");
        }
      }
    } else {
      setisShowMessage(false);
      setStatus("error");
    }
  };

  const handleStatus = () => {
    switch (status) {
      case "error":
        // code block
        setClassStyle("text-danger");
        break;
      case "success":
        // code block
        setClassStyle("text-success");
        break;
      default:
        // code block
        setClassStyle("text-secondary");
    }
  };

  const handleSend = () => {
    if (status === "pending") return;

    let timeOutSuccess = null;
    let timeOutClear = null;

    if (status === "success") {
      setStatus("peding");
      setMessage("Sending...");

      timeOutSuccess = setTimeout(() => {
        setMessage("Success :)");
        setStatus("success");
        timeOutClear = setTimeout(() => {
          setValue("");
          setStatus("error");
          setisShowMessage(false);
        }, 2000);

        return () => clearTimeout(timeOutClear);
      }, 3000);
    }

    return () => clearTimeout(timeOutSuccess);
  };

  useEffect(() => {
    handleStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, status]);

  useEffect(() => {
    handleValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <section id="new-letter" className="new-letter">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-6 col-12">
              <span>Subcribe Today For Newletter</span>
            </div>

            <div className="col-lg-6 col-12">
              <div className="new-letter-input row align-items-center">
                <div className="col-11">
                  <input
                    type="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={value}
                  />
                </div>
                <div className="col-1" onClick={handleSend}>
                  <button className="new-letter-icon" onClick={handleSend}>
                    <i className="bi bi-envelope"></i>
                  </button>
                </div>
              </div>

              {isShowMessage && (
                <div className="message">
                  {status == "error" ? (
                    <i className="bi bi-x text-danger"></i>
                  ) : (
                    <i
                      className={
                        status == "success"
                          ? `bi bi-check-lg text-success`
                          : `bi bi-stopwatch me-2 text-secondary`
                      }
                    ></i>
                  )}

                  <span className={classStyle}>{message}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
