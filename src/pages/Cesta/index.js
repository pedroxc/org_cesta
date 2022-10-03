import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import Itens from "./Components/Itens";
import layout from "../../assets/layout.png";
import topLayout from "../../assets/layoutTop.png";
import botLayout from "../../assets/layoutBot.png";
import { Container, Layer, TopLayout, BotLayout, WhiteBanner } from "./styles";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <TopLayout src={topLayout} />
      <BotLayout src={botLayout} />
      <Layer src={layout} />
      <WhiteBanner />

      <Container>
        <View>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
          </View>
        </View>
      </Container>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
