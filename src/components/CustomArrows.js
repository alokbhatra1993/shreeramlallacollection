import React from "react";

// Custom Next Arrow
export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "10px",
        zIndex: "1",
        width: "50px",
        height: "50px",
        backgroundColor: "#fff", // Background color
        color: "#02123c",
        borderRadius: "50%", // Circular arrow button
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Shadow effect
        cursor: "pointer",
        transition: "all 0.3s ease", // Smooth transition
      }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right" style={{ fontSize: "20px", color: "#02123c" }}></i>
    </div>
  );
};

// Custom Prev Arrow
export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: "10px",
        zIndex: "1",
        width: "50px",
        height: "50px",
        backgroundColor: "#fff", // Background color
        color: "#02123c",
        borderRadius: "50%", // Circular arrow button
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Shadow effect
        cursor: "pointer",
        transition: "all 0.3s ease", // Smooth transition
      }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left" style={{ fontSize: "20px", color: "#02123c" }}></i>
    </div>
  );
};
