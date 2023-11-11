import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import ALL from './component/ALL';
import FULLSTACKDEVELOPMENT from './component/FULLSTACKDEVELOPMENT';
import DATASCIENCE from './component/DATASCIENCE';
import CYBERSECURITY from './component/CYBERSECURITY';
import CAREER from './component/CAREER';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <Router>
          <div className="d-flex justify-content-between">
            <div className='.nav-link-container'>
              <Link to="/All" className="mr-3 custom-link">
                ALL
              </Link>
            </div>
            <div className='.nav-link-container'>
              <Link to="/FULLSTACKDEVELOPMENT" className="mr-3 custom-link">
                FULLSTACKDEVELOPMENT
              </Link>
            </div>
            <div className='.nav-link-container'>
              <Link to="/DATASCIENCE" className="mr-3 custom-link">
                DATASCIENCE
              </Link>
            </div>
            <div className='.nav-link-container'>
              <Link to="/CYBERSECURITY" className="mr-3 custom-link">
                CYBERSECURITY
              </Link>
            </div>
            <div className='.nav-link-container'>
              <Link to="/CAREER" className="custom-link">
                CAREER
              </Link>
            </div>
          </div>

          <Routes>
            <Route path="/All" element={<ALL />} />
            <Route path="/FULLSTACKDEVELOPMENT" element={<FULLSTACKDEVELOPMENT />} />
            <Route path="/DATASCIENCE" element={<DATASCIENCE />} />
            <Route path="/CYBERSECURITY" element={<CYBERSECURITY />} />
            <Route path="/CAREER" element={<CAREER />} />
            <Route path="/*" element={<div>Not Found</div>} /> 
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
