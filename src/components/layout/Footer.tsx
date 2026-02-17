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
          <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="black" className="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1
            0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1
            .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
          </svg>
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
