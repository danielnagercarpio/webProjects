import { React, useState, useRef } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import { Marker } from "react-native-maps";
import { Audio } from "expo-av";

export default function App() {
  const [sound, setSound] = useState(0);
  const [locationText, setLocationText] = useState("");
  const [locationStyle, setLocationStyle] = useState({
    display: 'none'
  });

  const sounds = [
    require('./assets/0.wav')
  ]

  // funció asyncrona que reprodueix só
  async function playSound(position) {
    const { sound } = await Audio.Sound.createAsync(sounds[position]);
    setSound(sound);
    await sound.playAsync();
  }

  // Funció que crida a la asyncrona
  const pressTouch = (index) => {
    playSound(index)
  }
  const coordenades = [
    // Pont del llobregat
    {
      latitude: 41.66563120272095,
      longitude: 1.8576208846557607,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
    },
    // Monument Anselm Clavé
    {
      latitude: 41.66695837059453,
      longitude: 1.8620732460327178,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
    },
    // Castell de Sant vicens de castellet
    {
      latitude: 41.66441797219958,
      longitude: 1.8508710460327185,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
    },
    // Ajuntament de sant vicens de castellet
    {
      latitude: 41.66620085818458,
      longitude: 1.864103330688479,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
    },
    // Sant Jaume de vallhonesta
    {
      latitude: 41.67806881910427,
      longitude: 1.9027131613769581,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
    },
   // Sant Pere de vallhonesta
   {
    latitude: 41.67434775461053,
    longitude: 1.8877531846557605,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421
  } 
  ];
  const mapRef = useRef(null);
  const [region, setRegion] = useState(coordenades[0]);
  const locationTextStyles = {
    zIndex: 1,
    marginTop: "50%",
    padding: 10,
    fontSize: 20,
    backgroundColor: "lightblue"
  }
  const goToPontLlobregat = () => {
    pressTouch(0);
    setLocationStyle(locationTextStyles);
    setLocationText("Pont del Llobregat");
    mapRef.current.animateToRegion(coordenades[0], 500);
  };
  const goToAnselmClave = () => {
    pressTouch(0);
    setLocationStyle(locationTextStyles);
    setLocationText("Monument Anselm Clavé");
    mapRef.current.animateToRegion(coordenades[1], 500);
  };
  const goToCastell = () => {
    pressTouch(0);
    setLocationStyle(locationTextStyles);
    setLocationText("Castell de Sant Viçens");
    mapRef.current.animateToRegion(coordenades[2], 500);
  };
  const goToAjuntament = () => {
    pressTouch(0);
    setLocationStyle(locationTextStyles);
    setLocationText("Ajuntament de Sant Viçens");
    mapRef.current.animateToRegion(coordenades[3], 500);
  };
  const goToSantJaume = () => {
    pressTouch(0);
    setLocationStyle(locationTextStyles);
    setLocationText("Sant Jaume de Vallhonesta");
    mapRef.current.animateToRegion(coordenades[4], 500);
  };
  const goToSantPere = () => {
    pressTouch(0);
    setLocationStyle(locationTextStyles);
    setLocationText("Sant Pere de Vallhonesta");
    mapRef.current.animateToRegion(coordenades[5], 500);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logoStyle}/>
      <View style={styles.imageContainer}>
        <TouchableHighlight onPress={() => goToCastell()} >
          <Image source={require('./assets/castell.png')} style={styles.imageStyle} title="Go to Castell" />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => goToPontLlobregat()} >
          <Image source={require('./assets/pontllob.png')} style={styles.imageStyle} title="Go to Castell" />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => goToAnselmClave()} >
          <Image source={require('./assets/aclave.png')} style={styles.imageStyle} title="Go to Castell" />
        </TouchableHighlight>
      </View>
      <View style={styles.imageContainer}>
        <TouchableHighlight onPress={() => goToAjuntament()} >
          <Image source={require('./assets/ajuntament.png')} style={styles.imageStyle} title="Go to Castell" />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => goToSantJaume()} >
          <Image source={require('./assets/santjaume.png')} style={styles.imageStyle} title="Go to Castell" />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => goToSantPere()} >
          <Image source={require('./assets/santpere.png')} style={styles.imageStyle} title="Go to Castell" />
        </TouchableHighlight>
      </View>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={coordenades[0]}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={coordenades[0]} pinColor="green" />
        <Marker coordinate={coordenades[1]} pinColor="blue"/>
        <Marker coordinate={coordenades[2]} pinColor="purple"/>
        <Marker coordinate={coordenades[3]} pinColor="orange"/>
        <Marker coordinate={coordenades[4]} pinColor="brown"/>
        <Marker coordinate={coordenades[5]} />
      </MapView>
      <Text style={locationStyle}>{locationText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    zIndex: 0
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
  locationText: {
    zIndex: 1,
    marginTop: "50%",
    padding: 10,
    fontSize: 20,
    backgroundColor: "lightblue"
  },
  imageContainer: {
    flexDirection: 'row',
    zIndex: 1,
    backgroundColor: '#236f8e',
    padding: 10
  },
  imageStyle: {
    width: 110,
    height: 110
  },
  logoStyle: {
    marginTop: 50,
    width: "100%",
    height: 70,
    zIndex: 1,
    resizeMode: 'stretch'
  }
});