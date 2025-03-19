import "../styles/header.css";

function Header() {
  return (
    <div id="header">
      <h1>Dog Memory Card</h1>

      <div className="help-container">
        <span className="help-icon">?</span>
        <div className="help-tooltip">
          <h3>How to Play</h3>
          <p>
            Click on each image only once. If you click on an image twice, you
            lose!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;
