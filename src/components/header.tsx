import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return(<>
    <header className="sticky top-0 z-50 py-3 w-full border-b bg-white">
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/* LOGO */}
          <div className="nav-logo">
            <BookOpen size={20} />
          </div>
          <span className="text-lg font-black tracking-normal">FlashMaster</span>
        </div>
        
        {/* MOBILE MENU */}
        <div className={`grid absolute top-full gap-3 sm:hidden bg-white right-4 p-4 border border-border rounded-sm mt-2.5 shadow-[3px_3px_0px_#1b1b1b] ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <a href="#" className="btn-secondary py-2 px-5 text-sm">
            Sign In
          </a>
          <a href="#" className="btn-primary py-2 px-5 text-sm">
            Get Started for Free
          </a>
        </div>
        
        {/* MENU BUTTON */}
        <button className={`border size-10 flex items-center justify-center rounded-lg bg-yellow sm:hidden shadow-[2px_2px_0px_#1b1b1b]`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        
        {/* DESKTOP MENU */}
        <div className="sm:flex items-center gap-3 hidden">
          <a href="#" className="btn-secondary py-2 px-5 text-sm">
            Sign In
          </a>
          <a href="#" className="btn-primary py-2 px-5 text-sm">
            Get Started for Free
          </a>
        </div>
      </div>
    </header>
  </>);
}
