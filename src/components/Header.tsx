import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export default function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="#" className="mr-6 hidden lg:flex">
            <span className="">KCB</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              to="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Logout
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/" className="mr-6 hidden lg:flex">
        <span className="">KCB</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          to="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Logout
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
