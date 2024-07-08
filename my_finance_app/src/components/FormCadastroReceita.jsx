import React, { useState, useEffect } from 'react';
import api from '../api';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 20px auto;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  justify-self: center;
  width: fit-content;
`;

const FormCadastroReceita = ({ onCadastroSucesso }) => {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState('');

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      const response = await api.get('/categorias');
      setCategorias(response.data);
    } catch (error) {
      console.error('Failed to fetch categorias:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Verifica se a categoria selecionada é existente ou nova
      let categoriaId;
      if (categorias.find(c => c.nome === novaCategoria)) {
        categoriaId = categorias.find(c => c.nome === novaCategoria).id;
      } else {
        const response = await api.post('/categorias', { nome: novaCategoria });
        categoriaId = response.data.id;
      }

      // Cria a receita utilizando a categoria selecionada ou criada
      const response = await api.post('/receitas', {
        descricao,
        data,
        valor,
        categoriaId
      });

      console.log('Cadastro de receita realizado com sucesso:', response.data);
      onCadastroSucesso(); // Atualiza a lista de receitas após o cadastro
      limparFormulario(); // Limpa o formulário após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar receita:', error);
    }
  };

  const limparFormulario = () => {
    setDescricao('');
    setData('');
    setValor('');
    setNovaCategoria('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Descrição:</Label>
        <Input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Data:</Label>
        <Input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Valor:</Label>
        <Input type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Categoria:</Label>
        <Select value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} required>
          <option value="">Selecione ou digite uma nova categoria</option>
          {categorias.map(categoria => (
            <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option>
          ))}
        </Select>
      </FormGroup>
      {novaCategoria && !categorias.some(c => c.nome === novaCategoria) && (
        <FormGroup>
          <Input type="text" placeholder="Nova categoria" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} required />
        </FormGroup>
      )}
      <Button type="submit">Cadastrar Receita</Button>
    </Form>
  );
};

export default FormCadastroReceita;
