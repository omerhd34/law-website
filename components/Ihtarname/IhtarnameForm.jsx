"use client";

import { useState } from "react";
import Link from "next/link";
import { pdf } from "@react-pdf/renderer";
import { ArrowLeft, ArrowRight, Check, FileWarning } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
 initialForm,
 inputClass,
 mergeFormState,
 textareaClass,
} from "./ihtarnameFormConfig";
import { ihtarnameSteps } from "./ihtarnameFormSteps";
import { validateAll, validateStep } from "./ihtarnameFormValidation";
import { IhtarnamePdfDocument } from "./pdf/IhtarnamePdfDocument";
import { IhtarnamePreviewSummary } from "./IhtarnamePreviewSummary";
import {
 IhtarStepDetails,
 IhtarStepGeneral,
 IhtarStepPreview,
 IhtarStepRecipient,
 IhtarStepSender,
} from "./steps";

const STEP_COUNT = 5;

export default function IhtarnameForm() {
 const [step, setStep] = useState(1);
 const [form, setForm] = useState(() => ({ ...initialForm }));
 const [done, setDone] = useState(false);
 const [error, setError] = useState("");

 const update = (field, value) => {
  setForm((f) => mergeFormState(f, field, value));
  setError("");
 };

 const downloadPdf = async () => {
  const msg = validateAll(form);
  if (msg) {
   setError(msg);
   return;
  }
  setError("");
  try {
   const blob = await pdf(<IhtarnamePdfDocument form={form} />).toBlob();
   const url = URL.createObjectURL(blob);
   const a = document.createElement("a");
   a.href = url;
   a.download = "ihtarname.pdf";
   a.click();
   URL.revokeObjectURL(url);
   setDone(true);
  } catch {
   setError("PDF oluşturulurken bir hata oluştu.");
  }
 };

 const currentStepMeta = ihtarnameSteps.find((x) => x.id === step);
 const StepIcon = currentStepMeta?.icon;

 if (done) {
  return (
   <div className="mx-auto w-full max-w-6xl space-y-6">
    <Card
     className={cn(
      "rounded-2xl border border-border shadow-sm",
      "dark:border-border/80 dark:shadow-none",
     )}
    >
     <CardHeader>
      <div className="flex items-start gap-3">
       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="h-5 w-5" aria-hidden />
       </div>
       <div className="min-w-0 space-y-1">
        <CardTitle className="text-xl font-semibold tracking-tight">
         Taslak hazır
        </CardTitle>
        <CardDescription className="text-pretty leading-relaxed">
         Bilgilerinizi kontrol edebilirsiniz. PDF indirme özelliği yakında
         eklenecektir.
        </CardDescription>
       </div>
      </div>
     </CardHeader>
     <CardContent className="space-y-4">
      <IhtarnamePreviewSummary form={form} />
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
       <Button
        type="button"
        variant="outline"
        onClick={() => {
         setForm({ ...initialForm });
         setStep(1);
         setDone(false);
        }}
       >
        Yeni taslak
       </Button>
       <Button type="button" onClick={() => void downloadPdf()}>
        PDF olarak indir
       </Button>
      </div>
     </CardContent>
    </Card>
    <p className="text-center text-sm text-muted-foreground">
     <Link href="/" className="font-medium underline-offset-4 hover:underline">
      Ana sayfaya dön
     </Link>
    </p>
   </div>
  );
 }

 return (
  <div className="mx-auto w-full max-w-6xl space-y-8 pb-10">
   <div className="space-y-2 text-center sm:text-left">
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
     <FileWarning className="h-3.5 w-3.5" aria-hidden />
     Belge oluşturma
    </div>
    <h1 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
     İhtarname oluştur
    </h1>
    <p className="max-w-4xl text-pretty text-sm text-muted-foreground md:text-[0.95rem]">
     Beş adımda genel bilgilerden önizlemeye tüm alanları doldurun. Metin avukat
     kontrolünden sonra kesinleştirilebilir.
    </p>
   </div>

   <div className="rounded-2xl border border-border/70 bg-linear-to-b from-card to-muted/25 p-3 shadow-sm ring-1 ring-foreground/4 sm:p-4">
    <div
     className="mb-3 hidden h-1.5 w-full overflow-hidden rounded-full bg-muted/90 sm:block"
     aria-hidden
    >
     <div
      className="h-full rounded-full bg-linear-to-r from-primary via-primary to-primary/80 shadow-sm shadow-primary/25 transition-[width] duration-500 ease-out"
      style={{
       width: `${(step / STEP_COUNT) * 100}%`,
      }}
     />
    </div>
    <div
     className="flex w-full flex-wrap items-stretch justify-between gap-x-1 gap-y-2 sm:gap-x-1.5 sm:gap-y-2.5"
     role="navigation"
     aria-label="Form adımları"
    >
     {ihtarnameSteps.map(({ id, title }) => {
      const stepValid = !validateStep(form, id);
      const showTick = step > id && stepValid;
      const isActive = step === id;
      return (
       <button
        key={id}
        type="button"
        aria-current={isActive ? "step" : undefined}
        onClick={() => {
         setError("");
         setStep(id);
        }}
        className={cn(
         "flex min-h-10 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-1.5 text-left text-[11px] transition-all duration-200 sm:min-h-0 sm:gap-2 sm:px-3 sm:py-2 sm:text-[13px]",
         isActive &&
          "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25 ring-2 ring-primary/15",
         !isActive &&
          showTick &&
          "border-primary/30 bg-primary/[0.07] text-foreground hover:border-primary/45 hover:bg-primary/12",
         !isActive &&
          !showTick &&
          "border-border/80 bg-background/70 text-muted-foreground hover:border-border hover:bg-muted/90 hover:text-foreground",
        )}
       >
        <span
         className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums transition-colors sm:h-7 sm:w-7 sm:text-xs",
          isActive &&
           "bg-primary-foreground/25 text-primary-foreground shadow-inner",
          !isActive &&
           showTick &&
           "bg-primary/20 text-primary ring-1 ring-primary/15",
          !isActive && !showTick && "bg-muted/90 text-muted-foreground",
         )}
        >
         {showTick ? (
          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
         ) : (
          id
         )}
        </span>
        <span className="text-left font-medium leading-tight tracking-tight">
         {title}
        </span>
       </button>
      );
     })}
    </div>
   </div>

   <form
    className="ihtarname-form"
    onSubmit={(e) => {
     e.preventDefault();
    }}
   >
    <Card
     className={cn(
      "rounded-2xl border border-border shadow-sm",
      "dark:border-border/80 dark:shadow-none",
     )}
    >
     <CardHeader className="border-b border-border/60 pb-4">
      <div className="flex items-center gap-2">
       {StepIcon ? (
        <StepIcon className="h-4 w-4 text-muted-foreground" aria-hidden />
       ) : null}
       <CardTitle className="text-lg">{currentStepMeta?.title}</CardTitle>
      </div>
      <CardDescription>
       {step === 1 && "İhtarname tarihi ve gönderim yöntemi."}
       {step === 2 && "İhtarı gönderen kişinin bilgileri."}
       {step === 3 && "İhtarın gönderileceği kişinin bilgileri."}
       {step === 4 && "İhtarın konusu ve detayları."}
       {step === 5 &&
        "PDF önizlemesini kontrol edin; ardından dosyayı indirebilirsiniz."}
      </CardDescription>
     </CardHeader>

     <CardContent className="space-y-6 pt-6">
      {error && (
       <p
        className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        role="alert"
       >
        {error}
       </p>
      )}

      {step === 1 && (
       <IhtarStepGeneral form={form} update={update} inputClass={inputClass} />
      )}
      {step === 2 && (
       <IhtarStepSender
        form={form}
        update={update}
        inputClass={inputClass}
        textareaClass={textareaClass}
       />
      )}
      {step === 3 && (
       <IhtarStepRecipient
        form={form}
        update={update}
        inputClass={inputClass}
        textareaClass={textareaClass}
       />
      )}
      {step === 4 && (
       <IhtarStepDetails
        form={form}
        update={update}
        inputClass={inputClass}
        textareaClass={textareaClass}
       />
      )}
      {step === 5 && <IhtarStepPreview form={form} />}

      <div className="flex flex-col-reverse gap-3 border-t border-border/60 pt-6 sm:flex-row sm:justify-between">
       <div className="flex gap-2">
        {step > 1 && (
         <Button
          type="button"
          variant="outline"
          onClick={() => {
           setError("");
           setStep((x) => Math.max(1, x - 1));
          }}
          className="gap-1.5 cursor-pointer"
         >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Geri
         </Button>
        )}
       </div>
       <div className="flex gap-2 sm:ml-auto">
        {step < STEP_COUNT ? (
         <Button
          type="button"
          onClick={() => {
           const msg = validateStep(form, step);
           if (msg) {
            setError(msg);
            return;
           }
           setError("");
           setStep((x) => Math.min(STEP_COUNT, x + 1));
          }}
          className="gap-1.5 cursor-pointer"
         >
          İleri
          <ArrowRight className="h-4 w-4" aria-hidden />
         </Button>
        ) : (
         <Button
          type="button"
          className="min-w-[180px] cursor-pointer"
          onClick={() => void downloadPdf()}
         >
          PDF olarak indir
         </Button>
        )}
       </div>
      </div>
     </CardContent>
    </Card>
   </form>
  </div>
 );
}
