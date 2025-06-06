import React from "react";
import { motion } from "framer-motion";

const entourageData = [
  {
    group: "Maid of Honor / Bestman",
    members: [{ name: "Faith Racho - Justine Giles Empuerto" }],
  },
  {
    group: "Flower Girls",
    members: [
      { name: "Aloisa Margaurette Restauro" },
      { name: "Sphyra Queer C. Lozano" },
      { name: "Keziah Hope Racho" },
      { name: "Queenie Joy C. Ignacio" },
      { name: "Gladyniel Nemaria" },
      { name: "Alexandria Celyn Nemaria" },
    ],
  },
  {
    group: "Little Bride & Groom",
    members: [
      { name: "Scarlette Niaga" },
      { name: "Narcris Jr. N  Macalinao" },
    ],
  },
  {
    group: "Bridesmaids",
    members: [
      { name: "Jhenheart Joy C  Ignacio - Rufus Mark Neil Tapao" },
      { name: "Diane B. Nadera - Jhovien Filipinas" },
      { name: "Desiree Grace S  Ragay - Demi Crison M Abellana" },
      { name: "Ana Maria Edna R Mancia - Niño Jan L Abad" },
      { name: "Mary Ann Magallanes - Lester Roy R Artegas" },
      { name: "Evangeline P Racho - Wiljohn Ignacio" },
    ],
  },
  {
    group: "Parents of the Bride",
    members: [
      { name: "Pedro R. Ignacio Jr" },
      { name: "Ma. Wilma C. Ignacio" },
    ],
  },
  {
    group: "Parents of the Groom",
    members: [{ name: "Ronelito G. Nemaria" }, { name: "Gina P. Nemaria" }],
  },
];

export default function Entourage() {
  return (
    <div className="relative w-full p-6 rounded-lg overflow-hidden">
      {/* Black overlay with low opacity */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg pointer-events-none"></div>
      {/* Section Title */}
      <div className="relative space-y-10 flex flex-col items-center z-10">
        {entourageData.map((group, idx) => (
          <motion.div
            key={group.group}
            className="w-full max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="flex items-center justify-center gap-2 text-lg md:text-xl text-[#dedcd4] font-serif tracking-wide mb-2 text-center">
              <span className="text-2xl md:text-3xl">{group.emoji}</span>
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {group.members.map((member) => (
                <motion.span
                  key={member.name}
                  className="bg-white/90 md:text-base text-[#5c522a] px-4 py-2 rounded-full font-serif text-sm shadow cursor-pointer transition-all"
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#e9e6d8",
                    boxShadow: "0 4px 16px rgba(92,82,42,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {member.name}
                </motion.span>
              ))}
            </div>
            {/* Decorative divider */}
            {idx !== entourageData.length - 1 && (
              <div className="my-6 border-t border-[#dedcd4]/40 w-2/3 mx-auto" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
