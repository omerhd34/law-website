import AuthHeader from "@/components/Header/AuthHeader";

export default function AuthLayout({ children }) {
 return (
  <div className="flex min-h-dvh min-w-0 flex-col">
   <AuthHeader />
   <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col px-4 pb-8 pt-2 sm:px-6 sm:pb-10">
    {children}
   </main>
  </div>
 );
}
