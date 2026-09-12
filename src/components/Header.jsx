import { useState } from 'react';
import { toast } from 'react-toastify';

const links = [
  ['Home', '#home'],
  ['Technologies', '#technologies'],
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact']
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const notify = (message) => toast.info(message);

  return (
    <header className="site-header" id="home">
      <div className="nav-wrap">
        <button className="mobile-menu-button" aria-label="Open navigation" onClick={() => setMenuOpen((open) => !open)}>
          <img src="/assets/hamburger.png" alt="" />
        </button>

        <a className="brand" href="#home" aria-label="Dev Stack home">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="auth-actions">
          <button className="sign-in" onClick={() => notify('Sign in is ready to connect to your auth flow.')}>Sign In</button>
          <button className="sign-up" onClick={() => notify('Sign up is ready to connect to your auth flow.')}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
