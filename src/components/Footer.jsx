import React from "react";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#home"><img src="/assets/logo-text.png" alt="Dev Stack" /></a>
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <FooterLinks title="PRODUCT" links={['Home', 'Technologies', 'Projects']} />
        <FooterLinks title="COMPANY" links={['About', 'Contact', 'Careers']} />
        <FooterLinks title="LEGAL" links={['Privacy Policy', 'Terms of Service']} />
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="footer-links">
      <h4>{title}</h4>
      {links.map((link) => <a key={link} href={link === 'Home' ? '#home' : `#${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a>)}
    </div>
  );
}
