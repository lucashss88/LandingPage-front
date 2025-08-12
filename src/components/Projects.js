import nt from "../assets/images/Captura de tela 2025-08-11 105423.png";
import ntPopup from "../assets/images/Captura de tela 2025-08-11 105603.png";
import ntPopup2 from "../assets/images/Captura de tela 2025-08-11 105751.png";
import ntPopup3 from "../assets/images/Captura de tela 2025-08-11 105620.png";
import ntPopup4 from "../assets/images/Captura de tela 2025-08-11 105811.png";
import ntPopup5 from "../assets/images/Captura de tela 2025-08-11 105636.png";
import gf from "../assets/images/Captura de tela 2025-04-01 152504.png";
import gymfit from "../assets/images/Captura de tela 2024-10-14 202747.png";
import gymfit2 from "../assets/images/Captura de tela 2024-10-14 202804.png";
import qs from "../assets/images/Captura de tela 2025-07-22 100401.png";
import qs2 from "../assets/images/Captura de tela 2025-08-12 102251.png";
import qs3 from "../assets/images/Captura de tela 2025-08-12 102305.png";
import qs4 from "../assets/images/Captura de tela 2025-08-12 102323.png";
import qs5 from "../assets/images/Captura de tela 2025-08-12 102342.png";
import qs6 from "../assets/images/Captura de tela 2025-08-12 102351.png";
import qs7 from "../assets/images/Captura de tela 2025-08-12 102409.png";
import qs8 from "../assets/images/Captura de tela 2025-08-12 102419.png";
import sf from "../assets/images/Captura de tela 2025-04-29 114635.png";
import studyflow from "../assets/images/Captura de tela 2025-04-29 114729.png";
import studyflow2 from "../assets/images/Captura de tela 2025-04-29 114754.png";

export const projects = [
    {
        id: 1,
        title: 'QuickStore',
        description: 'O QuickStore é uma plataforma de e-commerce full-stack completa, projetada para oferecer uma experiência de compra fluida para o cliente e um painel de gerenciamento robusto e intuitivo para o administrador da loja.\n\n' +
            'Funcionalidades principais:\n' +
            '- Vitrine de produtos com paginação, carrinho de compras reativo e checkout simulado para clientes.\n' +
            '- Painel administrativo com dashboard de KPIs, gerenciamento de produtos (CRUD) e um sistema de gestão de pedidos em estilo Kanban por status.\n' +
            '- Sistema de autenticação e autorização baseado em papéis (Cliente vs. Admin) com rotas protegidas.\n' +
            '- O back-end foi desenvolvido com os princípios da Arquitetura Hexagonal (Ports & Adapters), garantindo um código desacoplado, testável e de fácil manutenção.\n\n' +
            'Tecnologias: React, TypeScript, Vite, Node.js, Express, Sequelize, PostgreSQL, JWT, Bootstrap e React Toastify.\n',
            // 'Repositórios:\n' +
            // '- Frontend: \n' +
            // '- Backend: \n' +
            // '- Vídeo com simulação: ',
        image: qs,
        popupImages: [qs2, qs3, qs4, qs5, qs6, qs7, qs8],
        simulacao: '',
        // deployLink: 'https://studyflow.vercel.app'
    },
    {
        id: 2,
        title: 'Nutritrack',
        description: 'O NutriTrack é um sistema desenvolvido para auxiliar nutricionistas e pacientes no gerenciamento de' +
            ' dietas e informações nutricionais. Permite o cadastro de alimentos, criação de dietas personalizadas, substituição de refeições e visualização detalhada por parte dos pacientes.\n' +
            '\n' +
            'Tecnologias: React (Router, Hooks), Bootstrap, Node.js, Express, Sequelize, JWT, PostgreSQL.\n',
            // '\n' +
            // 'Repositórios:\n' +
            // '- Frontend:\n' +
            // '- Backend:\n' +
            // '- Vídeo com simulacão: ',
        image: nt,
        popupImages: [ntPopup, ntPopup2, ntPopup3, ntPopup4, ntPopup5],
        simulacao: 'https://www.loom.com/share/fc900a72af774674bcccf63eb80867fb?sid=4fcf993f-7505-42cd-8d86-559f1d3cc75e',
        // deployLink: 'https://nutri-track-front.vercel.app'
    },
    {
        id: 3,
        title: 'StudyFlow',
        description: 'O StudyFlow é uma aplicação web para organização de estudos, com foco em produtividade e acompanhamento de atividades.\n' +
            'Permite cadastro de disciplinas, controle de tempo por atividade (cronômetro), visualização gráfica do desempenho, e autenticação de usuários.\n' +
            '\n' +
            'Tecnologias: React (Router, Hooks), Bootstrap 5.3, Node.js, Express, JWT, Sequelize (SQLite).\n',
            // '\n' +
            // 'Repositórios:\n' +
            // '- Frontend:\n' +
            // '- Backend:\n' +
            // '- Vídeo com simulacão: ',
        image: sf,
        popupImages: [studyflow, studyflow2],
        simulacao: ' https://www.loom.com/share/9429088703f246308c1618b4763fc694?sid=176aeba1-0db9-44fb-bde3-c61835bf08d2',
        // deployLink: 'https://studyflow.vercel.app'
    },
    {
        id: 4,
        title: 'FitTrack',
        description: 'O FitTrack é uma plataforma web/mobile para organização de treinos e atividades físicas, com criação de treinos personalizados e edição de perfil.\n' +
            '\n' +
            'Tecnologias: React (Router, Hooks), Tailwind CSS, Node.js, Express, Sequelize, JWT, PostgreSQL.\n',
            // '\n' +
            // 'Repositórios:\n' +
            // '- Frontend:\n' +
            // '- Backend:\n' +
            // '- Vídeo com simulacão: ',
        image: gf,
        popupImages: [gymfit, gymfit2],
        simulacao: 'https://www.loom.com/share/a875df19bae04ad8a7ea37159a76c68a',
        // deployLink: 'https://gym-prive-front.vercel.app'
    },
];