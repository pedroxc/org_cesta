import React from "react";
import { StyleSheet, View } from "react-native";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
});
