import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Texto from "../../../Components/Texte";
import topo from "../../../assets/topo.png";
import { Imagem } from "./styles";

const Topo = ({ titulo }) => {
  return (
    <>
      <Imagem src={topo} />
      <Texto style={estilos.titulo}> {titulo}</Texto>
    </>
  );
};

export default Topo;

const estilos = StyleSheet.create({
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
