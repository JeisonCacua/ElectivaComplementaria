import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
