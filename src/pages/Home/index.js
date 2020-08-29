import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";

import { Background, Container, Nombre, Saldo, Title } from "./styles";

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Background>
      <Header />
      <Container>
        <Nombre>Rodrigo</Nombre>
        <Saldo>$ 5,000.00</Saldo>
      </Container>

      <Title>Ultimas movimentaciones</Title>
    </Background>
  );
}
