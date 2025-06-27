
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="OctoFit Logo" className="octofit-logo me-2" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Leaderboard />} />
        </Routes>
      </div>
      {/* 1996 banners */}
      <div style={{ marginTop: 40, marginBottom: 16, textAlign: 'center' }}>
        <img src={process.env.PUBLIC_URL + '/optimized-for-netscape.gif'} alt="Optimized for Netscape" style={{ height: 40, marginRight: 16, verticalAlign: 'middle', border: '2px solid #000080', background: '#fff', padding: 2 }} />
        <img src={process.env.PUBLIC_URL + '/made-with-microsoft-frontpage.gif'} alt="Made with Microsoft Frontpage" style={{ height: 40, verticalAlign: 'middle', border: '2px solid #000080', background: '#fff', padding: 2 }} />
      </div>
    </>
  );
}

export default App;
