import { useParams } from "react-router-dom";
import { PRODUCTS } from "../Alldata/Products";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_kj8gogk";
const TEMPLATE_ID = "template_fvkv8im";
const PUBLIC_KEY = "T6O0l4iFk9Cg0WZLU";

export default function Email_ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const product = PRODUCTS.find((p) => p.slug == id);
  console.log(product);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    customer_company: "",
    project_type: "",
    project_location: "",
    quantity: "",
    customer_message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!product) {
    return <p>Product not found.</p>;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const templateParams = {
      // product data
      product_name: product.name,
      product_id: product.id,
      product_tech: product.tech,
      product_power: product.wattMin + " ~ " + product.wattMax + " W",
      //   product_efficiency: product.efficiency,
      //   product_url: window.location.href,

      // customer / project data
      customer_name: formData.customer_name,
      customer_email: formData.customer_email,
      customer_phone: formData.customer_phone,
      customer_company: formData.customer_company,
      project_type: formData.project_type,
      project_location: formData.project_location,
      quantity: formData.quantity,
      customer_message: formData.customer_message,
    };
    console.log(templateParams.product_power);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus("success");
      setFormData({
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        customer_company: "",
        project_type: "",
        project_location: "",
        quantity: "",
        customer_message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* some product info */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-slate-600 mb-2">
        Power: {`${product.wattMin}~${product.wattMax}`} W
      </p>
      <p className="text-slate-600 mb-2">Technology: {product.tech}</p>
      {/* <p className="text-slate-600 mb-6">Efficiency: {product.efficiency}%</p> */}

      <section className="mt-8 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Request a Quote for this Panel
        </h2>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="customer_email"
                value={formData.customer_email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                name="customer_phone"
                value={formData.customer_phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Company (optional)
              </label>
              <input
                name="customer_company"
                value={formData.customer_company}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Installation type
              </label>
              <input
                name="project_type"
                placeholder="Rooftop / Ground / Commercial..."
                value={formData.project_type}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                name="project_location"
                value={formData.project_location}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Estimated quantity
              </label>
              <input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="customer_message"
              rows="4"
              value={formData.customer_message}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Tell us more about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-900 to-sky-600 text-white font-semibold px-6 py-3 text-sm shadow-md hover:shadow-lg disabled:opacity-60"
          >
            {loading ? "Sending..." : "Request Quote for this Panel"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-600 mt-2">
              Your request has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
