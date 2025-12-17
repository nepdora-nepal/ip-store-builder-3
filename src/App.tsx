import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FAQSection from './components/FAQSection'; // Corrected to expect default export
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* Potentially add more sections here */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
