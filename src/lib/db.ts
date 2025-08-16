// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

// 開発時に Hot Reload してもインスタンスを使い回す
declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient | undefined;
}

export const prisma =
  globalThis.prismaGlobal ?? new PrismaClient({ log: ['error'] });

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

// Vercel + SQLite(file:) のときは DB を使わない判定
export const isSQLiteOnVercel =
  Boolean(process.env.VERCEL) && (process.env.DATABASE_URL || '').startsWith('file:');

export default prisma;
