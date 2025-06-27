
import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://silver-space-guide-8000.app.github.dev/api/leaderboard')
      .then(res => res.json())
      .then(data => setLeaders(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-primary">Leaderboard</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((leader, idx) => (
                  <tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{leader.name}</td>
                    <td>{leader.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
