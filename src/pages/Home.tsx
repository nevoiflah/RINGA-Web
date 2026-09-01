import { useScroll } from "framer-motion";
import Nav from "../components/Nav";
import Background from "../components/Background";
import ScrollStory from "../components/story/ScrollStory";
import Steps from "../components/Steps";
import PrivacyStrip from "../components/PrivacyStrip";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  // overall page scroll — drives the one cohesive, page-wide background
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Background progress={scrollYProgress} />
      <Nav />
      <main>
        <ScrollStory />
        <Steps />
        <PrivacyStrip />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
