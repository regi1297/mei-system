// src/components/FormCadastroAgenda.jsx
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

const FormCadastroAgenda = ({ onCadastroSucesso }) => {
  const [evento, setEvento] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/agenda', {
        evento,
        data,
      });
      console.log('Cadastro na agenda realizado com sucesso:', response.data);
      onCadastroSucesso(); // Função passada por props para atualizar a lista após o cadastro
      // Limpar campos do formulário após o cadastro
      setEvento('');
      setData('');
    } catch (error) {
      console.error('Erro ao cadastrar na agenda:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Evento:</Label>
        <Input type="text" value={evento} onChange={(e) => setEvento(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Data:</Label>
        <Input type="datetime-local" value={data} onChange={(e) => setData(e.target.value)} required />
      </FormGroup>
      <Button type="submit">Agendar Evento</Button>
    </Form>
  );
};

export default FormCadastroAgenda;
