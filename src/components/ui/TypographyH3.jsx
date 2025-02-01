export function TypographyH3({ children, position }) {
  return (
    <h3 className={`scroll-m-20 text-2xl border-b pb-2 font-semibold tracking-tight ${position}`}>
      {children}
    </h3>
  );
}
