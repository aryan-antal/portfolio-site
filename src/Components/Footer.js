import React from 'react';

function Footer() {
  return (
    <footer className="footer_container">
      <div className="wrapper">
        <div className="row-fluid">
          <div className="span8 menu_container">
            <div className="logo_container mb-4">
              <a href="/">
                {/* <img
                    src="https://framerusercontent.com/images/EzdcWWHDTDQWhQAmSFjJeKwt8I.svg"
                    alt="Footer Logo"
                /> */}
                <p>Aryan.</p>
              </a>
            </div>

            {/* Page Links */}
            <div className="menu_conta space-x-6">
              <a href="/projects" className="hover:text-blue-500">Projects</a>
              <a href="/about" className="hover:text-blue-500">About</a>
              <a href="/resume" className="hover:text-blue-500">Resume</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="span4 social_icon space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/aryan-antal-74310920b" target="_blank" rel="noreferrer">
              <img src="/Images/Linkedin.svg" alt="LinkedIn" width="24" />
            </a>
            <a href="mailto:aryanantal2301@gmail.com">
              <img src="/Images/Gmail.svg" alt="Email" width="24" />
            </a>
          </div>
        </div>

        {/* Resume / CTA */}
        <div className="bottom_bar mt-6 pt-4 border-t text-sm">
          <p>
            Want to contact me?{' '}
            <a href="https://drive.google.com/file/d/1MZn-FpIObHsHLrdB8sUJX06H6xfAfKym/view?usp=sharing" download className="text-blue-600 underline">
              Download my resume.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
