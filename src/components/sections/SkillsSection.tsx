import { forwardRef } from 'react';

const skills = [
  'Go', 'Kubernetes', 'AWS', 'GitOps', 'MCP', 'Helm', 'ArgoCD', 'Docker',
  'OIDC/IRSA', 'Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript',
  'Angular', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Linux', 'Bash',
  'Git', 'HTML', 'CSS', 'Bootstrap',
];

export const SkillsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="skills" className="py-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline mb-5">Skills</h2>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        {skills.map((skill) => (
          <span key={skill} className="badge text-bg-primary p-2 text-black">{skill}</span>
        ))}
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';
