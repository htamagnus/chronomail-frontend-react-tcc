[typescript_BAGDE]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge
[nestjs__BADGE]: https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge
[swagger_BADGE]: https://img.shields.io/badge/swagger-85EA2D?logo=swagger&logoColor=black&style=for-the-badge
[mysql_BADGE]: https://img.shields.io/badge/mysql-3178C6?logo=mysql&logoColor=white&style=for-the-badge
[react_BADGE]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge
[styled_BADGE]: https://img.shields.io/badge/styledcomponents-C567B2?logo=styledcomponents&logoColor=black&style=for-the-badge
[mailer_BADGE]: https://img.shields.io/badge/MailerSend-00b0f0?logo=mailersend&logoColor=white&style=for-the-badge
[railway_BADGE]: https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=white&style=for-the-badge
[vercel_BADGE]: https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge
[postman_BADGE]: https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge
[vscode_BADGE]: https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white&style=for-the-badge

<h1 align="center" style="font-weight: bold;">ChronoMail: Agendador de E-mails Automatizados com Cron Job - Front end 🕰️📧</h1>

<div align="center">
  
<img src="https://images2.imgbox.com/8a/ad/1rHmtTjs_o.png">

</br>
</br>

[Link]() para acessar o projeto

</br>

</div>

<div align="center">
  
![nest][nestjs__BADGE]
![swagger][swagger_BADGE]
![typescript][typescript_BAGDE]
![mysql][mysql_BADGE]
![react][react_BADGE]
![styled][styled_BADGE]
![mailer][mailer_BADGE]
![postman][postman_BADGE]
![ralway][railway_BADGE]
![vercel][vercel_BADGE]
![vscode][vscode_BADGE]

</div>

<p align="center">
  <a href="#descricao">Descrição 📄</a><br>
  <a href="#requisitos">Requisitos Funcionais e Requisitos Não Funcionais 📋</a><br>
  <a href="#diagrama">Diagrama de Caso de Uso 🖥️</a><br>
  <a href="#diagrama_classes">Diagrama de Classes 📚</a><br>
  <a href="#tecnologias">Tecnologias Utilizadas 💻</a><br>
  <a href="#pre-requisitos">Pré-requisitos 🛠️</a><br>
  <a href="#back-end">Configuração Back-end ⚙️</a><br>
  <a href="#contribuicao">Contribuições 🤝</a>
</p>

<h2 id="descricao"> Descrição 📄</h2>
Este é um projeto feito para o meu tcc, onde construi uma solução <strong>full stack</strong> que permite aos usuários agendar o envio de e-mails personalizados em uma data específica. A interface de usuário (UI) em <strong>React</strong> permite a inserção de dados como nome completo, e-mail, data de envio, assunto e mensagem. O back-end, utilizando <strong>NestJS</strong>, processará essas requisições
e armazenará os dados em um banco de dados <strong>MySQL</strong>. Um cron job programado realizará o envio dos e-mails na data especificada, utilizando a API do <strong>MailerSend</strong>. O nome <strong>ChronoMail</strong> conjuga o conceito de tempo (Chrono), com o foco da aplicação (Mail), além de especificar o método de automatização (Cron Job).

---

<h2 id="requisitos"> Requisitos Funcionais e Requisitos Não Funcionais 📋 </h2>

### Requisitos Funcionais (RF) ✅:
**RF1: Agendamento de E-mails:**

Os usuários devem poder agendar e-mails fornecendo as seguintes informações: nome, email do destinatário, data de envio, assunto e mensagem

**RF2: Envio Automático de E-mails:**

O sistema deve enviar automaticamente os e-mails na data e hora especificadas pelos usuários, por meio da integração com o SendGrid.

**RF3: Confirmação de Agendamento:**

Os usuários devem receber uma confirmação após agendarem um e-mail, indicando que o agendamento foi bem-sucedido.


### Requisitos Não Funcionais (RNF) ❌:
**RNF1: Usabilidade:**

A interface de usuário deve ser intuitiva, permitindo o agendamento de e-mails de maneira simples e direta.

**RNF2: Performance:**

O sistema deve processar rapidamente o agendamento e garantir o envio de e-mails no tempo agendado, sem atrasos.

**RNF3: Segurança:**

As informações do usuário e o conteúdo do e-mail devem ser protegidos para garantir confidencialidade e integridade. Isso inclui a criptografia de dados sensíveis em trânsito e em repouso.

**RNF4: Escalabilidade:**

O sistema deve ser capaz de lidar com um aumento no volume de e-mails agendados sem perder desempenho.

**RNF5: Disponibilidade:**

O sistema deve estar disponível constantemente, permitindo que os usuários agendem e-mails a qualquer hora.

**RNF6: Conformidade:**

O sistema deve estar em conformidade com regulamentos de proteção de dados e privacidade, como o GDPR ou a LGPD.

---

<h2 id="diagrama"> Diagrama de Caso de Uso 🖥️ </h2>
<img src="https://images2.imgbox.com/c5/2f/8w9udvw4_o.png">


**Descrição:** O usuário preenche e submete o formulário de agendamento de e-mails 
com os dados do destinatário, data de envio, assunto e corpo do e-mail. O sistema 
valida as informações e as armazena no banco de dados para envio futuro.

**Ator Primário:** Usuário

**Fluxo Principal:**
1. Usuário seleciona a opção para agendar um novo e-mail.
2. Usuário preenche o formulário com todos os detalhes necessários.
3. Sistema valida as informações.
4. Sistema salva o agendamento no banco de dados.
5. Sistema mostra uma mensagem de sucesso.

**Fluxo Alternativo:** Caso alguma informação esteja inválida, o sistema alerta o 
usuário e solicita a correção dos dados.

**Pós-condições:** E-mail é agendado para ser enviado automaticamente na data e 
hora especificadas

---

<h2 id="diagrama_classes"> Diagrama de Classes 📚 </h2>
<img src="https://images2.imgbox.com/d0/21/4ogU4x5G_o.png">

<h3>Entidade: Mail (E-mail Agendado)</h3>

- **ID (Primary Key, UUID):** Identificador único do e-mail agendado.
- **DestinationName (String):** Nome do destinatário do e-mail.
- **DestinationAddress (String):** Endereço de e-mail do destinatário.
- **DueDate (Timestamp):** Data e hora em que o e-mail deve ser enviado.
- **Subject (String):** Assunto do e-mail.
- **Body (Text):** Corpo da mensagem de e-mail.
- **Status (String):** Status atual do e-mail (ex: aguardando, enviado, falhou, etc.).
- **CreatedAt (Timestamp):** Data e hora em que o agendamento do e-mail foi
criado.
- **UpdatedAt (Timestamp):** Data e hora da última atualização do agendamento.

---

<h2 id="tecnologias"> Tecnologias Utilizadas 💻 </h2>

<h3>Front-end 🎨</h3>

- **React:** Usado para construir a interface do usuário devido à sua eficiência em
renderização e vasto ecossistema de componentes reutilizáveis.


<h3>Back-end 🔧</h3>

- **NestJS:** Framework de backend escolhido por sua arquitetura modular e
integração eficiente com TypeScript, melhorando a qualidade do código e
produtividade
- **MySQL:** Sistema de gerenciamento de banco de dados relacional, utilizado
para armazenar informações de agendamentos de e-mails e dados de
usuários
- **Cron Jobs:** Implementados dentro do NestJS para gerenciar o agendamento
e o envio de e-mails.
- **Swagger API:** Utilizado para a documentação da API.


<h3>Integração e Serviços Externos 🌐</h3>

- **MailerSend:** Utilizada para o envio de e-mails. A escolha por MailerSend se
dá pela sua robustez, capacidade de escalabilidade e funcionalidades
avançadas.

<h3>Ferramentas de Desenvolvimento e Suporte 🛠️</h3>

- **Visual Studio Code (VS Code):** Editor de código escolhido por sua flexibilidade, vasta gama de extensões disponíveis e suporte integrado para desenvolvimento com React e NestJS.
- **GitHub:** Para versionamento de código e colaboração entre desenvolvedores.
- **Postman:** Ferramenta para testar e documentar as APIs desenvolvidas, permitindo validar todas as requisições e respostas do backend antes da integração com o frontend.
- **Railway:** Deploy para a parte de back end.
- **Vercel:** Deploy para a parte de front end.

---

<h2 id="pre-requisitos"> Pré-requisitos para rodar o projeto 🛠️ </h2>
Certifique-se de ter instalados antes de executar o projeto:

- **Node.js** - (v.20.10.0)
- **npm** - (v.10.5.2)

---

<h2 id="back-end">Configuração e Instalação Front-end ⚙️ </h2>

1. **Clone** este repositório para o seu ambiente local.

```bash
git clone https://github.com/htamagnus/chronomail-frontend-react-tcc.git
```

---

2. Navegue até a pasta back-end e execute o seguinte comando para **instalar** as dependências (Node 20):
```bash
npm install
```

---

3. **Configurações de back-end**:
- Certifique-se de ja ter configurado o back-end a partir desse [repositório](https://github.com/htamagnus/chronomail-backend-nestjs-tcc)
- Crie um .env com o valor para ```REACT_APP_BASE_URL```

---

4. Inicie o **projeto** com o seguinte comando:

```bash
npm run start
```

---

<h2 id="contribuicao"> Contribuições 🤝 </h2>
Sinta-se à vontade para contribuir para este projeto. Se você encontrar problemas ou tiver sugestões de melhorias, abra uma issue ou envie um pull request.

---
