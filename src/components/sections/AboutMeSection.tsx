import { forwardRef, useState } from 'react';
import { SurpriseButton } from '../ui/SurpriseButton';

export const AboutMeSection = forwardRef<HTMLElement>((_, ref) => {
  const [surpriseActive, setSurpriseActive] = useState(false);

  return (
    <section ref={ref} id="about-me" className="container px-4 pt-5 bg-body-primary rounded-3">
      <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
        <div className="col-10 col-sm-8 col-lg-4">
          <img
            src="/assets/images/profile-wo-bg.png"
            className="d-block mx-lg-auto img-fluid"
            alt="profile image"
            width="350"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-8">
          <h2 className="display-6 fw-bold text-body-emphasis text-decoration-underline mb-3">About Me</h2>
          <p className="lead fw-medium">
            Welcome to my website! My name is Dylan Messerly, and I am a graduate of Texas State University, where I
            earned a Bachelor of Science in Computer Science with a minor in Mathematics, graduating summa cum laude.
            <br /><br />
            I'm currently a Software Developer at Eupraxia Labs, where I co-architected the Federal Frontier Platform—a
            GitOps-driven Kubernetes management system designed for secure, multi-account AWS and hybrid cloud
            environments.
            My day-to-day work involves building core Go backend services that power cluster creation, mutation, and
            teardown,
            along with multi-repo GitLab orchestration and atomic commit workflows. I've implemented OIDC provider
            automation,
            IRSA role provisioning, and dynamic Helm values templating to streamline DevOps operations across the
            platform.
            <br /><br />
            One area I'm particularly excited about is the intersection of AI and infrastructure automation. I've built
            MCP
            servers and Python-based agents that enable AI-driven automation of Kubernetes operations and GitOps
            workflows,
            pushing the boundaries of what's possible with intelligent platform orchestration.
            <br /><br />
            Prior to joining Eupraxia Labs, I completed a full stack developer apprenticeship at Cook Systems, where I
            developed dynamic web applications and RESTful APIs using Java, JavaScript, Angular, and Spring Boot.
            Working
            collaboratively with a team of developers, I honed my skills in version control, CI/CD pipelines, and
            building
            responsive single-page applications.
            <br /><br />
            My technical journey started with a strong foundation in C++ during university, where I developed a passion
            for
            problem solving that continues to drive me today. I've since expanded into cloud-native technologies,
            backend
            development in Go, and infrastructure automation—areas where I'm constantly learning and growing.
            <br /><br />
            I'm always interested in connecting with others who share a passion for building robust, scalable systems.
            Feel free to check out my resumé and links below.
            <br /><br />
            Check out my AI Career Chatbot to learn more about me!
            It is hosted on Hugging Face Spaces and uses Google's Gemini 2.5 Flash model. It uses my linkedin profile
            and personal context summary to answer questions about my skills and experience. If you ask a question that
            it does not know or if you prompt it with your email it will send me a message to let me know.
          </p>
          <div className="d-grid gap-2 d-flex flex-wrap justify-content-start">
            <a
              id="download"
              className="btn btn-primary btn-lg px-4 me-md-2 text-black"
              href="/assets/dylan_messerly_resume.pdf"
              download
            >
              Download Resumé
            </a>
            <div className="d-flex flex-wrap">
              <a className="text-body-secondary mx-2" href="https://github.com/CodeDTX11" target="_blank" rel="noreferrer">
                <img src="/assets/images/github.svg" height="50" alt="GitHub" />
              </a>
              <a className="text-body-secondary mx-2" href="https://www.linkedin.com/in/dylan-messerly/" target="_blank" rel="noreferrer">
                <img src="/assets/images/linkedin.svg" height="50" alt="LinkedIn" />
              </a>
              <a className="text-body-secondary mx-2" href="https://leetcode.com/u/DTXcode11/" target="_blank" rel="noreferrer">
                <img src="/assets/images/leetcode-logo.png" height="50" alt="LeetCode" />
              </a>
            </div>
            <SurpriseButton isActive={surpriseActive} onToggle={() => setSurpriseActive((v) => !v)} />
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMeSection.displayName = 'AboutMeSection';
