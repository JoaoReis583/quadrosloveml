# Anúncios ML

Etapa 1 (dashboard) + esquema completo do banco (etapa 5 já modelada).

## Rodar localmente
Requer Node.js 18.17 ou superior.

    npm install
    cp .env.example .env
    npm run db:push
    npm run dev

Abra http://localhost:3000.

## Próximas etapas
2. Formulário de anúncio  3. Variações e imagens  4. Modelos e rascunhos
5. Login de usuários  6. Conexão OAuth com o Mercado Livre  7. Publicação  8. Gerenciamento

Para a etapa 6 você precisará criar um app no painel de desenvolvedores do Mercado Livre
e preencher ML_CLIENT_ID, ML_CLIENT_SECRET e ML_REDIRECT_URI no .env.
