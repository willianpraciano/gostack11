# Recuperação de Senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com intruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;


# Atualização do perfil

**RF**

- Usuário deve poder atualizar seu nome, email, senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado por outro usuário;
- Para atualizar sua senha, o usuário deverá informar sua senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha; 

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve pode visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no mongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um pretrador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durarar exatamente 1h;
- Os agendamentos devem estar disponíveis entre 8h Às 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar horários consigo mesmo;
