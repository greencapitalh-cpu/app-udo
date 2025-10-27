import Header from './Header'
import Footer from './Footer'
import AppRoutes from '../router'
import { AuthProvider } from '../context/AuthContext'

export default function RootLayout(){
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <AppRoutes />
          </div>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}
