import React from 'react';

export const Footer = () => {
    // Credit: https://mdbootstrap.com/docs/b4/jquery/navigation/footer/

    return (
      <footer className="page-footer font-small blue pt-4">

        <div className="container-fluid text-center text-md-left">

          <div className="row">

            <div className="col-md-3 mt-md-0 mt-3">

              <h5 className="text-uppercase">Contact us</h5>
              <p><a href="https://support.bioconductor.org/">support.bioconductor.org</a></p>

            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3">

              <h5 className="text-uppercase">Users</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/news">Latest news</a>
                </li>
                <li>
                  <a href="/packages">Packages</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>

            </div>

            <div className="col-md-3 mb-md-0 mb-3">

              <h5 className="text-uppercase">Developers</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/news">Latest news</a>
                </li>
                <li>
                  <a href="/packages">Packages</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>

            </div>

            <div className="col-md-3 mb-md-0 mb-3">

              <h5 className="text-uppercase">Community</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/signup">Sign in</a>
                </li>
                <li>
                  <a href="/signin">Sign up</a>
                </li>
              </ul>

            </div>

          </div>

        </div>

        <div className="footer-copyright text-center py-3">
          © 2020
          Copyright: <a href="https://github.com/kevinrue/bioconductor_website_meteor">kevinrue/bioconductor_website_meteor</a>
        </div>

      </footer>
    );
};
