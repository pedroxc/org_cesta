import React from "react";
import { StyleSheet, View } from "react-native";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import { Container, Layer } from "./styles";
import layut from "../../assets/layout.png";

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Layer src={layut} />

      <Container>
        <View>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
          </View>
        </View>
      </Container>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
});
