import bundImg from "./assets/bundesliga_logo.jpg";

function Header() {
  return (
    <>
      <nav aria-label="Primary">
        <img src={bundImg} alt="Logo" className="nav-image" />
        <p className="nav-title">Bundesliga 2022-23</p>
        <div className="nav-links-container">
          <a href="index.html" className="nav-link">
            Home
          </a>
          <a href="teams.html" className="nav-link">
            Teams
          </a>
          <a href="players.html" className="nav-link">
            Players
          </a>
          <a href="matches.html" className="nav-link">
            Matches
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
