import { motion, useMotionTemplate, useReducedMotion, useTransform, type MotionValue } from "framer-motion";

/** A continuous field across sections. Motion follows scroll and settles at the CTA. */
export default function Background({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const glow = useTransform(progress, [0, .5, 1], ["#A72BA01A", "#FF625714", "#A72BA010"]);
  const background = useMotionTemplate`radial-gradient(ellipse at 50% 35%, ${glow}, transparent 70%), #120B14`;
  const scale = useTransform(progress, [0, .8, 1], [1, 1.15, 1.15]);
  const opacity = useTransform(progress, [0, .65, 1], [.6, .3, .12]);
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <motion.div style={{ background }} className="absolute inset-0" />
    <motion.div style={{ scale: reduce ? 1 : scale, opacity }} className="absolute inset-0 flex items-center justify-center">
      {[40, 70, 100].map(size => <span key={size} style={{ width: `${size}vmax`, height: `${size}vmax` }} className="absolute rounded-full border border-coral/10" />)}
    </motion.div>
  </div>;
}
