// app-udo/src/shared/Header.tsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo UDoChain */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo-udochain.png"
            alt="UDoChain Logo"
            className="h-10 w-10 object-contain drop-shadow-sm"
          />
          <span className="font-semibold text-udo-primary dark:text-white tracking-tight">
            UDoChain
          </span>
        </Link>

        {/* Navegación */}
        <nav className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-4">
          <Link to="/login" className="hover:text-udo-primary">
            Login
          </Link>
          <Link to="/register" className="hover:text-udo-primary">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
