/* eslint-disable react/prop-types */
import "../style/Header.css";

const Header = ({ children }) => {
  return (
    <header className="mb-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-10 text-center">
            <h3>{children}</h3>
            <p className="text-secondary mt-3">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
