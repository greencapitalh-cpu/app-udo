import { Link } from 'react-router-dom'
import { t } from '../../../hooks/useAutoTranslate'

export default function Home(){
  return (
    <section className="mx-auto max-w-3xl">
      <div className="card">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="h-24 w-24 rounded-2xl bg-brand/10 flex items-center justify-center text-4xl text-brand font-bold">U</div>
          <h1 className="text-3xl font-bold">{t('welcome_title')}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t('welcome_desc')}</p>
          <div className="flex gap-3">
            <Link to="/login" className="btn btn-primary">{t('cta_login')}</Link>
            <Link to="/register" className="btn bg-gray-100 dark:bg-gray-800">{t('cta_register')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
