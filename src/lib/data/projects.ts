// src/lib/data/projects.ts (あとでPrisma版に差し替え)
export type ProjectCard = { id: string; title: string; region?: string; coverUrl?: string };
export async function fetchProjects(): Promise<ProjectCard[]> {
  // いまは seed から読む or モック
  return [
    { id: "1", title: "学校図書の拡充", region: "Tokyo", coverUrl: "https://picsum.photos/seed/1/800/500" },
    // ...
  ];
}
