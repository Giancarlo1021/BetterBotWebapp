/* HomePage.tsx */

import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../index.css";

type HomePageProps = {
  handleAddItem: (item: string) => void;
};

const HomePage: React.FC<HomePageProps> = ({ handleAddItem }) => {
  const dropdownItems = [
    "Marquise De Cat",
    "Eyrie Dynastie",
    "Woodland Alliance",
    "Vagabond",
    "Riverfolk",
    "Lizard Cult",
    "Underground Duchy",
    "Corvid Conspiracy",
  ].map((item, index) => (
    <Dropdown.Item
      as={Link}
      to={`/item/${index + 1}`}
      key={index}
      className="dropdown-item"
      onClick={() => handleAddItem(item)}
    >
      {item}
    </Dropdown.Item>
  ));

  return (
    <div className="app-container">
      <div className="todo-container">
        <header className="app-header">
          <h1 className="app-title">Clock Work Companion</h1>
          <div className="header-icons">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="clear-button"
              >
                <AiOutlinePlus size={20} className="plus-icon"></AiOutlinePlus>
              </Dropdown.Toggle>
              <Dropdown.Menu className="menu">{dropdownItems}</Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
