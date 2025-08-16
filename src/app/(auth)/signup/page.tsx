'use client';

import React from 'react';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Building2, Users, HandHeart, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600 dark:border-white/10 dark:text-neutral-300">
        <Badge className="bg-[#0078D4]">新規登録</Badge>
        まずは役割を選択してください
      </div>

      <h1 className="text-3xl font-bold tracking-tight">アカウント作成</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
        メール認証後、KYC/反社チェックに進みます。登録は無料です。
      </p>

      <Card className="mt-6 rounded-2xl border-black/5 dark:border-white/10">
        <CardHeader>
          <CardTitle>役割を選択</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="brand" className="w-full">
            <TabsList className="grid w-full grid-cols-3 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800">
              <TabsTrigger value="brand"  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"><Building2 className="mr-1 h-4 w-4" />企業</TabsTrigger>
              <TabsTrigger value="org"    className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"><Users className="mr-1 h-4 w-4" />団体</TabsTrigger>
              <TabsTrigger value="donor"  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"><HandHeart className="mr-1 h-4 w-4" />個人</TabsTrigger>
            </TabsList>

            {/* 企業 */}
            <TabsContent value="brand" className="mt-6">
              <SignupForm role="brand" extraFields={
                <>
                  <Input placeholder="会社名" aria-label="会社名" />
                  <Input placeholder="部署名（任意）" aria-label="部署名" />
                  <Input placeholder="CSR重点領域（例：教育/環境）" aria-label="重点領域" />
                </>
              } />
            </TabsContent>

            {/* 団体 */}
            <TabsContent value="org" className="mt-6">
              <SignupForm role="org" extraFields={
                <>
                  <Input placeholder="団体名" aria-label="団体名" />
                  <Input placeholder="法人種別（例：NPO/一般社団）" aria-label="法人種別" />
                  <Input placeholder="主な活動地域（国内/海外）" aria-label="活動地域" />
                </>
              } />
            </TabsContent>

            {/* 個人 */}
            <TabsContent value="donor" className="mt-6">
              <SignupForm role="donor" extraFields={
                <>
                  <Input placeholder="お名前" aria-label="お名前" />
                  <Input placeholder="興味分野（例：スポーツ/地域活性）" aria-label="興味分野" />
                </>
              } />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <p className="mt-4 text-xs text-neutral-500">
        すでにアカウントをお持ちですか？ <Link href="/login" className="underline">ログイン</Link>
      </p>
    </main>
  );
}

function SignupForm({
  role,
  extraFields,
}: {
  role: 'brand' | 'org' | 'donor';
  extraFields: React.ReactNode;
}) {
  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        alert(`仮登録（${role}）を受け付けました。メールを確認してください。`);
      }}
    >
      {extraFields}
      <Input type="email" placeholder="メールアドレス" aria-label="メールアドレス" required />
      <Input type="password" placeholder="パスワード（8文字以上）" aria-label="パスワード" minLength={8} required />

      <label className="mt-1 flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
        <input type="checkbox" required />
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="h-4 w-4" />
          KYC/反社チェックに同意します
        </span>
      </label>

      <Button className="mt-1 h-11 rounded-xl bg-[#0078D4] hover:bg-[#0069BB]">
        登録してメール認証へ進む <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
