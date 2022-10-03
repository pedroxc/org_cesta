import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../Components/Texto";

const Detalhes = ({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) => {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descrição}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
      <TouchableOpacity style={estilos.botao}>
        <Texto style={estilos.textobotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descrição: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textobotao: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
