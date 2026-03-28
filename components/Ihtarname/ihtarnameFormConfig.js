export const initialForm = {
 noticeDate: "",
 deliveryMethod: "",
 senderName: "",
 senderTc: "",
 senderAddress: "",
 senderPhone: "",
 recipientName: "",
 recipientAddress: "",
 recipientPhone: "",
 noticeCategory: "",
 noticeSubject: "",
 noticeBody: "",
 deadlineText: "",
 demand: "",
};

export const inputClass = "h-9";
export const textareaClass =
 "min-h-[120px] w-full resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30";

export const DELIVERY_METHOD_OPTIONS = [
 { value: "noter", label: "Noter Aracılığıyla" },
 { value: "posta", label: "İadeli Taahhütlü Posta" },
 { value: "elden", label: "Elden Teslim" },
];

export const NOTICE_CATEGORY_OPTIONS = [
 { value: "odeme", label: "Ödeme İhtarı" },
 { value: "tahliye", label: "Tahliye İhtarı" },
 { value: "sozlesme", label: "Sözleşme İhlali" },
 { value: "alacak", label: "Alacak İhtarı" },
 { value: "diger", label: "Diğer" },
];

export function mergeFormState(prev, field, value) {
 const merged = { ...initialForm, ...prev, [field]: value };
 return Object.fromEntries(
  Object.keys(initialForm).map((k) => {
   const v = merged[k];
   return [k, v ?? initialForm[k] ?? ""];
  }),
 );
}
