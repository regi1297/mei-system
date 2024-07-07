// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Dividas from './pages/Dividas';
import Orcamento from './pages/Orcamento';
import ControleSemanal from './pages/ControleSemanal';
import Metas from './pages/Metas';
import Agenda from './pages/Agenda';
import Receitas from './pages/Receitas';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/receitas">Receitas</Link></li>
          <li><Link to="/dividas">Despesas</Link></li>
          <li><Link to="/metas">Metas</Link></li>
          <li><Link to="/orcamento">Orçamento</Link></li>
          <li><Link to="/controle-semanal">Controle Semanal</Link></li>
          <li><Link to="/agenda">Agenda</Link></li>
        </ul>
      </nav>
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/dividas" element={<Dividas />} />
          <Route path="/metas" element={<Metas />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/controle-semanal" element={<ControleSemanal />} />
          <Route path="/agenda" element={<Agenda />} />

        </Routes>
      </Container>
    </Router>
  );
};

export default App;
