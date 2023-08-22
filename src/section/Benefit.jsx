import CrossFade from "../components/CrossFade";
import "../style/Benefit.css";

const Benefit = () => {
  return (
    <section id="benefit" className="benefit ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-5">
            <div className="row">
              <div className="col-12 col-md-11 header">
                <h3>
                  Learn to become a professional <span>Programmer</span>
                </h3>

                <p className="text-secondary mt-4 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  dolore libero, maxime debitis velit expedita enim a
                  repellendus.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card">
                  <span>
                    <i className="bi bi-check"></i>Learn Programming
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div className="card">
                  <span>
                    <i className="bi bi-check"></i>Best Quality
                  </span>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-6">
                <div className="card">
                  <span>
                    <i className="bi bi-check"></i>Front End
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div className="card">
                  <span>
                    <i className="bi bi-check"></i>Back End
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <CrossFade />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
