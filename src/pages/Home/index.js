import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import HistorialList from "../../components/HistorialList";

import { Background, Container, Nombre, Saldo, Title, List } from "./styles";

export default function Home() {
  const [historial, setHistorial] = useState([
    { key: "1", tipo: "ingreso", valor: 1200 },
    { key: "2", tipo: "gastos", valor: 200 },
    { key: "3", tipo: "ingreso", valor: 32 },
    { key: "4", tipo: "ingreso", valor: 67.82 },
  ]);
  const { user, signOut } = useContext(AuthContext);

  return (
    <Background>
      <Header />
      <Container>
        <Nombre>Rodrigo</Nombre>
        <Saldo>$ 5,000.00</Saldo>
      </Container>

      <Title>Ultimas movimentaciones</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historial}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <HistorialList data={item} />}
      />
    </Background>
  );
}
