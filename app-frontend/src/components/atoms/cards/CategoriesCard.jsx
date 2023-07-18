import React from "react";
import styled from "styled-components";

const StyledCategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .image-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: ${(props) => props.bg && `url(${props.bg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 1px;
  }

  .name {
    font-size: 1rem;
    font-family: ${(props) => props.theme.fontFamily[0]};
    font-weight: 600;
    padding: 0.5rem;
  }
`;

const CategoryCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  justify-content: center;
`;

const CategoryCard = ({ image, name }) => {
  return (
    <StyledCategoryCard bg={image}>
      <div className="image-container"></div>
      <span className="name">{name}</span>
    </StyledCategoryCard>
  );
};

const CategoryCollection = () => {
  const arry = new Array(20).fill({
    name: "Chicken",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/141435006.jpg?tr=w-500",
  });
  return (
    <CategoryCardWrapper>
      {arry.map(({ image, name }, id) => (
        <CategoryCard image={image} name={name} key={id} />
      ))}
    </CategoryCardWrapper>
  );
};

export default CategoryCollection;
