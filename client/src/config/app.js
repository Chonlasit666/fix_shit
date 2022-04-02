import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from '../components';
import Routes from './routes';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
