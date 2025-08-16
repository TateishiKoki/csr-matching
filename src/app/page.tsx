// src/app/page.tsx
export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">CSR Matching プロトタイプ</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">海岸清掃プロジェクト</h2>
          <p className="text-gray-600 mb-2">地域企業と連携して海岸の清掃を行います。</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            詳細を見る
          </button>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">子ども食堂スポンサー募集</h2>
          <p className="text-gray-600 mb-2">月1回の開催支援。ロゴ掲出・レポート提供あり。</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            詳細を見る
          </button>
        </div>
      </section>
    </main>
  );
}
