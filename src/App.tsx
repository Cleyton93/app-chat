import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { validateUser } from './redux/reducers/authenticate/action-creators';

import { IMapAuthenticate, IAuthenticate } from './@types/states';

import themes, { Themes } from './styles/themes';

import GlobalStyles from './styles/GlobalStyles';

import Loading from './components/Loading';
import Base from './components/Base';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';

interface Props {
  validateUser: (token: string) => void;
};

const App: React.FC<Props & IAuthenticate> = (
  { userData, isLogged, validateUser }
) => {
  const [theme, setTheme] = useState<Themes>('light');

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');

    if (currentTheme === 'light')
      setTheme('light');

    if (currentTheme === 'dark')
      setTheme('dark');
  }, []);

  useEffect(() => {
    if (!userData) {
      const token = [];

      token.push(window.localStorage.getItem('15BgHYT'));
      token.push(window.localStorage.getItem('3gbGbgx'));
      token.push(window.localStorage.getItem('JugtDRk'));

      validateUser(token.join('.'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return  isLogged === null ? (
    <Loading />
  ) :
  (
    <ThemeProvider theme={themes[theme]}>
      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={
              <Base component={<Home name={userData ? userData.name : ''} />} />
            }
          />
    
          <Route
            path="/chat"
            element={<Base component={<Chat userData={userData} />} />}
          />

          <Route
            path="/perfil"
            element={<Base component={<Profile userData={userData} />} />}
          />

          <Route
            path="/configuracoes"
            element={
              <Base
                component={
                  <Settings theme={theme} setTheme={setTheme} />
                }
              />
            }
          />
    
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}

const mapStateToProps = (
  { authenticate: { isLogged, userData } }: IMapAuthenticate
) => ({
  userData,
  isLogged,
});

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  validateUser: (token: string) => dispatch(validateUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
