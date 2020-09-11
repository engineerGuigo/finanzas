import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/auth";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import Picker from "../../components/Picker";

export default function New() {
  const navigation = useNavigation();

  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(null);
  const { user: usuario } = useContext(AuthContext);

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert("Favor de llenar los formularios!");
      return;
    }

    Alert.alert(
      "Confirmando datos",
      `Tipo ${tipo} - Valor: ${parseFloat(valor)} `,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => handleAdd(),
        },
      ]
    );
  }

  async function handleAdd() {
    let uid = usuario.uid;

    let key = await firebase.database().ref("historial").child(uid).push().key;
    await firebase
      .database()
      .ref("historial")
      .child(uid)
      .child(key)
      .set({
        tipo: tipo,
        valor: parseFloat(valor),
        date: format(new Date(), "dd/MM/yyyy"),
      });

    //Actualizar nuestro saldo
    let user = firebase.database().ref("users").child(uid);
    await user.once("value").then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === "gastos"
        ? (saldo -= parseFloat(valor))
        : (saldo += parseFloat(valor));

      user.child("saldo").set(saldo);
    });
    Keyboard.dismiss();
    setValor("");
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#464769", "#1B1A1F"]}
        style={{
          flex: 1,
          paddingTop: 50,
        }}
      >
        <Header />

        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Valor deseado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(text) => setValor(text)}
          />

          <Picker onChange={setTipo} />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
