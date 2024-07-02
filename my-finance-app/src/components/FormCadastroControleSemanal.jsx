// src/components/FormCadastroControleSemanal.jsx
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

const FormCadastroControleSemanal = ({ onCadastroSucesso }) => {
  const [atividade, setAtividade] = useState('');
  const [horas, setHoras] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/controle-semanal', {
        atividade,
        horas,
      });
      console.log('Cadastro no controle semanal realizado com sucesso:', response.data);
      onCadastroSucesso(); // Função passada por props para atualizar a lista após o cadastro
      // Limpar campos do formulário após o cadastro
      setAtividade('');
      setHoras('');
    } catch (error) {
      console.error('Erro ao cadastrar no controle semanal:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Atividade:</Label>
        <Input type="text" value={atividade} onChange={(e) => setAtividade(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Horas:</Label>
        <Input type="number" value={horas} onChange={(e) => setHoras(e.target.value)} required />
      </FormGroup>
      <Button type="submit">Cadastrar Atividade Semanal</Button>
    </Form>
  );
};

export default FormCadastroControleSemanal;
