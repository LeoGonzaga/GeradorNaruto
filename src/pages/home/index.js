import React, { useState } from "react";
import BG from "./naruto.png";
import Logo from "./logo.png";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: "black";
`;

const Image = styled.img`
  width: 50%;
`;

const FormContainer = styled.form`
  background-color: #100f0f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 480px;
  height: 500px;
  border-radius: 8px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  padding: 5px;
`;
const Text = styled.span`
  color: #fff;
  font-size: 16px;
  padding: 5px;
`;

const Input = styled.input`
  padding: 10px;
  background-color: #fafafa;
  outline: none;
  width: 70%;
  margin-bottom: 10px;
  border-radius: 4px;
`;
const Button = styled.button`
  outline: none;
  width: 75%;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 12px;
  background-color: #ff9834;
  border: 1px solid #ff9834;
  color: #fff;
`;

function Home() {
  const [numberCard, setNumberCard] = useState("");
  const [numberCode, setNumberCode] = useState("");
  const [dateValidate, setDateValidate] = useState("");
  const aldeias = [
    "Vila Oculta da Folha",
    " Vila Oculta da Areia",
    "Vila Oculta da Nuvem",
    "Vila Oculta da Névoa",
    "Vila Oculta da Pedra",
  ];

  const cleitinho = (e) => {
    try {
      e.preventDefault();
      console.log(numberCard, numberCode, dateValidate);
      if (
        numberCard.length < 1 ||
        numberCode.length < 1 ||
        dateValidate.length < 1
      ) {
        alert("Ops! Digite seus dados corretamente.");
        return;
      }

      let a = Math.floor(Math.random() * (5 - 1)) + 1;
      alert(aldeias[a]);
      console.log(a);
    } catch (e) {
      console.log("Error" + e);
    }
  };
  return (
    //   Cria um painel que abrange toda a tela
    <Container>
      {/* Monta um painel com 50% do tamanho da tela */}
      <Wrapper>
        <FormContainer onSubmit={cleitinho}>
          <Image src={Logo} />

          <InputContainer>
            <Title>DESCUBRA DE QUAL ALDEIRA NINJA VOCÊ É:</Title>

            <Text>Digite o número do seu cartão</Text>
            <Input
              required
              value={numberCard}
              onChange={(e) => {
                setNumberCard(e.target.value);
                console.log(e.target.value);
              }}
            />
            <Text>Digite o número do código de segurança</Text>
            <Input
              required
              value={numberCode}
              onChange={(e) => {
                setNumberCode(e.target.value);
                console.log(e.target.value);
              }}
            />
            <Text>Data de vencimento</Text>
            <Input
              required
              value={dateValidate}
              type="date"
              onChange={(e) => {
                console.log(e.target.value);
                setDateValidate(e.target.value);
              }}
            />
            <Button>Concluir</Button>
          </InputContainer>
        </FormContainer>
      </Wrapper>
      {/* Monta um painel com 50% do tamanho da tela */}
      <Wrapper>
        <Image src={BG} />
      </Wrapper>
    </Container>
  );
}

export default Home;
