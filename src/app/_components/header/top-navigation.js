"use client"; 
import Link from "next/link";

export const TopNavigation = () => {
  const menuItems = [
    { title: "Shift", href: "/" },
    { title: "Stake", href: "/" },
    { title: "Integrate", href: "/" }, 
    { title: "History", href: "/" }, 
  ];

  return (
    <ul className="flex gap-x-[27px] ml-[40px]">
      {menuItems.map((item) => {
        return (
          <li key={`navigation-${item.title}`}>
            <Link
              href={item.href}
              className={`font-medium text-sm transition-colors`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};