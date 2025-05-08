import React from 'react';

function About() {
  return (
    <div className="about-page bg-white text-gray-900 px-6 md:px-12 lg:px-24 py-16">
      <section className="banner_section_padding">
        <div className="lg_wraperr">
          <h1 className="spacing">Hi, I'm Aryan.</h1>
          <div className="row-fluid sec_cent spacing">
            {/* Image section */}
            <div className="span6 Image_box">
              <div className="about_image">
              <img
                src="/Images/About.jpg"
                alt="Profile"
              />
              </div>
            </div>

            {/* Intro section */}
            <div className="span6 intro_box">
              <h4>
                I'm a front-end developer with over 3 years of experience building responsive, user-focused 
                websites and applications. My expertise spans HTML, CSS, JavaScript, Java, Tailwind CSS, 
                Bootstrap, HubSpot CMS, SEO, and WordPress development.
              </h4>
            </div>
          </div>

          <div className="row-fluid sec_cent">
            <div className="span6">
                <p>
                  With a strong foundation in design principles and modern web technologies, I specialize in 
                  crafting intuitive interfaces that not only look good but also deliver measurable results. 
                  From startups to freelance clients, I’ve worked with teams to bring digital visions to
                   life—from custom HubSpot templates to fully responsive eCommerce websites.
                </p>
            </div>
            <div className="span6">
              <p>
                Currently, I'm expanding my skills with an MBA in IT from Amity University while continuing 
                to deliver high-quality web solutions. I enjoy solving problems, optimizing performance, 
                and constantly learning to stay ahead in the fast-paced tech world.
                Outside of tech, I love cooking, exploring new places, and diving into creative side projects.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA section */}
      <section className="cta_section section_padding bg_dark all_text_white align_center">
            <div className="md_wrapper">
                <h2>Like what you see?</h2>
                <p>Explore more of my work or download my resume to get in touch.</p>
                <div className="buttons_container">
                <a href="/projects" className="cta_button White">
                    Explore more
                </a>
                <a href="https://drive.google.com/file/d/1MZn-FpIObHsHLrdB8sUJX06H6xfAfKym/view?usp=sharing" className="cta_button white border">
                    Download resume
                </a>
                </div>
            </div>
      </section>
    </div>
  );
}

export default About;
