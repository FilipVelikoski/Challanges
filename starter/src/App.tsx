import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import { DetailsBlock } from "./components/DetailsBlock";
import Footer from "./components/Footer";
import PlacesContainer from "./components/PlacesContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <DetailsBlock title="Stories of Adventure" />
      <PlacesContainer />
      <DetailsBlock title="Popular Adventures" />
      <Footer />
    </div>
  );
};

export default App;
