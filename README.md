# Anúncios ML

Etapa 1: dashboard. Banco: Firebase Firestore. Hospedagem: Vercel.

## Variáveis de ambiente (Vercel > Settings > Environment Variables)
- FIREBASE_SERVICE_ACCOUNT: conteúdo inteiro do .json da conta de serviço do Firebase.

Nunca envie o arquivo .env nem o .json da conta de serviço para o GitHub.

## Rodar localmente
    npm install
    cp .env.example .env   (preencha FIREBASE_SERVICE_ACCOUNT)
    npm run dev
