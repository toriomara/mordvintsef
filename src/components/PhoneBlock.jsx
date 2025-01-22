import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { Button } from "./ui/button";

export const PhoneBlock = () => {
  return (
    <Button variant="ghost" size="icon">
      <Link
        href="tel:+79608670139"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        passHref={true}
      >
        <FaPhone size={20}/>
        <span className="sr-only">Позвонить адвокату</span>
      </Link>
    </Button>
  );
};
