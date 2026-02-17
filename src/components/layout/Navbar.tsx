import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(({ scrollToSection }, ref) => {
  return (
    <section ref={ref} id="navbar" className="bg-black">
      <header className="d-flex flex-wrap justify-content-center py-3">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <button type="button" className="nav-link fw-bold" onClick={() => scrollToSection('about-me')}>About Me</button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link fw-bold" onClick={() => scrollToSection('ai-career-chatbot')}>AI Career Chatbot</button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link fw-bold" onClick={() => scrollToSection('experience')}>Experience</button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link fw-bold" onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link fw-bold" onClick={() => scrollToSection('education')}>Education</button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link fw-bold" onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link fw-bold" onClick={() => scrollToSection('contact-me')}>Contact Me</button>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link fw-bold">View My Resumé</Link>
          </li>
        </ul>
      </header>
    </section>
  );
});

Navbar.displayName = 'Navbar';
