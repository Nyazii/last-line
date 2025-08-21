# 🎴 Last Line (LL)

> **Um jogo de cartas estratégico baseado em moral, comando e posicionamento.**

## 📖 Sobre o Projeto
**Last Line (LL)** é um jogo de cartas digital em desenvolvimento com **React + Tauri + TailwindCSS**.  
O objetivo é criar uma experiência estratégica onde cada decisão importa: o gerenciamento de moral, o posicionamento das unidades e o uso correto de eventos e comandos definem quem sai vitorioso.

Este repositório contém o **cliente do jogo**, que futuramente pode evoluir para suporte a **IA local** ou **multiplayer**.

---

## 🎯 Objetivo
Cada jogador controla um **exército de 6 unidades em campo** (5 na retaguarda + 1 na ofensiva).  
Se todas as 6 forem derrotadas, o jogador perde.

---

## ⚔️ Estrutura do Campo
- **Ofensiva (1 carta):** única que pode atacar e ser atacada diretamente.  
- **Retaguarda (5 cartas):** suporte e proteção. Só sofrem dano direto em condições específicas.

---

## 🔥 Moral
- Cada unidade começa com **0 moral**.  
- A cada turno, o jogador escolhe **1 unidade para receber +1 moral**.  
- A moral desbloqueia ataques e habilidades, mas não é consumida em combate.  
- **Eventos** custam moral, retirada das unidades do jogador.

---

## 🃏 Tipos de Carta
- **Unidades** → evoluem de Recrutas → Classes → Elites.  
- **Eventos** → jogados a qualquer momento, alteram o campo.  
- **Comando** → 1 por turno, efeitos poderosos sem custo de moral.  
- **Efeitos de Batalha** → limitados a 1 por jogador, dão bônus passivos.  

---

## 🔄 Estrutura do Turno
1. **Início do turno**: comprar cartas, dar moral, ativar efeitos.  
2. **Fase de ação**: promover, jogar eventos, comandos e efeitos.  
3. **Fase de batalha**: a ofensiva ataca se tiver moral suficiente.  
4. **Fim do turno**: verificar vitória/derrota.  

---

## 🏰 Facções
Cada facção traz uma estratégia única:
- **Dragões** 🐉 – Crescimento lento, explosão de poder.  
- **Mortos-Vivos** ☠️ – Ressurreição e drenagem de moral.  
- **Humanos** ⚔️ – Versatilidade e controle de campo.  
- **Celestiais** ✨ – Cura e buffs globais.  

---

## 🛠️ Tecnologias
- [React](https://react.dev/) – interface do usuário  
- [Tauri](https://tauri.app/) – empacotamento leve para desktop  
- [TailwindCSS](https://tailwindcss.com/) – estilização rápida e responsiva  
- [TypeScript](https://www.typescriptlang.org/) – segurança e organização do código  

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js >= 18  
- Rust (para o Tauri)  
- NPM ou PNPM  

### Passos
```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build (desktop app)
npm run tauri build
```
---

## 📌 Roadmap

 - [X] Setup do projeto com React + Tauri + Tailwind
 - [ ] Estrutura inicial de cartas e tabuleiro
 - [ ] Implementação do sistema de moral
 - [ ] Mecânicas de turno
 - [ ] Primeiras facções jogáveis
 - [ ] IA local para testes
 ---

 ## 📜 Licença 

 Projeto em desenvolvimento para estudos e prototipagem. 
 Licenciamento será definido futuramente.