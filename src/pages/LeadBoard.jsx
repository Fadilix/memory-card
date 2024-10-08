import React from "react";
import "../scss/LeadBoard.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useUsers } from "../hooks/useUsers";

const LeadBoard = () => {
  const { users } = useUsers();
  return (
    <div>
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
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LeadBoard;
