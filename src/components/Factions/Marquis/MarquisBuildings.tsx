import React, { useState } from "react";
import buildingRecruiter from "../../../images/building-recruiter.png";
import buildingSawmill from "../../../images/building-sawmill.png";
import buildingWorkshop from "../../../images/building-workshop.png";
import cardBunny from "../../../images/card-bunny.png";
import cardFox from "../../../images/card-fox.png";
import cardMouse from "../../../images/card-mouse.png";

interface BuildingProps {
  src: string;
  alt: string;
  increment: number;
}

const BuildingImage: React.FC<BuildingProps> = ({ src, alt, increment }) => {
  const [isImageTransparent, setIsImageTransparent] = useState(false);

  const handleClick = () => setIsImageTransparent(!isImageTransparent);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onClick={handleClick}
    >
      <img
        src={src}
        alt={alt}
        className={`token-images ${isImageTransparent ? "transparent" : ""}`}
      />
      {isImageTransparent && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "grey",
            fontSize: "2rem",
            fontWeight: "bold",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          +{increment}
        </div>
      )}
    </div>
  );
};

const BuildingImages: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <label>
            <h4 className="title">Buildings</h4>
          </label>
          <div className="building-images-container">
            <img src={cardFox} className="token-images" alt="Card Fox" />
            {Array.from({ length: 6 }, (_, i) => (
              <BuildingImage
                src={buildingSawmill}
                alt="Building Sawmill"
                increment={i}
                key={i}
              />
            ))}
          </div>
          <div className="building-images-container">
            <img src={cardBunny} className="token-images" alt="Card Bunny" />
            {Array.from({ length: 6 }, (_, i) => (
              <BuildingImage
                src={buildingWorkshop}
                alt="Building Workshop"
                increment={i}
                key={i}
              />
            ))}
          </div>
          <div className="building-images-container">
            <img src={cardMouse} className="token-images" alt="Card Mouse" />
            {Array.from({ length: 6 }, (_, i) => (
              <BuildingImage
                src={buildingRecruiter}
                alt="Building Recruiter"
                increment={i}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingImages;
