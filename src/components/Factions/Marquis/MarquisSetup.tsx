/* MarquisSetup.tsx */

import React, { ChangeEvent, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import ItemPage from "../../ItemPage";
import "../../../index.css";
import "../../../setup.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setDifficulty,
  addTrait,
  removeTrait,
} from "../../../redux/slices/settingSlice";
import { RootState } from "../../../redux/redux store/store";

interface MarquisSetupProps {
  items: string[];
  handleAddItem: (item: string) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MarquisSetup: React.FC<MarquisSetupProps> = ({
  items,
  handleAddItem,
}) => {
  const location = useLocation();

  const dispatch = useDispatch();
  const difficulty = useSelector(
    (state: RootState) => state.settings.difficulty
  );
  const traits = useSelector((state: RootState) => state.settings.traits);
  const handleTraitChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(addTrait(event.target.value));
    } else {
      dispatch(removeTrait(event.target.value));
    }
  };

  const handleDifficultyChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(setDifficulty(event.target.value));
    }
  };

  const handleButtonClick = () => {
    // Define what should happen when the button is clicked
  };

  return (
    <ItemPage
      items={items}
      handleAddItem={handleAddItem}
      pageChildren={
        <div>
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <h4> Setup (A) </h4>
                <ol type="1" className="setup-list">
                  <li>
                    <p className="paragraph">
                      Set up priority markers for the map.
                    </p>
                  </li>

                  <li>
                    <p className="paragraph">
                      Form a supply of 25 warriors near you.
                    </p>
                  </li>

                  <li>
                    <p className="paragraph">
                      Place the keep token in a random corner clearing.
                    </p>
                  </li>

                  <li>
                    <p className="paragraph">
                      Place 1 sawmill, 1 workshop and 1 recruiter randomly among
                      the clearings adjacent to the clearing with the keep token
                      with up to one building per clearing.
                    </p>
                  </li>

                  <li>
                    <p className="paragraph">
                      Collect your remaining 15 buildings and place them near
                      you.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <h4>Difficulty</h4>
                <div className="radio-container">
                  <label>
                    <input
                      type="radio"
                      name="difficulty"
                      value="easy"
                      checked={difficulty === "easy"}
                      onChange={handleDifficultyChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-label">
                      <h5>Easy</h5>
                    </span>
                  </label>
                  <p className="radio-paragraph">
                    Whenever you Recruit, instead place only three warriors.
                  </p>
                  <label>
                    <input
                      type="radio"
                      name="difficulty"
                      value="expert"
                      checked={difficulty === "expert"}
                      onChange={handleDifficultyChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-label">
                      <h5>Expert</h5>
                    </span>
                  </label>
                  <p className="radio-paragraph">Nothing is changed.</p>
                  <label>
                    <input
                      type="radio"
                      name="difficulty"
                      value="master"
                      checked={difficulty === "master"}
                      onChange={handleDifficultyChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-label">
                      <h5>Master</h5>
                    </span>
                  </label>
                  <p className="radio-paragraph">
                    Whenever you Recruit, instead place five warriors.
                  </p>
                  <label>
                    <input
                      type="radio"
                      name="difficulty"
                      value="bossmode"
                      checked={difficulty === "bossmode"}
                      onChange={handleDifficultyChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-label">
                      <h5>Boss Mode</h5>
                    </span>
                  </label>
                  <p className="radio-paragraph">
                    Whenever you Recruit, instead place five warriors. At the
                    end of Evening, score one victory point per two players
                    (rounded up).{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <h4>Choose Traits</h4>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="traits"
                    value="blitz"
                    checked={traits.includes("blitz")}
                    onChange={handleTraitChange}
                  />
                  <span className="custom-checkbox"></span>
                  <h5>Blitz</h5>
                </label>
                <p className="checkbox-paragraph">
                  After you move, find the clearing you rule of the highest
                  priority without any enemy pieces. Move all but one warrior
                  from the clearing. Then, battle in the destination clearing.
                </p>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="traits"
                    value="fortified"
                    checked={traits.includes("fortified")}
                    onChange={handleTraitChange}
                  />
                  <span className="custom-checkbox"></span>
                  <h5>Fortified</h5>
                </label>
                <p className="checkbox-paragraph">
                  Your buildings each take two hits to remove. Taking a single
                  hit with a building has no effect.
                </p>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="traits"
                    value="hospitals"
                    checked={traits.includes("hospitals")}
                    onChange={handleTraitChange}
                  />
                  <span className="custom-checkbox"></span>
                  <h5>Hospitals</h5>
                </label>
                <p className="checkbox-paragraph">
                  At the end of battle as defender, if two or more Marquise
                  warriors were removed in the battle, place one warrior in the
                  clearing with the keep token.
                </p>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="traits"
                    value="ironwill"
                    checked={traits.includes("ironwill")}
                    onChange={handleTraitChange}
                  />
                  <span className="custom-checkbox"></span>
                  <h5>Iron Will</h5>
                </label>
                <p className="checkbox-paragraph">
                  Repeat Daylight may happen twice per turn instead of only
                  once.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="btn-card-body">
                <Link to="/item/1a">
                  <button className="btn" onClick={handleButtonClick}>
                    Done
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default MarquisSetup;
