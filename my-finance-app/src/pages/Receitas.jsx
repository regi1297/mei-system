// src/pages/Receita.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';
import styled from 'styled-components';
import FormCadastroReceita from '../components/FormCadastroReceita';

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

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetchReceitas();
  }, []);

  const fetchReceitas = async () => {
    try {
      const response = await api.get('/receitas');
      setReceitas(response.data);
    } catch (error) {
      console.error('Failed to fetch receitas:', error);
    }
  };

  const handleCadastroSucesso = () => {
    fetchReceitas(); // Atualiza a lista de receitas após o cadastro
  };

  const formatarValorReal = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  const ultimasCincoReceitas = receitas.slice(-5);

  const handleDeleteReceita = async (id) => {
    try {
      await api.delete(`/receitas/${id}`);
      fetchReceitas(); // Atualiza a lista após a exclusão
    } catch (error) {
      console.error('Failed to delete receita:', error);
    }
  };

  return (
    <Container>
      <PageTitle>Receitas</PageTitle>
      <FormCadastroReceita onCadastroSucesso={handleCadastroSucesso} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Data de Recebimento</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ultimasCincoReceitas.map((receita) => (
            <TableRow key={receita.id}>
              <TableCell>{receita.descricao}</TableCell>
              <TableCell>{new Date(receita.data_recebimento).toLocaleDateString()}</TableCell>
              <TableCell>{formatarValorReal(receita.valor)}</TableCell>
              <TableCell>{receita.categoria}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteReceita(receita.id)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Receitas;
