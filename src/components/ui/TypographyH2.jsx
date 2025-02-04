export function TypographyH2({ children, position }) {
  return (
    <h2 className={`scroll-m-20 text-[22px] leading-6 xs:text-2xl md:text-3xl font-semibold tracking-tight first:mt-0 ${position}`}>
      {children}
    </h2>
  );
}
