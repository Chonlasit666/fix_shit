import React, { useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN_URL } from '../../config/urls';
import { useUserRequired } from '../../utils/hooks';
import { UserContext, Layout } from '../../components';

import welcomePandaGif from './assets/welcome-panda.gif';
import { logout, todo } from '../../pages/Home/sdk';
import styles from './Home.module.css';

const Home = () => {
  useUserRequired();
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const handleTodo = useCallback(() => {
    todo();
  }, [setUser, history]);

  const handleLogout = useCallback(() => {
    logout().then(() => {
      setUser(null);
      history.push(LOGIN_URL);
    });
  }, [setUser, history]);

  if (!user) {
    return null;
  }



  return (
    <Layout className={styles.content}>

      
      <button  onClick={handleTodo}>
        Test
      </button>
      
      <img
        src={welcomePandaGif}
        alt="Welcome Panda"
        className={styles.pandaImg}
      />
      <h1 className={styles.userEmail}>{user.name}</h1>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        LOGOUT
      </button>

      
    </Layout>
  );
};

export default Home;
