/* MarquisTurn.tsx */

import React from "react";
import tokenSack from "../../../images/token-item-sack.png";
import { useLocation } from "react-router-dom";
import BotTurnPage, { ItemPageProps } from "../../BotTurnPage";
import "../../../index.css";
import "../../../setup.css";
import "../../../turn.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux store/store";
import TokenImages from "../../TokenImages";

interface MarquisTurnProps extends ItemPageProps {}

const MarquisTurn: React.FC<MarquisTurnProps> = (props) => {
  const { items, handleAddItem, traits, difficulty } = props;

  const location = useLocation();
  const locationState = location.state as {
    traits: string[];
    difficulty: string;
  };

  // Access Redux state using useSelector
  const reduxState = useSelector((state: RootState) => state);
  // Access specific values from the Redux state
  const traitsFromRedux = reduxState.settings.traits;
  const difficultyFromRedux = reduxState.settings.difficulty;

  // Replace traitsArray and difficultyValue with traitsFromRedux and difficultyFromRedux
  const traitsArray = traitsFromRedux || [];
  const difficultyValue = difficultyFromRedux || "";
  const traitData: { [key: string]: { title: string; description: string } } = {
    blitz: {
      title: "Blitz",
      description:
        "After you move, find the clearing you rule of the highest priority without any enemy pieces. Move all but one warrior from the clearing. Then, battle in the destination clearing.",
    },
    fortified: {
      title: "Fortified",
      description:
        "Your buildings each take two hits to remove. Taking a single hit with a building has no effect.",
    },
    hospitals: {
      title: "Hospitals",
      description:
        "At the end of battle as defender, if two or more Marquise warriors were removed in the battle, place one warrior in the clearing with the keep token.",
    },
    ironwill: {
      title: "Iron Will",
      description:
        "Repeat Daylight may happen twice per turn instead of only once.",
    },
  };

  const difficultyData: {
    [key: string]: { title: string; description: string };
  } = {
    easy: {
      title: "Easy",
      description: "Whenever you Recruit, instead place only three warriros",
    },
    expert: {
      title: "Expert",
      description: "Nothing is changed.",
    },
    master: {
      title: "Master",
      description: "Whenever you Recruit, instead place five warriors.",
    },
    bossmode: {
      title: "Boss Mode",
      description:
        "Whenever you Recruit, instead place five warriors. At the end of Evening, score one victory point per two players (rounded up).",
    },
  };

  const traitDataToDisplay = traitsArray.map((trait) => traitData[trait]);
  const difficultyDataToDisplay = difficultyData[difficultyValue];
  return (
    <div>
      <BotTurnPage
        items={items}
        handleAddItem={handleAddItem}
        traits={traits}
        difficulty={difficulty}
        pageChildren={
          <div>
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <div className="title">
                    <label>
                      <h4 className="title">Difficulty and Traits</h4>
                    </label>
                  </div>
                  <label>
                    <h6 className="paragraph-title">
                      Difficulty - {difficultyDataToDisplay.title}
                    </h6>
                    <p className="paragraph">
                      You have no hand of cards. You cannot discard cards. If a
                      human would take a card from you, they draw a card
                      instead. If a human would give a card to you, they discard
                      it, and you score .
                    </p>
                  </label>
                  <h6 className="paragraph-title">Poor Manual Dexterity</h6>
                  <p className="paragraph">
                    You have no hand of cards. You cannot discard cards. If a
                    human would take a card from you, they draw a card instead.
                    If a human would give a card to you, they discard it, and
                    you score .
                  </p>

                  <h6 className="paragraph-title">Hates Surprises</h6>
                  <p className="paragraph">
                    Ambush cards cannot be played against you.
                  </p>

                  <h6 className="paragraph-title">The Keep</h6>
                  <p className="paragraph">
                    Only you can place pieces in the clearing with the keep
                    token.
                  </p>
                  {traitDataToDisplay.map((trait, index) => (
                    <React.Fragment key={index}>
                      <h6 className="paragraph-title">{trait.title}</h6>
                      <p className="paragraph">{trait.description}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <TokenImages />

            <div className="card-container">
              <div className="card">
                <div className="card-body">{/* Card 5 */}</div>
              </div>
            </div>

            <div className="card-container">
              <div className="card">
                <div className="card-body">{/* Card 6 */}</div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default MarquisTurn;
