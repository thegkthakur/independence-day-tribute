import "./App.css";
import "./flagAnimation.css";
import Timeline from "./Components/Timeline";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen text-center text-gray-900">
      <Hero />
      <Timeline />
      <Gallery />
      <Footer />
    </div>
  );
}
