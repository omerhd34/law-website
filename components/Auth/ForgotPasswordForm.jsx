"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function ForgotPasswordForm() {
  const [pending, setPending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    setTimeout(() => setPending(false), 400);
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center py-8 sm:py-10 md:py-14">
      <div className="w-full min-w-0 max-w-xl space-y-8">
        <Card
          className={cn(
            "rounded-2xl border border-border shadow-sm",
            "dark:border-border/80 dark:shadow-none",
          )}
        >
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-semibold tracking-tight md:text-[1.65rem]">
              Şifremi unuttum
            </CardTitle>
            <CardDescription>
              E-posta adresinizi girin; şifre sıfırlama bağlantısını size
              gönderelim.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="sifre-email">E-posta</Label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    id="sifre-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="ornek@gmail.com"
                    required
                    className="h-9 pl-9"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="h-9 w-full"
                size="lg"
                disabled={pending}
              >
                {pending ? "Gönderiliyor..." : "Sıfırlama bağlantısı gönder"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center gap-3 text-center text-sm text-muted-foreground">
          <Link
            href="/giris"
            className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Girişe dön
          </Link>
          <Link href="/" className="hover:text-foreground">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    </div>
  );
}
