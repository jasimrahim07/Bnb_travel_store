"use client";

import { motion } from "framer-motion";
import type { UmrahVisaGuide, ZiyaratTour } from "@/data/innerPages";
import { fadeUp, staggerContainer } from "@/lib/animations";

function ZiyaratCard({ tour }: { tour: ZiyaratTour }) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-2xl border border-forest/10 bg-white p-7 shadow-[0_8px_30px_rgba(26,58,42,0.06)] md:p-8"
    >
      <p className="mb-2 font-sans-body text-xs font-bold uppercase tracking-[0.2em] text-gold">
        {tour.city}
      </p>
      <h3 className="mb-2 font-serif-display text-2xl font-bold text-forest">
        {tour.title}
      </h3>
      <p className="mb-5 font-sans-body text-sm font-semibold text-forest/55">
        Duration: {tour.duration}
      </p>
      <p className="mb-5 font-sans-body text-sm leading-relaxed text-forest/65">
        {tour.intro}
      </p>
      <ul className="mb-5 flex flex-col gap-2.5">
        {tour.locations.map((location) => (
          <li
            key={location}
            className="flex gap-2.5 font-sans-body text-sm leading-relaxed text-forest/70"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {location}
          </li>
        ))}
      </ul>
      <p className="font-sans-body text-sm leading-relaxed text-forest/65">
        {tour.outro}
      </p>
    </motion.article>
  );
}

function VisaCountriesBlock({
  guide,
}: {
  guide: UmrahVisaGuide;
}) {
  return (
    <section className="bg-cream px-8 py-20 md:px-14 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="mb-5 font-serif-display text-3xl font-bold text-forest md:text-4xl"
        >
          {guide.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mb-12 max-w-3xl font-sans-body text-base leading-relaxed text-forest/65 md:text-lg"
        >
          {guide.intro}
        </motion.p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-forest/10 bg-white p-7 md:p-8"
          >
            <h3 className="mb-5 font-serif-display text-xl font-bold text-forest">
              {guide.evisaHeading}
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {guide.evisaCountries.map((country) => (
                <li
                  key={country}
                  className="flex gap-2 font-sans-body text-sm text-forest/70"
                >
                  <span className="text-gold">•</span>
                  {country}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-forest/10 bg-white p-7 md:p-8"
          >
            <h3 className="mb-5 font-serif-display text-xl font-bold text-forest">
              {guide.embassyHeading}
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {guide.embassyCountries.map((country) => (
                <li
                  key={country}
                  className="flex gap-2 font-sans-body text-sm text-forest/70"
                >
                  <span className="text-gold">•</span>
                  {country}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}

export default function UmrahServicesSection({
  ziyaratTours,
  visaGuide,
}: {
  ziyaratTours: ZiyaratTour[];
  visaGuide: UmrahVisaGuide;
}) {
  return (
    <>
      <section className="bg-cream-dark px-8 py-20 md:px-14 md:py-28">
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-sans-body text-sm font-medium uppercase tracking-[0.2em] text-gold"
          >
            Umrah &amp; Ziyarat Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-12 font-serif-display text-3xl font-bold text-forest md:text-4xl"
          >
            Guided Ziyarat Tours
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {ziyaratTours.map((tour) => (
              <ZiyaratCard key={tour.city} tour={tour} />
            ))}
          </div>
        </motion.div>
      </section>

      <VisaCountriesBlock guide={visaGuide} />
    </>
  );
}
