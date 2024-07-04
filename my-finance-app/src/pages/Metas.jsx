// src/pages/Metas.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';
import styled from 'styled-components';
import FormCadastroMetas from '../components/FormCadastroMetas';

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

const Metas = () => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    fetchMetas();
  }, []);

  const fetchMetas = async () => {
    try {
      const response = await api.get('/metas');
      setMetas(response.data);
    } catch (error) {
      console.error('Failed to fetch metas:', error);
    }
  };

  const formatarValorReal = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  const handleCadastroSucesso = () => {
    fetchMetas(); // Atualiza a lista de metas após o cadastro
  };

  return (
    <Container>
      <PageTitle>Metas</PageTitle>
      <FormCadastroMetas onCadastroSucesso={handleCadastroSucesso} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Prazo</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {metas.map((meta) => (
            <TableRow key={meta.id}>
              <TableCell>{meta.meta}</TableCell>
              <TableCell>{new Date(meta.prazo).toLocaleDateString()}</TableCell>
              <TableCell>{formatarValorReal(meta.valor)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Metas;
