import { forwardRef } from 'react';
import { PopFadeCard } from '../ui/PopFadeCard';

export const ExperienceSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="experience" className="py-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline mb-5">Work Experience</h2>

      <PopFadeCard className="container rounded-3 py-3 my-3">
        <div className="row p-2">
          <div className="col-lg-8">
            <div className="d-flex align-items-baseline gap-3 flex-wrap mb-3">
              <h2 className="fw-bold mb-0">Eupraxia Labs</h2>
              <h4 className="text-secondary mb-0">Software Developer | May 2025 – Present</h4>
            </div>
            <ul className="lead mb-0">
              <li className="mb-2">Co-architected and built the Federal Frontier Platform, a GitOps-driven Kubernetes management system
                for secure, multi-account AWS and hybrid cloud environments.</li>
              <li className="mb-2">Developed core Go backend services powering cluster creation, mutation, and teardown, including
                multi-repo GitLab orchestration, atomic multi-file commits, and RBAC enforcement.</li>
              <li className="mb-2">Implemented OIDC provider automation, IRSA role provisioning, and dynamic Helm values templating
                for DevOps applications and platform services.</li>
              <li className="mb-2">Built MCP servers and Python-based agents enabling AI-driven automation of Kubernetes operations,
                GitOps workflows, and platform orchestration.</li>
              <li className="mb-2">Planned and delivered high-impact product demos to prospective customers, translating complex
                platform functionality into clear value propositions.</li>
            </ul>
          </div>
          <div className="col-10 col-sm-8 col-lg-4 d-flex align-items-center justify-content-center">
            <img
              src="/assets/images/eupraxia.jpg"
              className="img-fluid"
              alt="Eupraxia Labs logo"
              width="auto"
              height="auto"
              loading="lazy"
            />
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container rounded-3 py-3 my-3">
        <div className="row p-2">
          <div className="col-lg-8">
            <div className="d-flex align-items-baseline gap-3 flex-wrap mb-3">
              <h2 className="fw-bold mb-0">Cook Systems</h2>
              <h4 className="text-secondary mb-0">Full-stack Developer | March 2024 – May 2024</h4>
            </div>
            <ul className="lead mb-0">
              <li className="mb-2">Completed a fast-paced apprenticeship program where I honed my skills in full-stack development and teamwork.</li>
              <li className="mb-2">Developed and tested dynamic full-stack web applications using Java, JavaScript, TypeScript, Spring Boot
                and Angular.</li>
              <li className="mb-2">Designed and implemented RESTful APIs for smooth communication between front-end and back-end components
                and tested via Postman.</li>
              <li className="mb-2">Coded intuitive, eye-catching and user-friendly interfaces with Angular, CSS and HTML.</li>
              <li className="mb-2">Created an efficient database schema/ERD supported by PostgreSQL in PGAdmin4 and utilized Spring Boot
                and JPA to seamlessly handle data to and from the server.</li>
            </ul>
          </div>
          <div className="col-10 col-sm-8 col-lg-4 d-flex align-items-center justify-content-center">
            <img
              src="/assets/images/cooksys.jpg"
              className="img-fluid"
              alt="CookSys logo"
              width="auto"
              height="auto"
              loading="lazy"
            />
          </div>
        </div>
      </PopFadeCard>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';
