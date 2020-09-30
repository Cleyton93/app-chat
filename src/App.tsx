import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import themes, { Themes } from './styles/themes';

import GlobalStyles from './styles/GlobalStyles';

import Base from './components/Base';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Group from './pages/Group';

function App() {
  const [theme, setTheme] = useState<Themes>('light');

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');

    if (currentTheme === 'light')
      setTheme('light');

    if (currentTheme === 'dark')
      setTheme('dark');
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <BrowserRouter>
        <Switch>
          <Route path="/(|home)" exact component={Base(Home)} />
          
          <Route path="/grupo" component={Base(Group)} />

          <Route
            path="/configuracoes"
            component={Base(() => {
              return <Settings theme={theme} setTheme={setTheme} />
            })}
          />
        </Switch>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
