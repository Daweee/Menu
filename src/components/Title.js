const Title = ({ title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  );
};

Title.defaultProps = {
  title: "our menu",
};

export default Title;
