import { useState } from 'react'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button'
import SocialButtons from '../../../components/SocialButtons'
import { apiPost } from '../../../hooks/useApi'
import Toast from '../../../ui/Toast'
import { t } from '../../../hooks/useAutoTranslate'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [toast,setToast]=useState<string|null>(null)
  const nav=useNavigate()

  async function onSubmit(e:React.FormEvent){
    e.preventDefault()
    try{
      await apiPost('/api/auth/login',{email,password})
      setToast('Logged in successfully'); 
      nav('/dashboard')
    }catch(err:any){ setToast(err.message || 'Login failed') }
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="card space-y-6">
        <h2 className="text-2xl font-bold">{t('login_title')}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">{t('email')}</label>
            <Input type="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 text-sm">{t('password')}</label>
            <Input type="password" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">{t('continue')}</Button>
        </form>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
          <SocialButtons />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('no_account')} <Link to="/register" className="text-brand underline">{t('cta_register')}</Link>
        </p>
      </div>
      {toast && <Toast message={toast} onClose={()=>setToast(null)} />}
    </div>
  )
}
