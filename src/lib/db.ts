import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export function getDb() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) throw new Error("A variável FIREBASE_SERVICE_ACCOUNT não está configurada.");

  const app =
    getApps()[0] ??
    (() => {
      const account = JSON.parse(raw);
      if (typeof account.private_key === "string") {
        account.private_key = account.private_key.replace(/\\n/g, "\n");
      }
      return initializeApp({ credential: cert(account) });
    })();

  return getFirestore(app);
}
