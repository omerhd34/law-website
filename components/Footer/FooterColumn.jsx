export default function FooterColumn({ title, id, children }) {
 return (
  <div className="space-y-4">
   <h3
    id={id}
    className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:tracking-[0.18em]"
   >
    {title}
   </h3>
   <ul className="space-y-0.5" aria-labelledby={id}>
    {children}
   </ul>
  </div>
 );
}
