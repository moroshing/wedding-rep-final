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
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg pointer-events-none"></div>
      <div className="relative space-y-8 flex flex-col items-center">
        {entourageData.map((group) => (
          <div key={group.group} className="w-full max-w-xl">
            <h3 className="text-lg md:text-xl text-white font-serif tracking-wide mb-2 text-center">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {group.members.map((member) => (
                <motion.span
                  key={member.name}
                  className="bg-[#dedcd4] md:text-base text-[#5c522a] px-4 py-2 rounded-full font-serif text-sm shadow cursor-pointer"
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
          </div>
        ))}
      </div>
    </div>
  );
}
