// src/components/FormCadastroDivida.jsx
import React, { useState } from 'react';
import api from '../api';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 20px auto;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  justify-self: center;
  width: fit-content;
`;

const FormCadastroDivida = ({ onCadastroSucesso }) => {
  const [credor, setCredor] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [valorParcela, setValorParcela] = useState('');
  const [numParcelas, setNumParcelas] = useState('');
  const [juros, setJuros] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const valorTotal = parseFloat(valorParcela) * parseInt(numParcelas) * (1 + parseFloat(juros) / 100);

    try {
      const response = await api.post('/dividas', {
        credor,
        data_inicial: dataInicial,
        valor_parcela: parseFloat(valorParcela),
        num_parcelas: parseInt(numParcelas),
        juros: parseFloat(juros),
        motivo,
        valor_total: valorTotal
      });

      console.log('Cadastro de dívida realizado com sucesso:', response.data);
      onCadastroSucesso(); // Atualiza a lista de dívidas após o cadastro
      limparFormulario(); // Limpa o formulário após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar dívida:', error);
    }
  };

  const limparFormulario = () => {
    setCredor('');
    setDataInicial('');
    setValorParcela('');
    setNumParcelas('');
    setJuros('');
    setMotivo('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Credor:</Label>
        <Input type="text" value={credor} onChange={(e) => setCredor(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Data Inicial:</Label>
        <Input type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Valor da Parcela:</Label>
        <Input type="number" value={valorParcela} onChange={(e) => setValorParcela(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Número de Parcelas:</Label>
        <Input type="number" value={numParcelas} onChange={(e) => setNumParcelas(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Juros (% ao mês):</Label>
        <Input type="number" value={juros} onChange={(e) => setJuros(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Motivo:</Label>
        <Input type="text" value={motivo} onChange={(e) => setMotivo(e.target.value)} />
      </FormGroup>
      <Button type="submit">Cadastrar Dívida</Button>
    </Form>
  );
};

export default FormCadastroDivida;
