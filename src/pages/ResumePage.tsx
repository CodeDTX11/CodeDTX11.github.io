import { Link } from 'react-router-dom';

export function ResumePage() {
  return (
    <>
      <section className="bg-black">
        <header className="d-flex flex-wrap justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">Homepage</Link>
            </li>
          </ul>
        </header>
      </section>
      <iframe src="/assets/dylan_messerly_resume.pdf" width="100%" height="1000px" title="Dylan Messerly Resume" />
    </>
  );
}
