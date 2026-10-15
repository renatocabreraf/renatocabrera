import React from "react";

const FULL_NAME = "Renato José Cabrera Figueroa";

function GlobalIdentity() {
  React.useEffect(() => {
    const applyIdentityToImages = () => {
      document.querySelectorAll("img").forEach((img) => {
        img.setAttribute("data-author", FULL_NAME);
        img.setAttribute("data-person", FULL_NAME);
        img.setAttribute("data-owner", FULL_NAME);

        if (!img.getAttribute("title")) {
          img.setAttribute("title", FULL_NAME);
        }
      });
    };

    applyIdentityToImages();

    const observer = new MutationObserver(() => {
      applyIdentityToImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FULL_NAME,
    givenName: "Renato José",
    familyName: "Cabrera Figueroa",
    url: "https://renatocabrera.com",
    email: "mailto:renatocabrerafigueroa@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/renatocabreraf/"
    ]
  };

  return (
    <>
      <span
        className="rc-global-identity"
        aria-hidden="true"
      >
        {FULL_NAME}
      </span>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <style>{`
        .rc-global-identity {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      `}</style>
    </>
  );
}

export default GlobalIdentity;
