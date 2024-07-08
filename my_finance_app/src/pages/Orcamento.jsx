// src/pages/Orcamento.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';
import styled from 'styled-components';
import FormCadastroOrcamento from '../components/FormCadastroOrcamento';

const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: bold; // Adicionando negrito ao título
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

const Orcamento = () => {
  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    fetchOrcamentos();
  }, []);

  const fetchOrcamentos = async () => {
    try {
      const response = await api.get('/orcamentos');
      setOrcamentos(response.data);
    } catch (error) {
      console.error('Failed to fetch orcamentos:', error);
    }
  };

  const handleCadastroSucesso = () => {
    fetchOrcamentos(); // Atualiza a lista de orçamentos após o cadastro
  };

  return (
    <Container>
      <PageTitle>Orçamento</PageTitle>
      <FormCadastroOrcamento onCadastroSucesso={handleCadastroSucesso} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orcamentos.map((orcamento) => (
            <TableRow key={orcamento.id}>
              <TableCell>{orcamento.descricao}</TableCell>
              <TableCell>{orcamento.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Orcamento;
