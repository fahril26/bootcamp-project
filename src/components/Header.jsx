/* eslint-disable react/prop-types */
import "../style/Header.css";

const Header = ({ children, description }) => {
  return (
    <header className="mb-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-10 text-center">
            <h3>{children}</h3>
            <p className="text-secondary mt-3">{description}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
