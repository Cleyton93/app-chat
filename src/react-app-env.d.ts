/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_APP_URL: string;
    REACT_APP_API_URL: string;
  };
};
