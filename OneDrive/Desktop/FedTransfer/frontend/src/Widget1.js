// Widget1Page.js
import React from 'react';

const Widget1Page = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Widget 1 Page</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div style={{ border: '1px solid #ccc', padding: '15px', minWidth: '150px' }}>
            <h3>General Transfer</h3>
            <p>Content for General Transfer</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '15px', minWidth: '150px' }}>
            <h3>Demand Based Transfer</h3>
            <p>Content for Demand Based Transfer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget1Page;
