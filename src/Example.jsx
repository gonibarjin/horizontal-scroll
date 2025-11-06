import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 h-screen bg-neutral-900 text-white px-16 lg:px-24">
      <div className="flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold mb-8"
        >
          Välkommen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg max-w-2xl mb-8 leading-relaxed text-neutral-300"
        >
          I fjärran dalar där dimman dansar över trädtopparna, väver tiden sina
          egna mönster av ljus och skugga. Varje ögonblick bär med sig en
          berättelse om det förflutna, en viskning från framtiden. Mellan de
          höga granarna vandrar tankarna fritt, och i den stilla skymningen möts
          dröm och verklighet i en tidlös dans. Här finns ingen början, inget
          slut - bara den eviga rörelsen av tankar som flyter likt droppar.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 transition w-fit"
        >
          Utforska mer
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex items-center justify-center"
      >
        <div className="relative w-full h-[80vh] max-w-[600px] overflow-hidden rounded-2xl">
          <img
            src="/imgs/intro.jpg"
            alt="Intro image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <IntroSection />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scrolla ner
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scrolla upp
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/1.jpg",
    title: "DRÖM",
    id: 1,
  },
  {
    url: "/imgs/2.jpg",
    title: "LJUS",
    id: 2,
  },
  {
    url: "/imgs/3.jpg",
    title: "TID",
    id: 3,
  },
  {
    url: "/imgs/4.jpg",
    title: "RYMD",
    id: 4,
  },
  {
    url: "/imgs/5.jpg",
    title: "GLANS",
    id: 5,
  },
  {
    url: "/imgs/6.jpg",
    title: "FLÖDE",
    id: 6,
  },
  {
    url: "/imgs/7.jpg",
    title: "RYTM",
    id: 7,
  },
];
