import React from 'react';

export default function Resume() {
  return (
    <div>
        <section className="banner_section_padding">
            <div className="md_wrapper">
                <h1>An eye for code.</h1>
                <h2>A mind for design.</h2>
                <h4>
                As a front-end developer, I bring ideas to life through responsive design, optimized performance,
                and intuitive interfaces. I specialize in crafting modern web experiences using React, Tailwind, and CMS platforms like HubSpot and WordPress.
                </h4>
                <h4 className="spacing">
                I build with purpose — delivering websites that are fast, scalable, and focused on user impact.
                </h4>
                <a
                href="https://drive.google.com/file/d/1MZn-FpIObHsHLrdB8sUJX06H6xfAfKym/view?usp=sharing"
                download
                className="cta_button"
                >
                Download resume as PDF
                </a>
            </div>
        </section>
        <section className="sec_sec section_padding">
            <div className="md_wrapper">
                <div className="exp">
                    <h3 className="text-xl font-semibold mb-4">Experience</h3>
                    <div className="mb-6">
                    <h4 className="font-bold">Freelance Front-End Developer</h4>
                    <p className="text-sm text-gray-500">2024 — Present</p>
                    <p>
                        Built custom React portfolios, WordPress eCommerce stores, and interactive landing pages. Focused on clean UI,
                        SEO, and performance optimization. Delivered websites for early-stage startups and service providers.
                    </p>
                    </div>
                    <div>
                    <h4 className="font-bold">Front-End Developer</h4>
                    <p className="text-sm text-gray-500">2022 — 2024</p>
                    <p>
                        Led front-end implementation on HubSpot CMS and WordPress, collaborating with designers and backend teams.
                        Delivered pixel-perfect interfaces, maintained responsive layouts, and conducted cross-browser testing.
                    </p>
                    <p className="text-sm italic text-gray-600 mt-2">
                        Skills: Responsive design, SEO optimization, custom themes, CMS integration, JavaScript, HubSpot modules, Tailwind, Git workflows
                    </p>
                    </div>
                </div>

                <div className="core">
                    <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
                    <ul className="list-disc list-inside space-y-2">
                    <li>React, Tailwind CSS, JavaScript</li>
                    <li>HTML, CSS/SCSS, component-based architecture</li>
                    <li>WordPress and HubSpot CMS development</li>
                    <li>SEO, accessibility, and performance optimization</li>
                    <li>jQuery, Git, prototyping, and testing</li>
                    </ul>
                </div>

                <div className="hard">
                    <h3 className="text-xl font-semibold mb-4">Hard Skills</h3>
                    <ul className="list-disc list-inside space-y-2">
                    <li>Semantic HTML, CSS architecture, and modular design</li>
                    <li>JavaScript ES6+, DOM handling, async patterns</li>
                    <li>Page speed optimization, Lighthouse audits</li>
                    <li>HubSpot module + WordPress theme development</li>
                    <li>Conversion tracking, mobile-first workflows</li>
                    </ul>
                </div>

                <div className="soft">
                    <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                    <ul className="list-disc list-inside space-y-2">
                    <li>Clear communication and remote collaboration</li>
                    <li>Startup mindset and fast problem-solving</li>
                    <li>Clean code habits and reusable components</li>
                    <li>UI/UX attention to detail</li>
                    <li>Quick learner, self-motivated developer</li>
                    </ul>
                </div>

                <div className="int">
                    <h3 className="text-xl font-semibold mb-4">Interests</h3>
                    <ul className="list-disc list-inside space-y-2">
                    <li>Experimenting with front-end tools and frameworks</li>
                    <li>Creative cooking</li>
                    <li>Exploring history, tech, and travel destinations</li>
                    </ul>
                </div>
            </div>
        </section>
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
