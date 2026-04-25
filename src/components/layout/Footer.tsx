import { UpArrowIcon } from '../ui/UpArrowIcon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <section className="border-top border-black">
      <footer id="footer" className="container d-flex flex-wrap justify-content-between align-items-center py-4">
        <div className="col-sm-4 col-3">
          <p className="mb-3 mb-md-0 text-black fw-bold">
            Copyright &copy; {new Date().getFullYear()} Yours Truly
          </p>
        </div>

        <button
          type="button"
          className="text-body-secondary"
          aria-label="Scroll to top"
          onClick={() => scrollToSection('navbar')}
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <UpArrowIcon />
        </button>

        <ul className="nav col-sm-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://github.com/CodeDTX11" target="_blank" rel="noreferrer">
              <img src="/assets/images/github.svg" height="40" alt="GitHub" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.linkedin.com/in/dylan-messerly/" target="_blank" rel="noreferrer">
              <img src="/assets/images/linkedin.svg" height="40" alt="LinkedIn" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://leetcode.com/u/DTXcode11/" target="_blank" rel="noreferrer">
              <img src="/assets/images/leetcode-logo.png" height="40" alt="LeetCode" />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
