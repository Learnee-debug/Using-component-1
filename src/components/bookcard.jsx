import PropTypes from "prop-types";
import "./bookCard.css";

const BookCard = ({ title, author, description, image }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <h2>{title}</h2>
      <h4>by {author}</h4>
      <p>{description}</p>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // Add image prop validation
};

export default BookCard;
