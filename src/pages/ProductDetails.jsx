import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../Alldata/Products";
import emailjs from "@emailjs/browser";
import Button from "../Component/Button";
import { Link as ScrollLink } from "react-scroll";
export default function ProductDetails() {
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

  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.slug == id);

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

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
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

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto p-8 flex flex-col items-center gap-6">
        <p className="text-gray-900 capitalize text-4xl">Product not found.</p>
        <Button to="/products" className="" size="md" varient="primary_outline">
          ← Back to Products
        </Button>
      </div>
    );
  }

  const {
    name,
    image,
    gallery,
    type,
    wattMin,
    wattMax,
    efficiency,
    warrantyYears,
    datasheet,
    certifications,
    desc,
    mechanical,
    ratings,
  } = product;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}

      <nav className="text-md md:text-sm text-gray-500 mb-20">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        <span>/</span>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-700">{name}</span>
      </nav>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Gallery */}
        <div className="lg:col-span-6">
          <img
            src={gallery && gallery[0]}
            alt={name}
            className="w-full h-full object-contain rounded-2xl shadow"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="lg:col-span-6">
          <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
          <p className="text-gray-600 mt-4">
            {type} • {wattMin}
            {wattMax ? `–${wattMax}` : ""}W
            {efficiency ? ` • ${efficiency}%` : ""}{" "}
            {warrantyYears ? (
              <span className="font-semibold">
                {`• ${warrantyYears}-year warranty`}
              </span>
            ) : (
              ""
            )}
          </p>

          {desc && (
            <p className="mt-10 mb-10 text-lg text-gray-700 leading-relaxed">
              {desc}
            </p>
          )}

          {certifications?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-y-5 md:flex md:gap-4">
            <Button
              to="Form_Quote"
              duration={500}
              offset={-250}
              className="cursor-pointer"
            >
              Get a Quote
            </Button>
            <Button
              to="/products"
              size="md"
              variant="primary_outline"
              className=""
            >
              Back to Products
            </Button>
            {datasheet && (
              <Button
                href={datasheet}
                download
                size="md"
                variant="primary_outline"
              >
                datasheet (PDF)
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* some tech info */}
      {(mechanical || ratings) && (
        <section className="mt-10 mb-45 grid gap-32 md:grid-cols-2">
          {/* Mechanical */}
          {mechanical && (
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Mechanical Specifications
              </h3>
              <dl className="space-y-4 text-md mt-10 text-slate-700">
                {mechanical.dimensions_mm && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Dimensions (mm)</dt>
                    <dd className="font-medium">{mechanical.dimensions_mm}</dd>
                  </div>
                )}
                {mechanical.cells && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Cells</dt>
                    <dd className="font-medium">{mechanical.cells}</dd>
                  </div>
                )}
                {mechanical.glass && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Glass</dt>
                    <dd className="font-medium text-right max-w-[60%]">
                      {mechanical.glass}
                    </dd>
                  </div>
                )}
                {mechanical.weight_kg && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Weight</dt>
                    <dd className="font-medium">{mechanical.weight_kg} kg</dd>
                  </div>
                )}
                {mechanical.pallet && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Packing</dt>
                    <dd className="font-medium text-right max-w-[60%]">
                      {mechanical.pallet}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          {/* Electrical / Ratings */}
          {ratings && (
            <div>
              <h3 className="text-lg font-semibold mb-10">
                Electrical Ratings
              </h3>
              <dl className="space-y-4 text-md  text-slate-700">
                {ratings.operatingTemp && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Operating Temperature</dt>
                    <dd className="font-medium">{ratings.operatingTemp}</dd>
                  </div>
                )}
                {ratings.maxSystemVoltage && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Max System Voltage</dt>
                    <dd className="font-medium">{ratings.maxSystemVoltage}</dd>
                  </div>
                )}
                {ratings.maxSeriesFuse && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Max Series Fuse</dt>
                    <dd className="font-medium">{ratings.maxSeriesFuse}</dd>
                  </div>
                )}
                {ratings.tempCoeffPmax && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Temp. Coeff (Pmax)</dt>
                    <dd className="font-medium">{ratings.tempCoeffPmax}</dd>
                  </div>
                )}
                {ratings.NOCT && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">NOCT</dt>
                    <dd className="font-medium">{ratings.NOCT}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </section>
      )}
      {/* Related */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold mb-4 md:mb-10 md:text-2xl">
          Related products
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.filter((p) => (p.slug || String(p.id)) !== id)
            .slice(0, 3)
            .map((p) => (
              <Link
                key={p.slug || p.id}
                to={`/products/${p.slug || p.id}`}
                className="group rounded-2xl overflow-hidden shadow hover:shadow-lg"
              >
                <img
                  src={p.gallery?.[1]}
                  alt={p.name}
                  className="h-40 w-full object-cover group-hover:scale-[1.02] transition"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-gray-500">
                    {p.type} • {p.wattMin}
                    {p.wattMax ? `–${p.wattMax}` : ""}W
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* some product info */}
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-slate-600 mb-2">
          Power: {`${product.wattMin}~${product.wattMax}`} W
        </p>
        <p className="text-slate-600 mb-2">Technology: {product.tech}</p>
        {/* <p className="text-slate-600 mb-6">Efficiency: {product.efficiency}%</p> */}

        <section
          className="mt-8 bg-white rounded-2xl shadow-md p-6"
          id="Form_Quote"
        >
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
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-linear-to-r from-sky-900 to-sky-600 text-white font-semibold px-6 py-3 text-sm shadow-md hover:shadow-lg disabled:opacity-60"
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
    </section>
  );
}
