import Logo from "@/components/Header/Logo";

export default function FooterBrand() {
 return (
  <div className="space-y-4 lg:max-w-sm">
   <Logo />
   <p className="text-sm leading-relaxed text-muted-foreground">
    Müvekkillerimize güvenilir hukuki danışmanlık sunuyor; şeffaf iletişim
    ve mesleki titizlikle yanınızdayız.
   </p>
  </div>
 );
}
