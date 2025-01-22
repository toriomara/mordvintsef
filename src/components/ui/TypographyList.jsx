export function TypographyList({ children }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>{children}</li>
      <li>{children}</li>
      <li>{children}</li>
    </ul>
  );
}
