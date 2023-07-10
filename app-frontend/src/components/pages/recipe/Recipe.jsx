import React from "react";
import { StyledRecipe } from "./recipe.styles";
import profile from "../../../assets/images/profile.jpg";
import {
  PiExportBold,
  PiBookmarkSimpleBold,
  PiCalendarBlank,
} from "react-icons/pi";
import { FiPrinter } from "react-icons/fi";
import { BiSolidEdit } from "react-icons/bi";
import { LuMessageSquare } from "react-icons/lu";
import { LiaStarSolid } from "react-icons/lia";
import LandingNavbar from "../../templates/navbar/LandingNavbar";
import { instructions, nutritionalFact, recipeStep } from "./recipes";

const Recipe = () => {
  return (
    <StyledRecipe>
      <LandingNavbar />
      <header>
        <div className="share">
          <p> 85% will make this</p>
          <div className="export">
            <PiExportBold />
            <PiBookmarkSimpleBold />
          </div>
        </div>
        <h1>Strawberry Cream Cheesecake</h1>
        <div className="info">
          <div className="profile">
            <img src={profile} alt="profile" />
            <span>Tracy Albert</span>
          </div>
          <div className="time">
            <PiCalendarBlank />
            <span>Yesterday</span>
          </div>
          <div className="comments">
            <LuMessageSquare />
            <span>25</span>
          </div>
          <div className="rating">
            {new Array(5).fill("").map(() => (
              <LiaStarSolid />
            ))}
          </div>
        </div>
        <p className="description">
          One thing I have learned living in Canarsie section of Brooklyn, NY
          was how to cook a good italian meal. Here is a recipe I created after
          having this dish in a restaurant. Enjoy!
        </p>
        <div className="image"></div>
      </header>

      <main>
        <div className="left-container">
          <div className="recipe-info">
            <div className="container">
              <span className="title">PREP TIME</span>
              <span className="desc">15 MIN</span>
            </div>
            <div className="container">
              <span className="title">PREP TIME</span>
              <span className="desc">15 MIN</span>
            </div>
            <div className="container">
              <span className="title">SERVING</span>
              <span className="desc">
                4 PEOPLE <BiSolidEdit size={24} />
              </span>
            </div>
            <FiPrinter size={24} />
          </div>
          <div className="ingredients">
            <h1>Ingredients</h1>
            {recipeStep.map((recipe, i) => (
              <div className="wrapper">
                <h3 key={i}>{recipe.name}</h3>
                {recipe?.description?.map((description) => (
                  <div className="checkbox">
                    <input type="checkbox" /> <label>{description}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="instructions">
            <h1>Instructions</h1>
            {instructions.map((instruct, i) => (
              <div className="instruction-item">
                <span className="number">{i}</span>{" "}
                <span className="desc">{instruct}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="right-container">
          <div className="nutritional-fact">
            <h2>Nutritional Facts</h2>
            <div className="facts-table">
              {nutritionalFact.map(({ key, value }, i) => (
                <div className="item" key={i}>
                  <span>{key}</span> <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="recommendations">
            <h3>Fresh Recipes</h3>
            {new Array(5).fill("").map(() => (
              <div className="recipe-card">
                <div className="img"></div>
                <div className="desc">
                  <div className="rating">
                    {new Array(5).fill("").map(() => (
                      <LiaStarSolid />
                    ))}
                  </div>
                  <span>Spinach and cheese paster</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </StyledRecipe>
  );
};

export default Recipe;
