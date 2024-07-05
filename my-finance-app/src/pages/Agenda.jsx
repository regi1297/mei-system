// src/pages/Agenda.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';
import styled from 'styled-components';
import FormCadastroAgenda from '../components/FormCadastroAgenda';

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

const Button = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const Agenda = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const response = await api.get('/agenda');
      setEventos(response.data);
    } catch (error) {
      console.error('Failed to fetch eventos:', error);
    }
  };

  const handleCadastroSucesso = () => {
    fetchEventos(); // Atualiza a lista de eventos após o cadastro
  };

  const handleConcluirEvento = async (id) => {
    try {
      await api.patch(`/agenda/${id}/concluir`);
      setEventos(eventos.filter(evento => evento.id !== id));
    } catch (error) {
      console.error('Failed to mark evento as completed:', error);
    }
  };

  return (
    <Container>
      <PageTitle>Agenda</PageTitle>
      <FormCadastroAgenda onCadastroSucesso={handleCadastroSucesso} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Evento</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventos.filter(evento => !evento.concluido).map((evento) => (
            <TableRow key={evento.id}>
              <TableCell>{evento.evento}</TableCell>
              <TableCell>{new Date(evento.data).toLocaleString()}</TableCell>
              <TableCell>
                <Button onClick={() => handleConcluirEvento(evento.id)}>Concluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Agenda;
