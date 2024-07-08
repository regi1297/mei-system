// src/pages/ControleSemanal.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';
import styled from 'styled-components';
import FormCadastroControleSemanal from '../components/FormCadastroControleSemanal';

const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: bold;
  color: #343a40;
`;

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const ControleSemanal = () => {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    fetchAtividades();
  }, []);

  const fetchAtividades = async () => {
    try {
      const response = await api.get('/controle-semanal');
      setAtividades(response.data);
    } catch (error) {
      console.error('Failed to fetch atividades:', error);
    }
  };

  const handleCadastroSucesso = () => {
    fetchAtividades(); // Atualiza a lista de atividades após o cadastro
  };

  return (
    <Container>
      <PageTitle>Controle Semanal</PageTitle>
      <FormCadastroControleSemanal onCadastroSucesso={handleCadastroSucesso} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Atividade</TableCell>
            <TableCell>Horas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {atividades.map((atividade) => (
            <TableRow key={atividade.id}>
              <TableCell>{atividade.atividade}</TableCell>
              <TableCell>{atividade.horas} horas</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ControleSemanal;
