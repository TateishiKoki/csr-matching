'use client';

import Link from 'next/link';
import React from 'react';
import {
  ArrowRight, Sparkles, HandHeart, Building2, Globe2, ShieldCheck,
  Users, Target, LineChart, Gift, ChevronRight
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

/* =========================================================
 * CSR / Sponsor / Donation – Landing
 * Tailwind + shadcn/ui + lucide-react
 * =======================================================*/

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* Decorative gradients */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 size-[36rem] -translate-x-1/2 rounded-full blur-3xl [background:radial-gradient(closest-side,_rgba(0,120,212,.25),_transparent)]" />
        <div className="absolute top-1/3 left-10 size-64 rounded-full blur-3xl [background:radial-gradient(closest-side,_rgba(59,130,246,.18),_transparent)]" />
        <div className="absolute bottom-10 right-10 size-80 rounded-full blur-3xl [background:radial-gradient(closest-side,_rgba(16,185,129,.18),_transparent)]" />
      </div>

      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-40 border-b border-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:supports-[backdrop-filter]:bg-neutral-900/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0078D4] to-[#00B0B9] text-white shadow-md">
              <Sparkles className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">CSRMatch</p>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400">CSR / Sponsor / Donation</p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <a className="text-sm hover:text-neutral-600 dark:hover:text-neutral-300" href="#features">特徴</a>
            <a className="text-sm hover:text-neutral-600 dark:hover:text-neutral-300" href="#how">仕組み</a>
            <a className="text-sm hover:text-neutral-600 dark:hover:text-neutral-300" href="#projects">プロジェクト</a>
            <a className="text-sm hover:text-neutral-600 dark:hover:text-neutral-300" href="#faq">FAQ</a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex">ログイン</Button>
            <Button className="group bg-[#0078D4] hover:bg-[#0069BB]">
              無料でアカウント作成
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <header className="mx-auto max-w-7xl px-6 pt-14">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600 dark:border-white/10 dark:text-neutral-300">
              <Badge className="bg-[#00B0B9] hover:bg-[#0098A0]">NEW</Badge>
              企業の想いと社会課題を“最短距離”でつなぐ
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              CSR・スポンサー・寄付を、<span className="bg-gradient-to-r from-[#0078D4] to-[#00B0B9] bg-clip-text text-transparent">一つの体験</span>に。
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              マッチングから契約、レポーティングまでを一気通貫。透明性の高い寄付と成果連動型のスポンサー提案で、インパクトを可視化します。
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg" className="h-11 rounded-xl bg-[#0078D4] px-5 text-white hover:bg-[#0069BB]">無料でアカウント作成</Button>
              <Button size="lg" variant="outline" className="h-11 rounded-xl">団体として掲載する</Button>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500">
              <li className="flex items-center gap-2"><ShieldCheck className="size-4" />KYC/反社チェック</li>
              <li className="flex items-center gap-2"><LineChart className="size-4" />成果レポート自動生成</li>
              <li className="flex items-center gap-2"><Gift className="size-4" />特典管理</li>
            </ul>
          </div>

          {/* Right card (metric mock) */}
          <div className="relative">
            <div aria-hidden className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-tr from-[#0078D4]/15 via-[#00B0B9]/15 to-emerald-400/10 blur-xl" />
            <Card className="rounded-3xl border-black/5 bg-white/80 shadow-xl backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <HandHeart className="size-5 text-[#0078D4]" />
                  インパクトダッシュボード（サンプル）
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                {metrics.map((k) => (
                  <div key={k.label} className="rounded-2xl border border-black/5 p-4 dark:border-white/10">
                    <p className="text-xs text-neutral-500">{k.label}</p>
                    <p className="mt-1 text-2xl font-bold tracking-tight">{k.value}</p>
                  </div>
                ))}
                <div className="md:col-span-3">
                  <div className="rounded-2xl border border-black/5 p-4 dark:border-white/10">
                    <p className="text-xs text-neutral-500">最近の支援</p>
                    <ul className="mt-2 space-y-2 text-sm">
                      {recentSupports.map((t) => (
                        <li key={t} className="flex items-center justify-between gap-3">
                          <span className="truncate">{t}</span>
                          <ChevronRight className="size-4" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      {/* ===== Logos / Social proof ===== */}
      <section aria-label="パートナー候補" className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-neutral-500">パートナー候補（イメージ）</p>
        <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {partners.map((n) => (
            <div key={n} className="flex items-center justify-center rounded-xl border border-black/5 p-3 text-sm dark:border-white/10">{n}</div>
          ))}
        </div>
      </section>

      {/* ===== Value props ===== */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="rounded-2xl border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
              <CardContent className="p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0078D4]/15 to-[#00B0B9]/15">
                  <Icon className="size-6 text-[#0078D4]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== Audience tabs ===== */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-8">
        <Tabs defaultValue="brand" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-2xl bg-neutral-100 p-1 dark:bg-neutral-800">
            <TabsTrigger value="brand" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow">企業の方へ</TabsTrigger>
            <TabsTrigger value="org" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow">団体・チームの方へ</TabsTrigger>
            <TabsTrigger value="donor" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow">個人の方へ</TabsTrigger>
          </TabsList>

          <TabsContent value="brand" className="mt-6">
            <ThreeSteps items={[
              { icon: Target,   title: 'CSR方針とKPIを登録',     desc: '重点領域・地域・予算・評価軸を設定。社内承認フローにも対応。' },
              { icon: HandHeart, title: '最適プロジェクトをレコメンド', desc: '高精度マッチング。KYC/コンプライアンス審査は標準搭載。' },
              { icon: LineChart, title: '実行・レポートが自動化', desc: '成果・写真・領収データを自動集約。四半期レポート出力。' },
            ]}/>
          </TabsContent>

          <TabsContent value="org" className="mt-6">
            <ThreeSteps items={[
              { icon: Users,     title: 'プロジェクトを作成', desc: '目的・活動内容・必要資金・期待効果を登録。審査は最短即日。' },
              { icon: Building2, title: '企業へピッチ',       desc: '提案テンプレとショーケースで魅力を最大化。' },
              { icon: Gift,      title: '継続支援を設計',     desc: '成果可視化でリピート支援へ。特典・アクティベーションも管理。' },
            ]}/>
          </TabsContent>

          <TabsContent value="donor" className="mt-6">
            <ThreeSteps items={[
              { icon: HandHeart, title: '気になる分野を登録', desc: '教育/環境/スポーツ/地域活性などをワンクリック設定。' },
              { icon: Target,    title: '国内/海外を切替',   desc: '地域・国・SDGs目標で絞り込み。継続寄付もOK。' },
              { icon: ShieldCheck, title: '透明性の高い寄付', desc: 'KYC・受領証の自動発行、進捗レポート通知で安心。' },
            ]}/>
          </TabsContent>
        </Tabs>
      </section>

      {/* ===== Project explorer (mock) ===== */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">注目のプロジェクト</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">カテゴリーや予算で素早く絞り込み。</p>
          </div>
          <div className="flex gap-2">
            <Input placeholder="キーワード検索…" className="w-48" />
            <Button variant="outline">フィルター</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group rounded-2xl border-black/5 bg-white/70 transition hover:shadow-lg dark:border-white/10 dark:bg-neutral-900/60">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">{p.tag}</Badge>
                  <span className="text-xs text-neutral-500">{p.budget}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 text-lg font-semibold tracking-tight">{p.title}</h3>
                <div className="mt-4">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#0078D4] to-[#00B0B9]" style={{ width: `${p.progress}%` }} />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
                    <span>達成率</span>
                    <span>{p.progress}%</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">ステータス：{p.sponsor}</span>
                  <Button size="sm" className="rounded-lg bg-[#0078D4] hover:bg-[#0069BB]">詳細</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== Lead form ===== */}
      <section aria-label="お問い合わせ" className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid items-center gap-6 rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-neutral-900/50 md:grid-cols-2 md:p-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">まずは 15 分で相談</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">目的やご予算、スケジュールを伺い、最適な立ち上がりプランをご提案します。</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li className="flex items-center gap-2"><ShieldCheck className="size-4" />KPI設計テンプレ進呈</li>
              <li className="flex items-center gap-2"><LineChart className="size-4" />成果レポートの実物サンプル</li>
              <li className="flex items-center gap-2"><Gift className="size-4" />初回限定のアクティベーション企画</li>
            </ul>
          </div>
          <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="会社名" aria-label="会社名" />
              <Input placeholder="お名前" aria-label="お名前" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input type="email" placeholder="メール" aria-label="メール" />
              <Input placeholder="ご予算目安（例：300万円）" aria-label="ご予算" />
            </div>
            <Textarea placeholder="ご相談内容" aria-label="ご相談内容" />
            <Button className="h-11 rounded-xl bg-[#00B0B9] hover:bg-[#0098A0]">相談してみる</Button>
          </form>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-12">
        <h3 className="text-2xl font-bold tracking-tight">料金プラン</h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">月額＋成果連動のハイブリッド設計（表示は仮）。</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pricing.map((p) => (
            <Card key={p.name} className="rounded-2xl border-black/5 dark:border-white/10">
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-3xl font-bold">
                  {p.price}<span className="text-sm font-medium text-neutral-500">{p.suffix}</span>
                </p>
                <ul className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Button
                  className={p.ctaVariant === 'primary' ? 'w-full bg-[#0078D4] hover:bg-[#0069BB]' : 'w-full'}
                  variant={p.ctaVariant === 'outline' ? 'outline' : 'default'}
                >
                  {p.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-3 text-xs text-neutral-500">※ 手数料・価格は仮の表示です。正式版では許諾・税制に合わせて調整します。</p>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="mx-auto max-w-5xl px-6 pb-16">
        <h3 className="text-center text-2xl font-bold tracking-tight">よくある質問</h3>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="q1">
            <AccordionTrigger>手数料はどのように発生しますか？</AccordionTrigger>
            <AccordionContent>基本利用料＋成果連動フィーのハイブリッドを予定。非営利団体にはディスカウントを用意します。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>反社チェックや審査はありますか？</AccordionTrigger>
            <AccordionContent>企業・団体双方に KYC/AML 基準の審査プロセスを提供し、安全・安心を担保します。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>レポートの形式は？</AccordionTrigger>
            <AccordionContent>ダッシュボード / CSV / PDF に対応予定。四半期・年次サマリーの自動生成にも対応します。</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-black/5 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} CSRMatch Prototype.</p>
          <nav className="flex items-center gap-4 text-sm text-neutral-500">
            <a href="#">利用規約</a><a href="#">プライバシー</a><a href="#">特定商取引法</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

/* ---------- 小さな部品 ---------- */
function ThreeSteps({ items }: { items: { icon: React.ElementType; title: string; desc: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((s) => <StepCard key={s.title} {...s} />)}
    </div>
  );
}

function StepCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <Card className="rounded-2xl border-black/5 bg-white/70 backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900/60">
      <CardContent className="p-6">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0078D4]/15 to-[#00B0B9]/15">
          <Icon className="size-6 text-[#0078D4]" />
        </div>
        <h4 className="mt-4 text-base font-semibold tracking-tight">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{desc}</p>
      </CardContent>
    </Card>
  );
}

/* ---------- デモ用データ ---------- */
const metrics = [
  { label: '累計支援額', value: '¥12,480,000' },
  { label: 'スポンサー企業', value: '128社' },
  { label: '進行中PJ', value: '42件' },
] as const;

const recentSupports = [
  'ABCホールディングス → 子ども食堂ネットワーク（¥500,000）',
  'GMWe Tech → 障がい者スポーツ連盟（¥300,000）',
  'XYZ Foods → 食品ロス削減プロジェクト（¥200,000）',
] as const;

const partners = ['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E', 'Partner F'] as const;

const valueProps = [
  { icon: Building2, title: '企業のブランド価値を最大化', desc: '目的・方針・KPIに沿って最適なプロジェクトを提案。契約から実行・効果測定までを統合。' },
  { icon: Users,     title: '団体・チームの資金調達を効率化', desc: '申請・審査を省力化し、継続支援につながるスポンサー体験を設計。' },
  { icon: Globe2,    title: '社会インパクトの可視化',       desc: 'インパクト指標とレポートを自動生成。寄付・スポンサーの透明性を高めます。' },
] as const;

const projects = [
  { tag: '教育',   title: '地方の子ども食堂支援', progress: 72, budget: '目標¥2,000,000', sponsor: '募集中' },
  { tag: '環境',   title: '海岸清掃 × 観光活性',   progress: 40, budget: '目標¥1,200,000', sponsor: '交渉中' },
  { tag: 'スポーツ', title: '障がい者スポーツ普及', progress: 86, budget: '目標¥3,000,000', sponsor: '募集中' },
] as const;

const pricing = [
  {
    name: 'Starter（団体向け）',
    price: '¥0', suffix: '/月',
    features: ['掲載・申請・KYC（標準）', '受領証/レポート自動発行', 'プラットフォーム手数料：5%'],
    cta: '無料でアカウント作成', ctaVariant: 'primary' as const,
  },
  {
    name: 'Business（企業向け）',
    price: '¥49,800', suffix: '/月〜',
    features: ['CSR方針/KPI管理・承認フロー', '国内/海外プロジェクトの一括管理', '成果連動フィー：3%〜'],
    cta: '相談する', ctaVariant: 'outline' as const,
  },
  {
    name: 'Impact（個人/大口寄付）',
    price: '¥980', suffix: '/月',
    features: ['関心領域の自動レコメンド', '寄付履歴/領収書の整理', 'プラットフォーム手数料：3%'],
    cta: '始める', ctaVariant: 'outline' as const,
  },
] as const;
