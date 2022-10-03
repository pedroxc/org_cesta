import React from "react";
import { StyleSheet, View, Linking } from "react-native";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import { Container, Layer, BackButton, ButtonWarpper, Back } from "./styles";
import layut from "../../assets/layout.png";
import back from "../../assets/back.png";
import Itens from "./Components/Itens";

export default function Cesta({ topo, detalhes }) {
  const handleClick = async () => {
    await Linking.openURL("https://master--pedrocoelhoportfolio.netlify.app/");
  };
  return (
    <>
      <Layer src={layut} />

      <Container>
        <View>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <ButtonWarpper>
              <BackButton onClick={handleClick}>
                <Back src={back} />
              </BackButton>
            </ButtonWarpper>
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
