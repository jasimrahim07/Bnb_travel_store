"use client";

import { motion } from "framer-motion";
import type { InnerPageDocumentGuide } from "@/data/innerPages";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function EvisaDocumentsSection({
  guide,
}: {
  guide: InnerPageDocumentGuide;
}) {
  return (
    <section className="bg-cream-dark px-8 py-20 md:px-14 md:py-28">
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {guide.sections.map((section) => (
            <motion.article
              key={section.heading}
              variants={fadeUp}
              className="rounded-2xl border border-forest/10 bg-white p-7 shadow-[0_8px_30px_rgba(26,58,42,0.06)]"
            >
              <h3 className="mb-5 font-serif-display text-xl font-bold text-forest">
                {section.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 font-sans-body text-sm leading-relaxed text-forest/70"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-10 rounded-2xl border border-gold/20 bg-gold/5 p-6 md:p-8"
        >
          <h3 className="mb-3 font-serif-display text-lg font-bold text-forest">
            Important Note
          </h3>
          <p className="font-sans-body text-sm leading-relaxed text-forest/70 md:text-base">
            {guide.importantNote}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
