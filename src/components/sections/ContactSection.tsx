import { forwardRef, useState } from 'react';

export const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('_replyto', email);
      formData.append('body', message);

      const response = await fetch('https://formspree.io/f/xaneewdj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setMessage('');
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <section ref={ref} id="contact-me" className="pt-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline mb-4">Contact Me</h2>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-lg-6 mx-auto">
            <p className="lead text-center fw-medium">
              I use an online form submission API called{' '}
              <a href="https://formspree.io/" target="_blank" rel="noreferrer" className="text-black">
                <b>Formspree.io</b>
              </a>{' '}
              for my contact form. Please fill out the form below to get in touch. I'll get back to you ASAP!
            </p>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="your_email@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  name="body"
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder="Nice website!"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary text-black w-100" value="Send">Send</button>
            </form>
            <div className="text-wrapper">
              <h2 id="successMessage" className={`filling-text text-center my-4 text-black fw-medium${submitted ? ' reveal' : ''}`}>
                Message sent successfully!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
