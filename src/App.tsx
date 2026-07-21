import Cta from "./components/cta";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Stats from "./components/stats";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
