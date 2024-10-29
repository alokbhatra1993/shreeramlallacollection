import React from "react";
import { Link } from "react-router-dom";

const fashionCategories = [
  {
    img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men's Fashion",
    description:
      "Discover the latest trends in men's clothing, accessories, and footwear, tailored for every occasion.",
    link: "/mens-fashion",
  },
  {
    img: "https://images.pexels.com/photos/3966776/pexels-photo-3966776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women's Fashion",
    description:
      "Explore a wide range of stylish outfits, from casual wear to formal attire, designed for modern women.",
    link: "/womens-fashion",
  },
  {
    img: "https://images.pexels.com/photos/901236/pexels-photo-901236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Kids' Fashion",
    description:
      "Find adorable and comfortable clothing for kids of all ages, perfect for playtime and special occasions.",
    link: "/kids-fashion",
  },
  {
    img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Fashion Accessories",
    description:
      "Complete your look with our selection of accessories, including bags, jewelry, and hats for all ages.",
    link: "/fashion-accessories",
  },
  {
    img: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Footwear",
    description:
      "Step out in style with our collection of trendy shoes for men, women, and kids, suitable for every occasion.",
    link: "/footwear",
  },
];

const TravelCategoriesSection = () => {
  return (
    <section className="travel-categories-section">
      <div className="container">
        <h2 className="creative-heading2 text-center">Explore Our Fashion Categories</h2>
        <div className="categories-grid">
          {fashionCategories.map((category, index) => (
            <div className="category-card" key={index}>
              <img src={category.img} alt={category.title} className="category-img" />
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <Link to={category.link} className="category-link">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategoriesSection;
