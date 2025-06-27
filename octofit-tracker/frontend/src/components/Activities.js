
import React, { useState, useEffect } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://silver-space-guide-8000.app.github.dev/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-primary">Activities</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, idx) => (
                  <tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{activity.name}</td>
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

export default Activities;
