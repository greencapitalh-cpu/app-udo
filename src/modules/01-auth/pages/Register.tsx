import { useState } from 'react'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button'
import SocialButtons from '../../../components/SocialButtons'
import Toast from '../../../ui/Toast'
import { apiPost } from '../../../hooks/useApi'
import { t } from '../../../hooks/useAutoTranslate'
import { Link } from 'react-router-dom'

export default function Register(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [toast,setToast]=useState<string|null>(null)

  async function onSubmit(e:React.FormEvent){
    e.preventDefault()
    try{
      await apiPost('/api/auth/register',{name,email,password})
      setToast('Account created. Check your email to verify.')
    }catch(err:any){ setToast(err.message || 'Registration failed') }
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="card space-y-6">
        <h2 className="text-2xl font-bold">{t('register_title')}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">{t('name')}</label>
            <Input placeholder="e.g. CL4UD101" value={name} onChange={e=>setName(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 text-sm">{t('email')}</label>
            <Input type="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 text-sm">{t('password')}</label>
            <Input type="password" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">{t('cta_register')}</Button>
        </form>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
          <SocialButtons />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('have_account')} <Link to="/login" className="text-brand underline">{t('cta_login')}</Link>
        </p>
      </div>
      {toast && <Toast message={toast} onClose={()=>setToast(null)} />}
    </div>
  )
}
