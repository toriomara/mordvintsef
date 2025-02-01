export function TypographyH2({ children, position }) {
  return (
    <h2 className={`scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ${position}`}>
      {children}
    </h2>
  );
}
