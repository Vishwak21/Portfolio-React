import About from "D:/Vishwak/portfolio-react-2/portfolio_react/src/Components/About/About.jsx";
import Experience from "D:/Vishwak/portfolio-react-2/portfolio_react/src/Components/Experience/Experience.jsx";
import Footer from "D:/Vishwak/portfolio-react-2/portfolio_react/src/Components/Footer/Footer.jsx";
import Home from "D:/Vishwak/portfolio-react-2/portfolio_react/src/Components/Home/Home.jsx";
import Navbar from "D:/Vishwak/portfolio-react-2/portfolio_react/src/Components/Navbar/Navbar.jsx";
import Projects from "D:/Vishwak/portfolio-react-2/portfolio_react/src/Components/Projects/TextChange.jsx";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;