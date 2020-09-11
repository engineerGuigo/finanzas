import styled from "styled-components/native";

export const Container = styled.View`
  margin-left: 15px;
  margin-bottom: 25px;
`;

export const Nombre = styled.Text`
  font-size: 20px;
  color: #fff;
  font-style: italic;
`;

export const Saldo = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  margin: 5px;
  color: #00b94a;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Area = styled.View`
  flex-direction: row;
  margin-left: 15px;
`;

export const List = styled.FlatList.attrs({
  marginHorizontal: 15,
})`
  padding-top: 15px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;
`;
