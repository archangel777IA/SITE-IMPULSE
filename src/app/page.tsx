import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingSections from "@/components/LandingSections";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LandingSections />
      </main>
      <Footer />
    </div>
  );
}
