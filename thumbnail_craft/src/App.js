import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./Main";

function App() {
  const [resetPreview, setResetPreview] = useState(false);

  const handleResetPreview = () => {
    setResetPreview(prevState => !prevState);
  };

  return (
    <div className="App">
      <Header resetPreview={handleResetPreview} /> 
      <Main resetPreview={resetPreview} handleResetPreview={handleResetPreview} />
    </div>
  );
}

export default App;
