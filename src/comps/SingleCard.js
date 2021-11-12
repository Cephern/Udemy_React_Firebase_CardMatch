import "./SingleCard.css";

const SingleCard = ({ item, handleChoice, flipped, disabled }) => {
  const { src } = item;

  const handleClick = () => {
    if (!disabled) {
      handleChoice(item);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={src} className="front" alt="card front" />
        <img
          src="/img/cover.png"
          className="back"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
