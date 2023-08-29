/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

const Location = () => {
  return (
    <section id="location" className="location pt-5 pb-5 bg-body-secondary">
      <div className="container">
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65638948375!2d106.66470170942198!3d-6.2293795884835355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1692873988425!5m2!1sid!2sid"
          aria-hidden="false"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default memo(Location);
