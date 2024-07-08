// src/components/FormCadastroOrcamento.jsx
import React, { useState } from 'react';
import api from '../api';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 400px;
  margin: 20px auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
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
`;

const FormCadastroOrcamento = ({ onCadastroSucesso }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/orcamentos', {
        descricao,
        valor,
      });
      console.log('Cadastro de orçamento realizado com sucesso:', response.data);
      onCadastroSucesso(); // Função passada por props para atualizar a lista de orçamentos após o cadastro
      // Limpar campos do formulário após o cadastro
      setDescricao('');
      setValor('');
    } catch (error) {
      console.error('Erro ao cadastrar orçamento:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Descrição:</Label>
        <Input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Valor:</Label>
        <Input type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
      </FormGroup>
      <Button type="submit">Cadastrar Orçamento</Button>
    </Form>
  );
};

export default FormCadastroOrcamento;
