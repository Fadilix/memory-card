import React from "react";
import "../scss/LeadBoard.scss";
import NavBar from "../components/NavBar";

const LeadBoard = () => {
  return (
    <div>
      <NavBar />
      <div class="container-wrap">
        <section id="leaderboard">
          <nav class="ladder-nav">
            <div class="ladder-title">
              <h1>Standings</h1>
            </div>
            <div class="ladder-search">
              <input
                type="text"
                id="search-leaderboard"
                class="live-search-box"
                placeholder="Search player..."
              />
            </div>
          </nav>
          <table id="rankings" class="leaderboard-results" width="100%">
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
    </div>
  );
};

export default LeadBoard;
