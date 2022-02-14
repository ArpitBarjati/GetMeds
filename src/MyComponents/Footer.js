import React from "react";
import "./main.css";

export default function Footer() {
  return (
    <div>
      <section id="cta" style={{ marginTop: "10rem" }}>
        <h3 className="cta-font">
          <i className="fas fa-tags"></i> Discounts you can't Ignore !
        </h3>
        <button className="btn btn-outline-light btn-lg my-3 mx-2" type="button">
          <a className="a-bottom" href="https://play.google.com/store"><i className="fab fa-google-play "></i> Download</a>
        </button>
        <button className="btn btn-dark btn-lg my-3 mx-2" type="button">
          <a className="a-bottom" href="https://www.apple.com/in/app-store/"><i className="fab fa-apple "></i> Download</a>
        </button>
      </section>

      <footer id="footer">
        <p id="copy-getmeds">© Copyright 2021 GetMeds</p>
      </footer>
    </div>
  );
}
