import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import bundImg from "./assets/bundesliga_logo.jpg";

import "./App.css";
import Header from "./Header";
import LeagueTable from "./LeagueTable";

function App() {
  return (
    <>
      <Header />
      <LeagueTable />
    </>
  );
}

export default App;
