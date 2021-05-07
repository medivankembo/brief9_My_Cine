import React from "react";

function Footer() {
  return (
    <footer className="text-center text-white mt-5">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://web.facebook.com/medi.vankembo"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/medivankembo"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/medi-vankembo"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating fade m-1"
            href="https://github.com/medivankembo"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div class="text-center p-3 legal-mention">
        © 2021 Copyright:
        <a class="text-white" href="https//www.kinshasadigitalacademy.com">
          Kishasa Digital academy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
