// TokenImages.tsx
import React, { useState } from "react";
import tokenSack from "../images/token-item-sack.png";
import tokenBoot from "../images/token-item-boot.png";
import tokenSword from "../images/token-item-sword.png";
import tokenTea from "../images/token-item-tea.png";
import tokenCoin from "../images/token-item-coin.png";
import tokenCrossbow from "../images/token-item-crossbow.png";
import tokenHammer from "../images/token-item-hammer.png";

interface TokenImageProps {
  src: string;
  alt: string;
}

const TokenImage: React.FC<TokenImageProps> = ({ src, alt }) => {
  const [isImageGrey, setIsImageGrey] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`token-images ${isImageGrey ? "" : "grayscale"}`}
      onClick={() => setIsImageGrey(!isImageGrey)}
    />
  );
};

const TokenImages: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <label>
            <h4 className="title">Items</h4>
          </label>
          <div className="images-container">
            <TokenImage src={tokenSack} alt="Token Sack" />
            <TokenImage src={tokenSack} alt="Token Sack" />
            <TokenImage src={tokenBoot} alt="Token Boot" />
            <TokenImage src={tokenBoot} alt="Token Boot" />
            <TokenImage src={tokenSword} alt="Token Sword" />
            <TokenImage src={tokenSword} alt="Token Sword" />
            <TokenImage src={tokenTea} alt="Token Tea" />
            <TokenImage src={tokenTea} alt="Token Tea" />
            <TokenImage src={tokenCoin} alt="Token Coing" />
            <TokenImage src={tokenCoin} alt="Token Coin" />
            <TokenImage src={tokenCrossbow} alt="Token Crossbow" />
            <TokenImage src={tokenHammer} alt="Token Hammer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenImages;
