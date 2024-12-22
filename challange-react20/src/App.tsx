import "./App.css";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="wrapper-width">
        <Header />
        <Filters />
        <Footer />
      </div>
    </>
  );
}

export default App;
