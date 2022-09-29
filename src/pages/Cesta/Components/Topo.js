import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import Texto from "../../../Components/Texte";
import topo from "../../../assets/topo.png";

const width = Dimensions.get("screen").width;

const Topo = ({ titulo }) => {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}> {titulo}</Texto>
    </>
  );
};

export default Topo;

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 756) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    padding: 16,
    fontWeight: "bold",
  },
});
