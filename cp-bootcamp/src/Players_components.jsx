import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function Players_components() {
  const [players, setPlayers] = useState([]);
  const [masterDict, setMasterDict] = useState({});

  useEffect(() => {
    const fetchPlayers = async () => {
      const dictResponse = await fetch("master_dict.json");
      const dict = await dictResponse.json();
      setMasterDict(dict);

      const { data, error } = await supabase
        .from("bundesliga_players_2022_23")
        .select("*");
      if (error) {
        console.error("Error fetching players:", error);
      } else {
        setPlayers(data);
        console.log(data);
        console.log(typeof data);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <>
      <p className="page_title">Players</p>
      <p className="page_subtitle">Leading scorers</p>

      {players.length === 0 ? (
        <p>Loading players...</p>
      ) : (
        <div className="table_container_b">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Team</th>
                <th>Apps</th>
                <th>Mins</th>
                <th>Goals</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.Player_index}>
                  {" "}
                  <td>{player.Player}</td>
                  <td>{masterDict[player.Team.trim()] || player.Team}</td>
                  <td>{player.Apps}</td>
                  <td>{player.Min}</td>
                  <td>{player.G}</td>
                  <td>{player.A}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Players_components;
