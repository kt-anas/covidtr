import React from "react";
import { Cards, Chart, Country } from "./components";
import styles from "./App.module.css";
import {fetchData } from './api';

class App extends React.Component {
    state = {
        data:{},
    }
    async componentDidMount() {
        const data = await fetchData();
       this.setState({data:fetchData});
    }
  render() {
    const {data} =this.state;
    return (
      <div className={styles.container}>
        <Cards data = {data}/>
        <Chart />
        <Country />
      </div>
    );
  }
}
export default App;
