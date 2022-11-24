import React from "react";

import FileUpload from "./FileUpload";
import "../styles/FileUpload.css";

export default function Navbar({ outfitsList }) {
  return (
    <>
      <div className="navbar">
        <a href="">Return</a>
        <FileUpload />
      </div>
    </>
  );
}
