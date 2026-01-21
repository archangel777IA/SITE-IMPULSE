import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiagnosticForm from "@/components/DiagnosticForm";

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DiagnosticForm />
      </main>
      <Footer />
    </div>
  );
}
