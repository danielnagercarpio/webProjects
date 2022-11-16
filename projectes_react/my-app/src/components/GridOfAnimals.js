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
        text: "és un mamífer artiodàctil, nadiu d'Àfrica[2] i conegut sobretot perquè és la més alta de tots els animals terrestres vivents. Els mascles poden arribar a mesurar de 4,8 a 5,5 m d'altura i pesar fins a 900 kg."
      },
      {
        name: "Lèmur",
        imageURL: "https://st2.depositphotos.com/1562606/8138/i/950/depositphotos_81382658-stock-photo-lemur-wild-animals.jpg",
        text: "El lèmur de cua anellada (Lemur catta) és un primat estrepsirrí de grans dimensions. La seva llarga cua amb anells blancs i negres en fa l'espècie de lèmur més coneguda. Forma part dels lemúrids, una de les cinc famílies vivents de lèmurs. "
      },
      {
        name: "Ase",
        imageURL: "https://www.shutterstock.com/image-photo/portrait-cute-miniature-donkey-on-600w-2171170411.jpg",
        text: "L'ase, burro o ruc (Equus asinus) és un mamífer de la família dels èquids. La paraula «ruc» també s'usa per definir el mascle de l'ase, mentre que la femella és coneguda com a somera, burra o ruca. "
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
