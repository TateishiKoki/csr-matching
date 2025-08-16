// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 既存データ削除（リセット用）
  await prisma.project.deleteMany();

  // ダミーデータ投入
  await prisma.project.create({
    data: {
      title: "サンプルプロジェクト",
      description: "これはテスト用の説明です",
      region: "Tokyo",
      status: "PUBLISHED",
      images: {
        create: [
          { url: "/sample1.jpg", order: 1, isCover: true },
          { url: "/sample2.jpg", order: 2 }
        ]
      },
      proposals: {
        create: [
          { companyName: "テスト株式会社", message: "よろしくお願いします", amountOffer: 50000 }
        ]
      }
    }
  });
}

main()
  .then(() => {
    console.log("✅ Seeding 完了");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
