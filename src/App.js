import React from "react";
 import {Cards, Chart, Country } from './components';
  import styles from './App.module.css';

    class App extends React.Component {
     
    render() {
      return (
        <div className={styles.container}>
          <Cards />
          <Chart />
          <Country />
        </div>
      );
    }
  }
  export default App;
  