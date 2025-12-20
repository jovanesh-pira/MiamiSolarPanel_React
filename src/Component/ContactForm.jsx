import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();

          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#F5F7FA] py-16 md:py-20 relative z-0"
      style={{
        backgroundImage: "url(./images/BGFormContact.jpg)",
        backgroundPosition: "center ",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-sky-200/50 -z-1"></div>
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Contact Us
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            We’d love to hear from you. Let’s talk about how we can power your
            future with solar energy.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-sm border border-slate-100 px-6 py-8 md:px-10 md:py-10 z-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT — FORM */}
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Hidden for EmailJS */}
                <input type="hidden" name="form_source" value="home_contact" />
                <input type="hidden" name="product_name" value="" />

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                               outline-none focus:ring-2 focus:ring-[#0288D1] transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                               outline-none focus:ring-2 focus:ring-[#0288D1] transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                               outline-none focus:ring-2 focus:ring-[#0288D1] transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-xl px-4 py-3 text-white font-semibold text-sm
             bg-linear-to-r from-[#0B4F8A] to-[#0288D1]
             shadow-md shadow-blue-500/25
             hover:from-[#093F70] hover:to-[#0271B0] hover:shadow-lg hover:shadow-blue-500/30
             disabled:opacity-70 disabled:cursor-not-allowed transition
             flex justify-center items-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {status === "success" && (
                    <p className="mt-2 text-sm text-emerald-600">
                      Thank you! Your message has been sent.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-2 text-sm text-red-500">
                      Error sending message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* RIGHT — INFO */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Get in Touch
                </h3>
                <p className="text-sm text-slate-600">
                  Have questions about our solar products or need a quote? Our
                  team is ready to help.
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@miamisolar.co"
                    className="text-[#0288D1]"
                  >
                    info@miamisolar.co
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Phone:</span> +1 213 808 2105
                </p>

                <p>
                  <span className="font-semibold">Address:</span> 3139 Cambria
                  Ct., Orlando FL. 32825
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
