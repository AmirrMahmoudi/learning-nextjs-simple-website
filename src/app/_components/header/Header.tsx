import Image from "next/image";
import { TopNavigation } from "./top-navigation";
import { auth } from "@/auth";

export const Header: React.FC = async () => {
  const session = await auth();

  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/logo-light.svg"
          width={100}
          height={100}
          alt="کلاسبن"
        />
        <TopNavigation />
        <span className="mr-auto">
            {session?.user.mobile}
            </span>
      </div>
    </header>
  );
};
