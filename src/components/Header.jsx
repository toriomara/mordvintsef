import { ModeToggle } from "./modeToggle";

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur border-b z-20 inline-flex justify-between">
      Header
      <ModeToggle />
    </header>
  );
}

export default Header;
