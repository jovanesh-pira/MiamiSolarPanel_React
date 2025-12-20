import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function GetQuotePage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
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
    <main className="bg-[#F5F7FA] min-h-screen py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Request a Quote
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tell us about your project and we’ll prepare a customized solar
            solution for you.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-8 md:px-10 md:py-10">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="form_source" value="get_quote_page" />
            <input type="hidden" name="product_name" value="" />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="customer_name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                           outline-none focus:ring-2 focus:ring-[#0288D1] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="customer_email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                           outline-none focus:ring-2 focus:ring-[#0288D1] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="custome_phone"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                           outline-none focus:ring-2 focus:ring-[#0288D1] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Project Type
              </label>
              <select
                name="project_type"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                           outline-none focus:ring-2 focus:ring-[#0288D1] transition"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Off-grid">Off-grid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Estimated Power (kW)
              </label>
              <input
                type="text"
                name="product_power"
                placeholder="e.g. 10 kW, 50 kW..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                           outline-none focus:ring-2 focus:ring-[#0288D1] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Project Details
              </label>
              <textarea
                name="customer_message"
                rows={4}
                placeholder="Tell us about your roof, location, energy needs, budget..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm
                           outline-none focus:ring-2 focus:ring-[#0288D1] transition resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl px-4 py-3 text-white font-semibold text-sm
                           bg-gradient-to-r from-[#0B4F8A] to-[#0288D1]
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
                  "Submit Quote Request"
                )}
              </button>

              {status === "success" && (
                <p className="mt-2 text-sm text-emerald-600">
                  Thank you! Your request has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
