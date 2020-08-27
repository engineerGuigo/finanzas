import React, { useState, UseContext, useContext } from "react";
import { Platform } from "react-native";
import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "../SignIn/styles";

export default function SignIn() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(AuthContext);

  console.log(user.nome);

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/Logo.png")} />

        <AreaInput>
          <Input
            placeholder="Nombre"
            autoCorrect={false}
            autoCapitalize="none"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Contraseña"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
