export function TypographyH1({ children, position }) {
  return (
    <h1
      className={`scroll-m-30 text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight py-4 lg:py-6 ${position}`}
    >
      {children}
    </h1>
  );
}
