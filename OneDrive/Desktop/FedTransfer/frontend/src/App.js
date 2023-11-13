import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

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
      <h1>Welcome to the Dashboard, {userName}!</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box title="Widget 1" content="Content for Widget 1" linkTo="/widgets/1" />
        <Box title="Widget 2" content="Content for Widget 2" linkTo="/widgets/2" />
        <Box title="Widget 3" content="Content for Widget 3" linkTo="/widgets/3" />
        <Box title="Widget 4" content="Content for Widget 4" linkTo="/widgets/4" />
        <Box title="Widget 5" content="Content for Widget 5" linkTo="/widgets/5" />
        <Box title="Widget 6" content="Content for Widget 6" linkTo="/widgets/6" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <h1>Simple React Dashboard</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/widgets/:widgetId" element={<Widget />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
