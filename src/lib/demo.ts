type KPI = { label: string; current: number; target: number; unit: string };

export function getProjectBySlug(slug: string) {
  const all = demoProjects();
  return all.find((p) => p.slug === slug) || null;
}

export function demoProjects() {
  return [
    {
      slug: 'kids-cafeteria',
      title: '地方の子ども食堂支援',
      tag: '教育',
      budget: '目標¥2,000,000',
      progress: 72,
      kpi: [
        { label: '提供食数', current: 3600, target: 5000, unit: '食' },
        { label: '実施回数', current: 24, target: 36, unit: '回' },
      ] as KPI[],
      team: [
        { role: '代表', name: '佐藤 花子' },
        { role: '会計', name: '田中 一郎' },
        { role: 'ボランティア', name: '地域支援チーム' },
      ],
      finance: { target: '¥2,000,000', raised: '¥1,440,000', usage: '食材費/人件費/配送費' },
      logs: [
        { date: '2025-07-01', note: '夏休み企画の実施決定。提供回数を週2回に拡充。' },
        { date: '2025-07-08', note: '地元スーパーと食材協定を締結。食材ロスの有効活用を開始。' },
      ],
    },
    {
      slug: 'coast-cleanup',
      title: '海岸清掃 × 観光活性',
      tag: '環境',
      budget: '目標¥1,200,000',
      progress: 40,
      kpi: [
        { label: '回収ごみ量', current: 1.2, target: 3, unit: 't' },
        { label: '参加者数', current: 140, target: 500, unit: '人' },
      ] as KPI[],
      team: [
        { role: '主催', name: 'クリーンビーチ実行委員会' },
        { role: '協力', name: '市観光協会' },
      ],
      finance: { target: '¥1,200,000', raised: '¥480,000', usage: '備品/保険/広報' },
      logs: [
        { date: '2025-06-20', note: '第1回清掃イベントを実施。参加者80名。' },
      ],
    },
  ];
}
