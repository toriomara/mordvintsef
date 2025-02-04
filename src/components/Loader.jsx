import loader from '../../public/loader.svg'
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <Image
        src={loader}
        alt="Loader"
        width={56}
        height={56}
        className="object-contain"
      />
    </div>
  );
};
