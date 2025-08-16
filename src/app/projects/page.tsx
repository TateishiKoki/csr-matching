import Link from "next/link";
import Image from "next/image";
import { prisma, isSQLiteOnVercel } from "@/lib/db";

// ビルドでDBに触れないよう安全側
export const dynamic = "force-dynamic";

type ProjectWithImages = {
  id: string;
  title: string;
  description: string;
  region: string | null;
  images: { id: string; url: string; order: number; isCover: boolean }[];
};

// ここを追加（ダミーデータを直書き）
const demoProjects: ProjectWithImages[] = [
  {
    id: "demo-1",
    title: "海岸清掃プロジェクト（デモ）",
    description: "地域企業と連携して海岸の清掃を行います。",
    region: "神奈川",
    images: [{ id: "i1", url: "/next.svg", order: 0, isCover: true }],
  },
  {
    id: "demo-2",
    title: "子ども食堂スポンサー募集（デモ）",
    description: "月1回の開催支援。ロゴ掲出・レポート提供あり。",
    region: "東京",
    images: [{ id: "i2", url: "/vercel.svg", order: 0, isCover: true }],
  },
];

export default async function ProjectsPage() {
  let projects: ProjectWithImages[] = [];

  if (isSQLiteOnVercel) {
    projects = demoProjects; // ← 本番はダミー
  } else {
    projects = await prisma.project.findMany({
      include: { images: true },
      orderBy: { createdAt: "desc" },
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">プロジェクト一覧</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => {
          const cover = p.images.find((i) => i.isCover) ?? p.images[0];
          return (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="border rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-[16/9] bg-gray-100 relative">
                {cover ? (
                  <Image src={cover.url} alt={p.title} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-500 line-clamp-2">{p.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
