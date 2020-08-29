import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Container, Tipo, IconView, TipoText, ValorText } from "./styles";

export default function HistorialList({ data }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <Icon
            name={data.tipo === "gastos" ? "arrow-down" : "arrow-up"}
            color="#FFF"
            size={20}
          />
          <TipoText>{data.tipo}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>$ {data.valor}</ValorText>
    </Container>
  );
}
