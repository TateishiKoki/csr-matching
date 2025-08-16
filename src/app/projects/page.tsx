// src/app/projects/page.tsx
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import type { Project, Image } from '@prisma/client';

type ProjectWithImages = Project & { images: Image[] };

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
  include: { images: true },
  orderBy: { createdAt: 'desc' },
}) as ProjectWithImages[];

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">プロジェクト一覧</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {projects.map((p: ProjectWithImages) => {
            const cover = p.images.find((i) => i.isCover) ?? p.images[0];
            return (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="border rounded-lg overflow-hidden hover:shadow-md transition"
            >
              {cover && (
                <div className="relative aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cover.url} alt={p.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-3">
                <div className="text-sm text-gray-500">{p.region ?? '-'}</div>
                <div className="font-semibold">{p.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
