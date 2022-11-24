import { useState, useEffect, useRef } from "react";
import axios from "axios";
import FileUpload from "./components/FileUpload";
import AllOutfits from "./components/AllOutfits";
import SingleOutfit from "./components/SingleOutfit";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/Search";

export default function App() {
  //STATE & REFS
  const [outfits, setOutfits] = useState([]);
  const [currentView, setCurrentView] = useState("AllOutfits");
  const [selectedOutfit, setSelectedOutfit] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  //USEEFFECT
  useEffect(() => {
    getOutfits();
  }, []);

  //HELPER FUNCTIONS
  async function getOutfits() {
    const fetchedOutfits = await axios.get("/outfits");

    setOutfits(fetchedOutfits.data);
  }

  function hanldeSingleOutfit(src) {
    setSelectedOutfit(src);
    setCurrentView("SingleOutfit");
  }

  const outfitsList = outfits.map((outfit) => {
    return (
      <img
        alt="outfit_image"
        src={outfit.image_ref}
        onClick={(e) => {
          e.preventDefault();
          hanldeSingleOutfit(outfit.image_ref);
          setCurrentView("SingleOutfit");
        }}
      ></img>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <h1>Pick My Fit</h1>
      <SearchBar />
      {currentView === "AllOutfits" ? (
        <AllOutfits
          hanldeSingleOutfit={hanldeSingleOutfit}
          outfitsList={outfitsList}
          setCurrentView={setCurrentView} // passing it as a prop
        />
      ) : (
        <SingleOutfit selectedOutfit={selectedOutfit} />
      )}
    </div>
  );
}

//handlingUpload

//handling search
// const filterOutfitss = (outfitss, query) => {
//   if (!query) {
//       return outfitss;
//   }

//   return outfitss.filter((outfit) => {
//       return outfit.tags;
//   });
// };
// const { search } = window.location;
//   const query = new URLSearchParams(search).get('s');
//   const filteredOutfitss = filterOutfitss(outfitss, query);
