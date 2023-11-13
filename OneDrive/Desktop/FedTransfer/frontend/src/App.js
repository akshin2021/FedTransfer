import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Widget1Page from './Widget1'; // Import the new component

const Box = ({ title, content, linkTo }) => (
  <Link to={linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', minWidth: '150px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </Link>
);

const Widget = ({ match }) => (
  <div>
    <h1>Widget {match.params.widgetId}</h1>
    {/* Additional content for the specific widget */}
  </div>
);

const Dashboard = () => {
  const [userName, setUserName] = useState('John Doe');

  return (
    <div>
      <h2>Welcome {userName}!</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box title="Transfer Management" content="" linkTo="/Widget1Page" />
        <Box title="Widget 2" content="" linkTo="/widgets/2" />
        <Box title="Widget 3" content="" linkTo="/widgets/3" />
        <Box title="Widget 4" content="" linkTo="/widgets/4" />
        <Box title="Widget 5" content="" linkTo="/widgets/5" />
        <Box title="Widget 6" content="" linkTo="/widgets/6" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <h1>HR Dashboard</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/widgets/:widgetId" element={<Widget />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
