import React, { useState, useEffect, useCallback } from 'react';

import { Themes } from '../../styles/themes';

import { Container } from './styles';

interface Props {
  theme: string;
  setTheme: (value: Themes) => void;
}

const Settings: React.FC<Props> = ({ theme, setTheme }) => {
  const [inputLight, setInputLight] = useState<boolean>(false);
  const [inputDark, setInputDark] = useState<boolean>(false);

  useEffect(() => {
    switch(theme) {
      case 'light':
        setInputDark(false);
        setInputLight(true);
      break;

      case 'dark':
        setInputLight(false);
        setInputDark(true);
      break;
    }
  }, [theme])

  const handleChangeToDarkTheme = useCallback(() => {
    window.localStorage.setItem('theme', 'dark');

    setTheme('dark');
  }, [setTheme]);

  const handleChangeToLightTheme = useCallback(() => {
    window.localStorage.setItem('theme', 'light');

    setTheme('light');
  }, [setTheme]);

  return (
    <Container>
      <div>
        <h3>Mudar tema</h3>

        <div>
          <input
            type="radio"
            name="theme"
            checked={inputLight}
            onChange={handleChangeToLightTheme}
          />
          <label>Tema padrão</label>
        </div>

        <div>
          <input
            type="radio"
            name="theme"
            checked={inputDark}
            onChange={handleChangeToDarkTheme}
          />
          <label>Tema dark</label>
        </div>
      </div>
    </Container>
  );
};

export default Settings;