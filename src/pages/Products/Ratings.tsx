import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = ({ value = 3.7, text = "good" }) => {
  const fullStars = Math.floor(value);
  const halfStars = value - fullStars > 0.5 ? 1 : 0;
  const emptyStar = 5 - fullStars - halfStars;
  return (
    <div style={{ display: "flex", alignItems: "center", width: "10rem" }}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} style={{ color: "black", marginLeft: "4px" }} />
      ))}
      {/* / */}
      {halfStars === 1 && (
        <FaStarHalfAlt style={{ color: "black", marginLeft: "4px" }} />
      )}
      {/* // */}
      {[...Array(emptyStar)].map((_, index) => (
        <FaRegStar key={index} style={{ color: "black", marginLeft: "4px" }} />
      ))}

      <span style={{ marginLeft: "1rem", color: "black" }}>{text && text}</span>
    </div>
  );
};

export default Ratings;
