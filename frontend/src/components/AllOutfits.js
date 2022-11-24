import React from "react";

export default function AllOutfits({ setCurrentView, outfitsList }) {
  console.log(outfitsList);

  return <div className="allPhotos-Grid">{outfitsList}</div>;
}
