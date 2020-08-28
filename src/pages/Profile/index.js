import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

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
    <Container>
      <Nombre>{user && user.nombre} </Nombre>
      <NewLink onPress={() => navigation.navigate("Registrar")}>
        <NewText>Registrar gastos</NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText>Salir</LogoutText>
      </Logout>
    </Container>
  );
}
