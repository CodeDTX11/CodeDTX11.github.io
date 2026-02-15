import { forwardRef } from 'react';
import { PopFadeCard } from '../ui/PopFadeCard';

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
  </svg>
);

export const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="projects" className="py-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline mb-5">Projects</h2>

      <PopFadeCard className="container px-4 mt-3 rounded-3">
        <div className="p-3 text-center">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-4">
              <img src="/assets/images/mgt-app.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="project image" loading="lazy" />
            </div>
            <div className="col-lg-8">
              <h2 className="fs-2 fw-bold lh-1">Employee Management App</h2>
              <p className="lead text-start">
                • Built a full-stack web application that provides businesses and their employees a smart and efficient
                way of communicating and organizing in collaboration with a team.<br />
                • Integrated the client and server by using scalable RESTful API endpoints and provided real-time client
                side updates to their feed.<br />
                • Utilized Spring Boot and JPA to create an efficient and layered PostgreSQL database on the backend
                and used Angular to create a responsive and user-friendly front-end.<br />
              </p>
              <a href="https://github.com/CodeDTX11/employee_mgt_fullstack" target="_blank" rel="noreferrer"><LinkIcon /></a>
            </div>
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container px-4 mt-3 rounded-3">
        <div className="p-3 text-center">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-lg-8">
              <h2 className="fs-2 fw-bold lh-1">Spotify Guessing Game</h2>
              <p className="lead text-start">
                • Created a front-end Angular application that uses data pulled via the Spotify Web API to create a game
                that has the player guess the artists of the provided track samples.<br />
                • Delivered a dynamic and unique play experience each time with configurable settings and randomized
                tracks and artists of the player's specified genre.
              </p>
              <a href="https://github.com/CodeDTX11/guess_who_spotify" target="_blank" rel="noreferrer"><LinkIcon /></a>
            </div>
            <div className="col-10 col-sm-8 col-lg-4">
              <img src="/assets/images/whos-who-app.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="project image" loading="lazy" />
            </div>
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container px-4 mt-3 rounded-3">
        <div className="p-3 text-center">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-4">
              <img src="/assets/images/xapi.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="project image" loading="lazy" />
            </div>
            <div className="col-lg-8">
              <h2 className="fs-2 fw-bold lh-1">Twitter (X) Backend API</h2>
              <p className="lead text-start">
                • Developed a backend RESTful Web Service that mimics Twitter with multiple endpoints for creating,
                updating and retrieving user information and social media posts.<br />
                • Created an efficient database schema/ERD supported by PostgreSQL in PGAdmin4 and utilized Spring Boot
                and JPA to seamlessly handle data to and from the server.
              </p>
              <a href="https://github.com/CodeDTX11/Twitter_api" target="_blank" rel="noreferrer"><LinkIcon /></a>
            </div>
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container px-4 mt-3 rounded-3">
        <div className="p-3 text-center">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-lg-8">
              <h2 className="fs-2 fw-bold lh-1">Snake</h2>
              <p className="lead text-start">
                • Classic console based snake game! Programmed in C++ and runs in a windows environment.<br />
                • Complete with pause, replay, high score, and death animation.
              </p>
              <a href="https://github.com/CodeDTX11/snake" target="_blank" rel="noreferrer"><LinkIcon /></a>
            </div>
            <div className="col-10 col-sm-8 col-lg-4">
              <img src="/assets/images/snake.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="project image" loading="lazy" />
            </div>
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container px-4 mt-3 rounded-3">
        <div className="p-3 text-center">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-4">
              <img src="/assets/images/pong.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="project image" width="300" loading="lazy" />
            </div>
            <div className="col-lg-8">
              <h2 className="fs-2 fw-bold lh-1">Classic Pong</h2>
              <p className="lead text-start">
                • Created the classic pong game via a Python coded GUI. You can't beat the classics.<br />
                • Message me for a challenge!
              </p>
              <a href="https://github.com/CodeDTX11/PyProjects/tree/main/pong-day22" target="_blank" rel="noreferrer"><LinkIcon /></a>
            </div>
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container px-4 mt-3 rounded-3">
        <div className="p-3 text-center">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-lg-8">
              <h2 className="fs-2 fw-bold lh-1">LeetCode Grind</h2>
              <p className="lead text-start">
                • I've put in the work on data structures and algorithms by solving 200+ LeetCode problems!<br />
                • When I wasn't working on projects or studying, I was grinding leetcode problems to sharpen my
                problem-solving skills. Also solved some HackerRank problems here and there.
              </p>
              <a href="https://leetcode.com/u/DTXcode11/" target="_blank" rel="noreferrer"><LinkIcon /></a>
            </div>
            <div className="col-10 col-sm-8 col-lg-4">
              <img src="/assets/images/leetcode-image.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="project image" loading="lazy" width="200" />
            </div>
          </div>
        </div>
      </PopFadeCard>

      <PopFadeCard className="container px-4 mt-3 rounded-3">
        <div className="p-3 text-center">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-4">
              <img src="/assets/images/python-image.png" className="d-block mx-lg-auto img-fluid rounded-3" alt="project image" loading="lazy" />
            </div>
            <div className="col-lg-8">
              <h2 className="fs-2 fw-bold lh-1">So Much More!</h2>
              <p className="lead text-start">
                • Plenty more projects! Check out my GitHub for more! I am always working on something new and am
                currently learning Python and sharpening my AI tools and skills.
              </p>
              <a href="https://github.com/CodeDTX11?tab=repositories" target="_blank" rel="noreferrer"><LinkIcon /></a>
            </div>
          </div>
        </div>
      </PopFadeCard>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';
