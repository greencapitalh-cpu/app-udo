import { Link, NavLink, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/payments', label: 'Payments' }
]

export default function Header() {
  const { pathname } = useLocation()
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand font-bold">U</div>
          <span className="font-semibold">UDoChain</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          {nav.map(i => (
            <NavLink key={i.to} to={i.to}
              className={clsx('text-sm', pathname===i.to ? 'text-brand font-medium' : 'text-gray-600 dark:text-gray-300')}>
              {i.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className={clsx('btn px-3 py-1.5 text-sm', pathname==='/login'?'bg-brand text-white':'bg-gray-100 dark:bg-gray-800')}>
            Login
          </Link>
          <Link to="/register" className="btn btn-primary text-sm">Sign up</Link>
        </div>
      </div>
    </header>
  )
}
