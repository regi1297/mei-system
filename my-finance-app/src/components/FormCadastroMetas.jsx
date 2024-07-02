// src/components/FormCadastroMetas.jsx
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

const FormCadastroMetas = ({ onCadastroSucesso }) => {
  const [descricao, setDescricao] = useState('');
  const [prazo, setPrazo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/metas', {
        descricao,
        prazo,
      });
      console.log('Cadastro de meta realizado com sucesso:', response.data);
      onCadastroSucesso(); // Função passada por props para atualizar a lista após o cadastro
      // Limpar campos do formulário após o cadastro
      setDescricao('');
      setPrazo('');
    } catch (error) {
      console.error('Erro ao cadastrar meta:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Descrição:</Label>
        <Input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Prazo:</Label>
        <Input type="date" value={prazo} onChange={(e) => setPrazo(e.target.value)} required />
      </FormGroup>
      <Button type="submit">Cadastrar Meta</Button>
    </Form>
  );
};

export default FormCadastroMetas;
