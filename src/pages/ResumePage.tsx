import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function ResumePage() {
  // style.css sets body { visibility: hidden } globally; HomePage reveals it after
  // its background image loads. ResumePage has no image, so we reveal it immediately.
  useEffect(() => { document.body.style.visibility = 'visible'; }, []);

  const pdfSrc = '/assets/dylan_messerly_resume.pdf';

  return (
    // Flex column fills the full viewport so the iframe stretches to fill remaining height
    // without needing a hardcoded pixel value.
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <section className="bg-black">
        <header className="d-flex flex-wrap justify-content-center py-3">
          <ul className="nav nav-pills mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">Homepage</Link>
            </li>
            {/* "Open in new tab" is the primary fallback for mobile browsers,
                which typically don't render PDFs inside iframes. */}
            <li className="nav-item">
              <a href={pdfSrc} target="_blank" rel="noopener noreferrer" className="nav-link fw-bold">Open in new tab</a>
            </li>
            <li className="nav-item">
              <a href={pdfSrc} download className="nav-link fw-bold">Download</a>
            </li>
          </ul>
        </header>
      </section>
      {/* iframe previews the PDF on desktop; flex: 1 makes it fill all space below the header */}
      <iframe
        src={pdfSrc}
        title="Dylan Messerly Resume"
        style={{ flex: 1, width: '100%', border: 'none' }}
      />
    </div>
  );
}
