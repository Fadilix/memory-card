import React from "react";
import "../scss/LeadBoard.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useUsers } from "../hooks/useUsers";

const LeadBoard = () => {
  const { users } = useUsers();
  return (
    <div className="appear">
      <NavBar />
      <div className="container-wrap">
        <section id="leaderboard">
          <nav className="ladder-nav">
            <div className="ladder-title">
              <h1>Standings</h1>
            </div>
            <div className="ladder-search">
              <input
                type="text"
                id="search-leaderboard"
                className="live-search-box"
                placeholder="Search player..."
              />
            </div>
          </nav>
          <table id="rankings" className="leaderboard-results" width="100%">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Country</th>
                <th>Games Played</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {/* when there is no user print Loading... */}
              {users.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    textAlign: "center",
                  }} className="pulse">Loading...</td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.country}</td>
                    <td>{user.gamesPlayed || 0}</td>
                    <td>{user.bestScore || 0}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LeadBoard;
