function RatingBar({ rate }) {
  return (
    <div>
      {[...Array(10)].map((_, index) => (
        <span key={index} style={{ color: index < rate ? '#271670ff' : '#5c5c5eff', fontSize: '20px' }}>
          &#9733; 
        </span>
      ))}
    </div>
  );
}

export default RatingBar;
