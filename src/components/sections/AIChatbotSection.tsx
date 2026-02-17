import { forwardRef } from 'react';

export const AIChatbotSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="ai-career-chatbot" className="pt-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline">
        Personal Career AI Chatbot
      </h2>
      <h3 className="text-center my-4">
        Ask my digital twin anything about my projects, skills, or career history.
      </h3>
      <div className="container mb-5">
        <gradio-app className="gradio-embed" src="https://codedtx-ai-career-chatbot.hf.space"></gradio-app>
        <p className="text-center text-muted mt-2 fs-6">
          If the chatbot isn't loading, try opening it directly on{' '}
          <a href="https://codedtx-ai-career-chatbot.hf.space" target="_blank" rel="noopener noreferrer">
            Hugging Face
          </a>.
        </p>
      </div>
    </section>
  );
});

AIChatbotSection.displayName = 'AIChatbotSection';
