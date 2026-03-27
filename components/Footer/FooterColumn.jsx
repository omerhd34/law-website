export default function FooterColumn({ title, id, children }) {
 return (
  <div className="space-y-4">
   <h3
    id={id}
    className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/90"
   >
    {title}
   </h3>
   <ul className="space-y-0.5" aria-labelledby={id}>
    {children}
   </ul>
  </div>
 );
}
