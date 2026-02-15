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
            <a href="#" className="nav-link fw-bold" onClick={(e) => { e.preventDefault(); scrollToSection('about-me'); }}>About Me</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link fw-bold" onClick={(e) => { e.preventDefault(); scrollToSection('ai-career-chatbot'); }}>AI Career Chatbot</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link fw-bold" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link fw-bold" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link fw-bold" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link fw-bold" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link fw-bold" onClick={(e) => { e.preventDefault(); scrollToSection('contact-me'); }}>Contact Me</a>
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
