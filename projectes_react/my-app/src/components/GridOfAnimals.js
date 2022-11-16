import React from 'react';
import AnimalContainer from './AnimalContainer.js';
import '../styles/GridOfAnimals.css';

class GridofAnimals extends React.Component {
  render(){
    const diesSetmana = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];
    const result = [];
    const data = [
      {
        name: "Girafa",
        imageURL: "https://t3.ftcdn.net/jpg/00/99/89/92/360_F_99899269_is9LgBQsPVPIsYQ08fzkJ6c6yHRnNPqw.jpg",
        text: "Això és una girafa"
      },
      {
        name: "Lemur",
        imageURL: "https://st2.depositphotos.com/1562606/8138/i/950/depositphotos_81382658-stock-photo-lemur-wild-animals.jpg",
        text: "Això és un Lemur"
      }
    ]

    for (let i = 0; i < data.length; i++) {
        result.push(<AnimalContainer key={data[i].name} name={data[i].name} imageURL={data[i].imageURL} text={data[i].text}/>)
    }

    return (
      <div>{result}</div>
    );
  }
}
export default GridofAnimals;
