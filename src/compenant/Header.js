const Header = ({ logoUrl }) => {
  return (
    <div className="header-app">
      <div className="logo">
        <img src={logoUrl} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
