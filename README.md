🍽️ Sistema Web para Gestão de Restaurantes
📌 Visão Geral

Este projeto consiste no desenvolvimento de um sistema web para gestão de restaurantes, permitindo o cadastro e gerenciamento de restaurantes, cardápios, horários de funcionamento, pedidos e relatórios de vendas.

A aplicação utiliza uma API REST desenvolvida do zero, com separação entre backend e frontend, visando organização, escalabilidade e facilidade de manutenção.

🛠️ Tecnologias Utilizadas
Backend

Node.js

Express.js

API REST

MySQL (Banco de Dados Relacional)

Frontend

React

🏗️ Arquitetura do Sistema

O sistema é estruturado em três camadas principais:

Frontend (Web)
Interface do usuário desenvolvida em React, responsável por consumir a API e exibir os dados.

Backend (API REST)
Desenvolvido em Node.js com Express, responsável pelas regras de negócio, autenticação, validação de dados e integração com o banco de dados.

Banco de Dados (MySQL)
Responsável pelo armazenamento persistente das informações do sistema.

🔐 Funcionalidades
🔑 Autenticação

Login de usuário

Criação de conta

Recuperação de senha

Proteção de rotas da API

🏪 Cadastro de Restaurantes e Cardápio (CRUD)

Cadastro de restaurantes

Edição e remoção de restaurantes

Cadastro de menu/cardápio

Atualização e exclusão de itens do cardápio

As operações seguem o padrão CRUD (Create, Read, Update, Delete).

⏰ Cadastro de Horário de Funcionamento

Definição de dias da semana

Horário de abertura

Horário de fechamento

🧾 Cadastro de Pedidos

Criação de pedidos

Associação de itens do cardápio

Registro de valores

Controle de status do pedido

📊 Relatório de Vendas

Total de vendas por período

Quantidade de pedidos

Valores arrecadados

Esses relatórios auxiliam na análise de desempenho e controle financeiro.

🎯 Objetivo do Projeto

O objetivo deste projeto é aplicar, na prática, conceitos de:

Desenvolvimento Web

APIs REST

Node.js com Express

Bancos de Dados Relacionais

React

Simulando um sistema real de gestão de restaurantes.