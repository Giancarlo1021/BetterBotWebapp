import { Link } from "react-router-dom";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import "../ItemPage.css";
import "../index.css";

import image1 from "../images/faction-marquise.png";
import image2 from "../images/faction-eyrie.png";
import image3 from "../images/faction-woodland.png";
import image4 from "../images/faction-vagabond.png";
import image5 from "../images/faction-riverfolk.png";
import image6 from "../images/faction-cult.png";
import image7 from "../images/faction-duchy.png";
import image8 from "../images/faction-corvid.png";

export interface ItemPageProps {
  items: string[];
  handleAddItem: (item: string) => void;
  traits?: string[];
  difficulty?: string;
  pageChildren: React.ReactNode;
}

type ItemRouteMap = {
  [key: string]: string;
};

const ItemPage: React.FC<ItemPageProps> = ({
  items,
  pageChildren,
  handleAddItem,
}) => {
  const itemRouteMap: ItemRouteMap = {
    "Marquise De Cat": "/item/1",
    "Eyrie Dynastie": "/item/2",
    "Woodland Alliance": "/item/3",
    Vagabond: "/item/4",
    Riverfolk: "/item/5",
    "Lizard Cult": "/item/6",
    "Underground Duchy": "/item/7",
    "Corvid Conspiracy": "/item/8",
  };

  const getImageSource = (item: string) => {
    switch (item) {
      case "Marquise De Cat":
        return image1;
      case "Eyrie Dynastie":
        return image2;
      case "Woodland Alliance":
        return image3;
      case "Vagabond":
        return image4;
      case "Riverfolk":
        return image5;
      case "Lizard Cult":
        return image6;
      case "Underground Duchy":
        return image7;
      case "Corvid Conspiracy":
        return image8;
      default:
        return "";
    }
  };

  const sidebarDropdownItems = items.map((item, index) => (
    <Dropdown.Item
      as={Link}
      to={itemRouteMap[item]}
      key={index}
      className="dropdown-item"
    >
      <img
        src={getImageSource(item)}
        alt={`Item ${index + 1}`}
        className="item-image"
      />
    </Dropdown.Item>
  ));

  const dropdownItems = [
    { name: "Marquise De Cat", route: "/item/1" },
    { name: "Eyrie Dynastie", route: "/item/2" },
    { name: "Woodland Alliance", route: "/item/3" },
    { name: "Vagabond", route: "/item/4" },
    { name: "Riverfolk", route: "/item/5" },
    { name: "Lizard Cult", route: "/item/6" },
    { name: "Underground Duchy", route: "/item/7" },
    { name: "Corvid Conspiracy", route: "/item/8" },
  ].map((item, index) => (
    <Dropdown.Item
      as={Link}
      to={item.route}
      key={index}
      className="dropdown-item"
      onClick={() => handleAddItem(item.name)}
    >
      {item.name}
    </Dropdown.Item>
  ));

  return (
    <div className="app-container">
      <div className="app-aside-container">
        <aside className="app-aside">
          <div className="">
            <h1 className="app-aside-content">Bots</h1>
          </div>
        </aside>
        <aside className="app-aside-secondary">{sidebarDropdownItems}</aside>
      </div>
      <div className="app-main-container">
        <header className="app-header">
          <h1 className="app-title">Clock Work Companion</h1>
          <div className="header-icons">
            <BiRefresh className="refresh-icon" />
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="clear-button"
              >
                <AiOutlinePlus className="plus-icon"></AiOutlinePlus>
              </Dropdown.Toggle>
              <Dropdown.Menu className="menu dropdown-menu">
                {dropdownItems}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
        <div className="app-main">
          <main className="app-content">{pageChildren}</main>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
