import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-8 py-36">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-amber-600">
            Get In Touch
          </p>

          <h1 className="mt-5 text-6xl font-bold">
            Let's Create
            <br />
            Something Beautiful
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            Interested in a commission, collaboration, or purchasing an artwork?
            I'd love to hear from you.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <div className="mt-10 space-y-8">

              <div>
                <h3 className="font-semibold text-amber-600">Email</h3>
                <p className="text-stone-600">
                  hello@canvasmuse.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-amber-600">Phone</h3>
                <p className="text-stone-600">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-amber-600">Location</h3>
                <p className="text-stone-600">
                  Chennai, India
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-stone-300 p-4 outline-none focus:border-amber-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-stone-300 p-4 outline-none focus:border-amber-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-stone-300 p-4 outline-none focus:border-amber-600"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-stone-300 p-4 outline-none focus:border-amber-600"
              />

              <button
                className="w-full rounded-xl bg-stone-900 py-4 text-white transition hover:bg-amber-600"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}