import { useState } from "react";
import { Route, Routes } from "react-router";

import bundImg from "./assets/bundesliga_logo.jpg";

import "./App.css";
import Header from "./Header";
import LeagueTable from "./LeagueTable";
import Teams_components from "./Teams_components";
import TeamsPage from "./TeamsPage";
import Players_components from "./Players_components";
import PlayersPage from "./PlayersPage";
import Matches_components from "./Matches_components";
import MatchesPage from "./MatchesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LeagueTable />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/matches" element={<MatchesPage />} />
      </Routes>
    </>
  );
}

export default App;
