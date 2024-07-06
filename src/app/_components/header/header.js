import Image from "next/image";
import { TopNavigation } from "./top-navigation";
export const Header = async () => {
  return (
    <header className="border-b border-black/20 dark:border-white/20 ">
      <div className="container h-full mx-auto flex items-center ">
        <Image
          src="./images/logo-light.svg"
          width={116}
          height={20}
          alt="rapidswap logo"
        />
        <TopNavigation />
      </div>
    </header>
  );
};
