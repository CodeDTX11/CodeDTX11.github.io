import { forwardRef } from 'react';
import { PopFadeCard } from '../ui/PopFadeCard';

export const ExperienceSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="experience" className="py-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline mb-5">Work Experience</h2>

      <PopFadeCard className="container rounded-3 py-3 my-3">
        <div className="row p-2">
          <div className="col-lg-8">
            <h2 className="fw-bold">Eupraxia Labs</h2>
            <h4 className="text-secondary">Software Developer</h4>
            <p className="lead mb-0">
              • Co-architected and built the Federal Frontier Platform, a GitOps-driven Kubernetes management system
              for secure, multi-account AWS and hybrid cloud environments.<br />
              • Developed core Go backend services powering cluster creation, mutation, and teardown, including
              multi-repo GitLab orchestration, atomic multi-file commits, and RBAC enforcement.<br />
              • Implemented OIDC provider automation, IRSA role provisioning, and dynamic Helm values templating
              for DevOps applications and platform services.<br />
              • Built MCP servers and Python-based agents enabling AI-driven automation of Kubernetes operations,
              GitOps workflows, and platform orchestration.<br />
              • Planned and delivered high-impact product demos to prospective customers, translating complex
              platform functionality into clear value propositions.
            </p>
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
            <h2 className="fw-bold">Cook Systems</h2>
            <h4 className="text-secondary">Full-stack Developer Apprentice</h4>
            <p className="lead mb-0">
              • Developed and tested dynamic full-stack web applications using Java, JavaScript, TypeScript, Spring Boot
              and Angular.<br />
              • Designed and implemented RESTful APIs for smooth communication between front-end and back-end components
              and tested via Postman.<br />
              • Coded intuitive, eye-catching and user-friendly interfaces with Angular, CSS and HTML.<br />
              • Created an efficient database schema/ERD supported by PostgreSQL in PGAdmin4 and utilized Spring Boot
              and JPA to seamlessly handle data to and from the server.
            </p>
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
