import { forwardRef } from 'react';
import { PopFadeCard } from '../ui/PopFadeCard';

export const EducationSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="education" className="py-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline mb-5">Education</h2>

      <PopFadeCard className="container rounded-3 py-3 my-3">
        <div className="row p-2">
          <div className="col-lg-8">
            <h2 className="fw-bold">Texas State University</h2>
            <h4 className="text-secondary">Bachelor of Science in Computer Science - Minor in Mathematics</h4>
            <p className="lead mb-0">
              Focused on C++ and Java development.
              <br />
              Unique Courses: Machine Learning, Compiler Construction, Parallel Programming &amp; Networks.<br />
              <b>Honors:</b> Summa cum laude &amp; Computer Science Undergraduate Academic Excellence Award
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-4 d-flex align-items-center justify-content-center">
            <img
              src="/assets/images/supercat-logo.png"
              className="img-fluid"
              alt="TXST logo"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container rounded-3 py-3 my-3">
        <div className="row p-2">
          <div className="col-lg-8">
            <h2 className="fw-bold">Texas State University</h2>
            <h4 className="text-secondary">Bachelor of Business Administration in Management</h4>
            <p className="lead mb-0">
              Specialized in entrepreneurial studies.<br />
              <b>Honors:</b> Dean's List Multiple Semesters
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-4 d-flex align-items-center justify-content-center">
            <img
              src="/assets/images/supercat-logo.png"
              className="img-fluid"
              alt="TXST logo"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
        </div>
      </PopFadeCard>
    </section>
  );
});

EducationSection.displayName = 'EducationSection';
