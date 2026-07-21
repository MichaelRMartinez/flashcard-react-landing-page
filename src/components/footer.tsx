import { BookOpen } from "lucide-react";

export default function Footer() {
  return (<>
  <footer className="py-8 border-t border-neutral-600">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* FOOTER LOGO */}
      <div className="flex items-center gap-2">
        <div className="nav-logo size-7">
          <BookOpen size={20} />
        </div>
        <span className="font-bold tracking-tight">FlashMaster</span>
      </div>
      {/* COPYRIGHT INFO */}
      <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
      {/* LINKS */}
      <div className="flex gap-4">
        <a href="#" className="underline hover:underline-offset-2 hover:text-blue-800">Sign In</a>
        <a href="#" className="underline hover:underline-offset-2 hover:text-blue-800">Get Started</a>
      </div>
    </div>
  </footer>
  </>);
}
