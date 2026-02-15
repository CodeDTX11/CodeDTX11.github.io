import { forwardRef } from 'react';

export const AIChatbotSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="ai-career-chatbot" className="pt-5 border-black border-top">
      <h2 className="display-6 fw-bold text-body-emphasis text-center text-decoration-underline">
        My AI Career Chatbot -- Ask Away!
      </h2>
      <div className="container py-3 my-3">
        <gradio-app className="gradio-embed" src="https://codedtx-ai-career-chatbot.hf.space"></gradio-app>
      </div>
    </section>
  );
});

AIChatbotSection.displayName = 'AIChatbotSection';
