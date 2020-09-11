import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";

import { AuthContext } from "../../contexts/auth";

import {
  Container,
  Nombre,
  NewLink,
  NewText,
  Logout,
  LogoutText,
} from "./styles";

export default function Profile() {
  const navigation = useNavigation();

  const { user, signOut } = useContext(AuthContext);

  return (
    <LinearGradient
      colors={["#464769", "#1B1A1F"]}
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      <Container>
        <Header />
        <Nombre>{user && user.nombre} </Nombre>
        <NewLink onPress={() => navigation.navigate("Registrar")}>
          <NewText>Registrar gastos</NewText>
        </NewLink>

        <Logout onPress={() => signOut()}>
          <LogoutText>Salir</LogoutText>
        </Logout>
      </Container>
    </LinearGradient>
  );
}
