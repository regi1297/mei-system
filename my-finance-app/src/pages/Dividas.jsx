// src/pages/Dividas.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';
import styled from 'styled-components';
import FormCadastroDivida from '../components/FormCadastroDivida';

const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  background: '#f8f9fa',
  text: '#343a40',
  white: '#fff',
};

const PageTitle = styled.h1`
  margin-bottom: 20px;
  color: ${colors.text};
  font-weight: bold;
`;

const Container = styled.div`
  padding: 20px;
  background-color: ${colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: ${colors.primary};
  color: ${colors.white};
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${colors.background};
  }
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid ${colors.secondary};
`;

const Button = styled.button`
  padding: 10px 20px;
  color: ${colors.white};
  background-color: ${colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(${colors.primary}, 10%);
  }
`;

const Dividas = () => {
  const [dividas, setDividas] = useState([]);

  useEffect(() => {
    fetchDividas();
  }, []);

  const fetchDividas = async () => {
    try {
      const response = await api.get('/dividas');
      setDividas(response.data);
    } catch (error) {
      console.error('Failed to fetch dividas:', error);
    }
  };

  const handleCadastroSucesso = () => {
    fetchDividas(); // Atualiza a lista de dívidas após o cadastro
  };

  const formatarValorReal = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  const ultimasCincoDividas = dividas.slice(-5);

  return (
    <Container>
      <PageTitle>Dívidas</PageTitle>
      <FormCadastroDivida onCadastroSucesso={handleCadastroSucesso} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Credor</TableCell>
            <TableCell>Data Inicial</TableCell>
            <TableCell>Valor Parcela</TableCell>
            <TableCell>Número de Parcelas</TableCell>
            <TableCell>Juros</TableCell>
            <TableCell>Valor Total</TableCell>
            <TableCell>Motivo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ultimasCincoDividas.map((divida) => (
            <TableRow key={divida.id}>
              <TableCell>{divida.credor}</TableCell>
              <TableCell>{new Date(divida.data_inicial).toLocaleDateString()}</TableCell>
              <TableCell>{formatarValorReal(divida.valor_parcela)}</TableCell>
              <TableCell>{divida.num_parcelas}</TableCell>
              <TableCell>{divida.juros}% ao mês</TableCell>
              <TableCell>{formatarValorReal(divida.valor_total)}</TableCell>
              <TableCell>{divida.motivo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dividas;
