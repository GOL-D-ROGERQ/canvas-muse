import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaInstagram,
  FaEnvelope,
  FaPalette,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5F0] text-stone-900">

        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-24">

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">

              <p className="uppercase tracking-[0.4em] text-amber-700">
                Contact
              </p>

              <h1 className="mt-6 text-5xl font-bold md:text-6xl">
                Let's Create Something Beautiful
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-600">
                Interested in an artwork, commission, or collaboration?
                I'd love to hear from you.
              </p>

            </div>

          </div>

        </section>

        {/* Contact Section */}

        <section className="pb-28">

          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

            {/* Left */}

            <div className="rounded-[36px] bg-white p-12 shadow-xl">

              <h2 className="text-3xl font-bold">
                Send a Message
              </h2>

              <p className="mt-4 text-stone-600">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form className="mt-10 space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-stone-300 bg-transparent px-5 py-4 outline-none transition focus:border-amber-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-stone-300 bg-transparent px-5 py-4 outline-none transition focus:border-amber-600"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-stone-300 bg-transparent px-5 py-4 outline-none transition focus:border-amber-600"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message..."
                  className="w-full rounded-xl border border-stone-300 bg-transparent px-5 py-4 outline-none transition focus:border-amber-600"
                />

                <button
                  type="submit"
                  className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-amber-700"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Right */}

            <div className="space-y-8">

              <div className="rounded-[32px] bg-white p-10 shadow-lg">

                <FaEnvelope className="text-4xl text-amber-700" />

                <h3 className="mt-5 text-2xl font-bold">
                  Email
                </h3>

                <p className="mt-3 text-stone-600">
                  hello@canvasmuse.com
                </p>

              </div>

              <div className="rounded-[32px] bg-white p-10 shadow-lg">

                <FaInstagram className="text-4xl text-amber-700" />

                <h3 className="mt-5 text-2xl font-bold">
                  Instagram
                </h3>

                <Link
                  href="https://instagram.com"
                  className="mt-3 inline-block text-stone-600 transition hover:text-amber-700"
                >
                  @canvasmuse
                </Link>

              </div>

              <div className="rounded-[32px] bg-white p-10 shadow-lg">

                <FaPalette className="text-4xl text-amber-700" />

                <h3 className="mt-5 text-2xl font-bold">
                  Commissions
                </h3>

                <p className="mt-3 text-stone-600">
                  Custom paintings and commissioned artwork are currently open.
                </p>

              </div>

              <div className="rounded-[32px] bg-white p-10 shadow-lg">

                <FaMapMarkerAlt className="text-4xl text-amber-700" />

                <h3 className="mt-5 text-2xl font-bold">
                  Location
                </h3>

                <p className="mt-3 text-stone-600">
                  Based in India · Available Worldwide
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}