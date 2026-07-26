import { useState, type FormEvent } from "react";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { hours, hoursNote, siteInfo } from "../data/siteInfo";
import { images } from "../data/images";

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteInfo.address.full
)}&output=embed`;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only mockup — no backend is wired up yet.
    setSubmitted(true);
  }

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Questions, private events, or feedback. We'd love to hear from you."
        image={images.tikiHut}
      />

      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 sm:px-8 lg:grid-cols-2">
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold text-bay-800">Hours</h2>
              <ul className="mt-4 space-y-2">
                {hours.map((h) => (
                  <li key={h.days} className="flex justify-between border-b border-bay-100 py-2 text-sm">
                    <span className="text-bay-600">{h.days}</span>
                    <span className="font-medium text-bay-800">{h.hours}</span>
                  </li>
                ))}
              </ul>
              {hoursNote && (
                <p className="mt-3 font-sans text-sm font-medium text-amber-600">
                  {hoursNote}
                </p>
              )}
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-serif text-2xl font-semibold text-bay-800">Visit</h2>
              <address className="mt-4 not-italic text-sm leading-relaxed text-bay-600">
                <a
                  href={siteInfo.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-bay-800 hover:text-amber-600"
                >
                  {siteInfo.address.line1}
                  <br />
                  {siteInfo.address.city}, {siteInfo.address.province}{" "}
                  {siteInfo.address.postalCode}
                </a>
                <br />
                <a href={siteInfo.phoneHref} className="mt-2 inline-block font-medium text-bay-800 hover:text-amber-600">
                  {siteInfo.phone}
                </a>
              </address>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={siteInfo.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-bay-700 underline underline-offset-4 hover:text-amber-600"
                >
                  Facebook
                </a>
                <a
                  href={siteInfo.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-bay-700 underline underline-offset-4 hover:text-amber-600"
                >
                  Instagram
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="overflow-hidden rounded-2xl border border-bay-100 shadow-sm">
                <iframe
                  title="Map showing The Boathouse Eatery at 177 King Street, Midland, Ontario"
                  src={mapEmbedSrc}
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="rounded-3xl bg-sand-100 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-bay-800">
                Send an enquiry
              </h2>
              <p className="mt-2 font-sans text-sm text-bay-600">
                For reservations, please use OpenTable. For private events,
                groups, or general questions, send us a note below.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-bay-700 p-6 text-sand-50" role="status">
                  <p className="font-serif text-lg font-semibold">Thanks for reaching out!</p>
                  <p className="mt-2 font-sans text-sm text-sand-200">
                    This is a front-end mockup form. In the live site this
                    would notify our team directly. We'll follow up as soon
                    as possible.
                  </p>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-medium text-bay-700">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-bay-200 bg-sand-50 px-4 py-2.5 text-bay-800 focus-visible:border-amber-400"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block font-sans text-sm font-medium text-bay-700">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-xl border border-bay-200 bg-sand-50 px-4 py-2.5 text-bay-800 focus-visible:border-amber-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-sans text-sm font-medium text-bay-700">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-1.5 w-full rounded-xl border border-bay-200 bg-sand-50 px-4 py-2.5 text-bay-800 focus-visible:border-amber-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-sans text-sm font-medium text-bay-700">
                      What's this about?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-1.5 w-full rounded-xl border border-bay-200 bg-sand-50 px-4 py-2.5 text-bay-800 focus-visible:border-amber-400"
                      defaultValue="General"
                    >
                      <option>General</option>
                      <option>Private / Semi-Private Event</option>
                      <option>Large Group</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-medium text-bay-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-1.5 w-full rounded-xl border border-bay-200 bg-sand-50 px-4 py-2.5 text-bay-800 focus-visible:border-amber-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 font-sans text-sm font-semibold text-bay-900 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
