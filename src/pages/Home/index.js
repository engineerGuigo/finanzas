import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import firebase from "../../services/firebaseConnection";
import { format } from "date-fns";

import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import HistorialList from "../../components/HistorialList";

import { Background, Container, Nombre, Saldo, Title, List } from "./styles";

export default function Home() {
  const [historial, setHistorial] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

      await firebase
        .database()
        .ref("historial")
        .child(uid)
        .orderByChild("date")
        .equalTo(format(new Date(), "dd/MM/yy"))
        .limitToLast(10)
        .on("value", (snapshot) => {
          setHistorial([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
            };

            setHistorial((oldArray) => [...oldArray, list].reverse());
          });
        });
    }

    loadList();
  }, []);

  return (
    <Background>
      <Header />
      <Container>
        <Nombre>{user && user.nombre}</Nombre>
        <Saldo>
          R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
        </Saldo>
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
