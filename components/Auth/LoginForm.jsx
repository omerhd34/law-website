"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [remember, setRemember] = useState(false);

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
              Giriş yap
            </CardTitle>
            <CardDescription>
              Kira ve tahliye süreçlerinize devam etmek için hesabınıza giriş
              yapın.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="giris-email">E-posta</Label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    id="giris-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="ornek@gmail.com"
                    required
                    className="h-9 pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="giris-password">Şifre</Label>
                  <Link
                    href="/sifremi-unuttum"
                    className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Şifremi unuttum
                  </Link>
                </div>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    id="giris-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    minLength={8}
                    className="h-9 pl-9 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={
                      showPassword ? "Şifreyi gizle" : "Şifreyi göster"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="giris-remember"
                  checked={remember}
                  onCheckedChange={(v) => setRemember(v === true)}
                />
                <input
                  type="hidden"
                  name="remember"
                  value={remember ? "on" : ""}
                  readOnly
                />
                <Label
                  htmlFor="giris-remember"
                  className="cursor-pointer font-normal text-muted-foreground"
                >
                  Beni hatırla
                </Label>
              </div>

              <Button
                type="submit"
                className="h-9 w-full"
                size="lg"
                disabled={pending}
              >
                {pending ? "Giriş yapılıyor..." : "Giriş yap"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Hesabınız yok mu?{" "}
          <Link
            href="/kayit"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Kayıt ol
          </Link>
        </p>
        <p className="text-center text-sm text-muted-foreground">
          <Link
            href="/"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Ana sayfaya dön
          </Link>
        </p>
      </div>
    </div>
  );
}
