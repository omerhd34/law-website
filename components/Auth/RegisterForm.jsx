"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
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

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [pending, setPending] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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
              Kayıt ol
            </CardTitle>
            <CardDescription className="text-pretty px-1 leading-relaxed sm:px-0">
              Yeni bir hesap oluşturarak kira ve tahliye süreçlerinizi yönetmeye
              başlayın.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="kayit-ad">Ad soyad</Label>
                <div className="relative">
                  <User
                    className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    id="kayit-ad"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Adınız Soyadınız"
                    required
                    className="h-9 pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="kayit-email">E-posta</Label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    id="kayit-email"
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
                <Label htmlFor="kayit-password">Şifre</Label>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    id="kayit-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    placeholder="*************"
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

              <div className="space-y-2">
                <Label htmlFor="kayit-password2">Şifre tekrar</Label>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    id="kayit-password2"
                    name="passwordConfirm"
                    type={showPassword2 ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    placeholder="*************"
                    minLength={8}
                    className="h-9 pl-9 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setShowPassword2((v) => !v)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={
                      showPassword2 ? "Şifreyi gizle" : "Şifreyi göster"
                    }
                  >
                    {showPassword2 ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3">
                <Checkbox
                  id="kayit-kosullar"
                  checked={acceptedTerms}
                  onCheckedChange={(v) => setAcceptedTerms(v === true)}
                  className="mt-0.5 shrink-0"
                />
                {/* Yerel <label>: shadcn Label varsayılanı `flex` olduğu için metin/linkler sütunlara bölünüyordu */}
                <label
                  htmlFor="kayit-kosullar"
                  className="min-w-0 flex-1 cursor-pointer text-pretty text-sm font-normal leading-relaxed text-muted-foreground"
                >
                  <Link
                    href="/kullanim-kosullari"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Kullanım koşullarını
                  </Link>{" "}
                  ve{" "}
                  <Link
                    href="/gizlilik-politikasi"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    gizlilik politikasını
                  </Link>{" "}
                  okudum, kabul ediyorum.
                </label>
              </div>
              <input
                type="hidden"
                name="terms"
                value={acceptedTerms ? "on" : ""}
                readOnly
              />

              <Button
                type="submit"
                className="h-9 w-full"
                size="lg"
                disabled={pending || !acceptedTerms}
              >
                {pending ? "Kayıt oluşturuluyor..." : "Kayıt ol"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Zaten hesabınız var mı?{" "}
          <Link
            href="/giris"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Giriş yap
          </Link>
        </p>
        <p className="text-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Ana sayfaya dön
          </Link>
        </p>
      </div>
    </div>
  );
}
