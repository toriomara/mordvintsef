import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { Button } from "./ui/button";

export const PhoneBlock = () => {
  return (
    <Button variant="ghost" size="icon">
      <Link
        href="tel:+79608670139"
        className=" hover:text-gray-900 dark:hover:text-white"
        passHref={true}
      >
        <BsTelephone size={20}/>
        <span className="sr-only">Позвонить адвокату</span>
      </Link>
    </Button>
  );
};
