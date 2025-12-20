const CERTIFICATES = [
  {
    id: "ul-us",
    image: "/images/Certifications/USA.bmp",
    title: "UL Certification – United States",
    body: "Compliance with UL safety standards for solar modules in the U.S. market.",
    href: "./docs/certificates/ul-us.pdf",
  },
  {
    id: "ul-ca",
    image: "/images/Certifications/Canada.bmp",
    title: "ULC Certification – Canada",
    body: "Certified for use in the Canadian market under ULC requirements.",
    href: "./docs/certificates/ul-ca.pdf",
  },
];

export function CertificatesSection() {
  return (
    <section className="py-16 bg-slate-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            U.S. & Canada Certifications
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Official compliance documents issued by international certification
            bodies, confirming that Miami Solar modules meet North American
            safety and quality standards.
          </p>
        </header>

        <div className="w-3xl mx-auto grid gap-10 md:grid-cols-2 ">
          {CERTIFICATES.map((cert) => (
            <article
              key={cert.id}
              className="flex flex-col h-full rounded-2xl bg-white border border-slate-100 shadow-sm 
                         hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center  ">
                <img
                  src={cert.image && cert.image}
                  alt={cert.title && cert.title}
                  className="h-80 object-contain w-full object-top"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="pt-7 px-6  flex-1 text-xl text-center">
                <h3 className="text-xl font-semibold text-slate-900">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {cert.body}
                </p>
              </div>

              <div className="px-6 pb-10 pt-7  text-center">
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-md font-medium text-[#0288D1]
                             hover:text-[#02639F]"
                >
                  View certificate (PDF)
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5H19.5M19.5 4.5V10.5M19.5 4.5L10.5 13.5M18 13.5V18.75
                         A1.5 1.5 0 0 1 16.5 20.25H5.25A1.5 1.5 0 0 1 3.75 18.75V7.5
                         A1.5 1.5 0 0 1 5.25 6H10.5"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
