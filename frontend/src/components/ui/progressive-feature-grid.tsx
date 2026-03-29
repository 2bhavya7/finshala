import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const aiShalaFeatures = [
  {
    id: "multi-agent",
    name: "Multi-Agent Orchestration",
    url: "/ai-shala",
    imgclass: "object-cover",
    imgSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "xai",
    name: "Explainable AI (XAI)",
    url: "/ai-shala",
    imgclass: "object-cover",
    imgSrc:
      "https://images.unsplash.com/photo-1620712948343-008423bf33bf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "stress-test",
    name: "Synthetic Stress Testing",
    url: "/ai-shala",
    imgclass: "object-cover",
    imgSrc:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gen-ui",
    name: "Generative UI Engine",
    url: "/ai-shala",
    imgclass: "object-cover",
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tax-opt",
    name: "Tax Regime Optimization",
    url: "/tax-wizard",
    imgclass: "object-cover",
    imgSrc:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fire-engine",
    name: "FIRE Monte Carlo",
    url: "/fire-dashboard",
    imgclass: "object-cover",
    imgSrc:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
  },
];

const ProgressiveFeatureGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 30,
      opacity: 0,
    },
  };

  return (
    <section ref={containerRef} className="py-24 max-w-screen-2xl mx-auto px-6 md:px-12">
      <article className="w-fit mx-auto 2xl:max-w-5xl xl:max-w-4xl max-w-2xl text-center space-y-6">
        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={revealVariants}
          className="flex w-fit mx-auto items-center gap-1 rounded-full bg-emerald-600/10 border border-emerald-500/20 py-1 pl-1 pr-4 text-xs"
        >
          <div className="rounded-full bg-emerald-500 px-2 py-1 text-xs text-white font-medium">
            Discover
          </div>
          <p className="text-foreground sm:text-base text-xs inline-block ml-2">
            ✨ Introducing
            <span className="px-1 font-semibold">Specialized Agents</span>
          </p>
        </motion.div>

        <motion.h2
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={revealVariants}
          className="font-display 2xl:text-6xl text-foreground xl:text-5xl sm:text-4xl text-3xl leading-[1.1] text-balance"
        >
          Analyze Faster with{" "}
          <span className="font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Premium
          </span>{" "}
          Intelligence{" "}
          <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Agents
          </span>
          .
        </motion.h2>

        <motion.p
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={revealVariants}
          className="font-editorial lg:text-xl text-muted-foreground sm:text-lg text-sm max-w-2xl mx-auto"
        >
          Beautifully engineered reasoning pipelines that analyze, stress-test, and 
          dynamically build your UI dashboards without Hallucinations.
        </motion.p>
      </article>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-6 pt-20">
        {aiShalaFeatures.map((component, index) => (
          <motion.a
            custom={index + 4}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariants}
            key={index}
            href={component?.url}
            className="group relative transition-all aspect-video rounded-xl backdrop-blur-sm overflow-hidden border border-black/5 hover:border-black/20 hover:shadow-lg hover:-translate-y-1 block"
          >
            <figure className="relative h-full w-full">
              {component.imgSrc && (
                <img
                  src={component.imgSrc}
                  alt={component.name}
                  className={cn("w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", component.imgclass)}
                />
              )}
            </figure>
            
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
              blurIntensity={1.2}
              blurLayers={6}
            />
            
            <div className="sm:pb-4 pb-2 sm:px-5 px-3 absolute bottom-0 left-0 w-full z-10 transition-transform duration-500">
              <h3 className="font-display text-lg md:text-xl font-medium leading-[140%] text-white drop-shadow-md">
                {component.name}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProgressiveFeatureGrid;
