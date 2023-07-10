import React from "react";
import LandingNavbar from "../../templates/navbar/LandingNavbar";
import CategoryCollection from "../../atoms/cards/CategoriesCard";
import { StyledCategory } from "./category.styles";

const Category = () => {
  return (
    <StyledCategory>
      <LandingNavbar />
      <h1>Categories</h1>
      <CategoryCollection />
    </StyledCategory>
  );
};

export default Category;
