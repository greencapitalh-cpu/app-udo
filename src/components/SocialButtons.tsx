import { API_BASE } from '../hooks/useApi'

export default function SocialButtons(){
  return (
    <div className="space-y-3">
      <a className="w-full btn bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100"
         href={`${API_BASE}/api/auth/google`}>
        <span className="mr-2">🟢</span> Continue with Google
      </a>
      <a className="w-full btn bg-[#1877F2] text-white"
         href={`${API_BASE}/api/auth/facebook`}>
        <span className="mr-2">📘</span> Continue with Facebook
      </a>
      <button className="w-full btn bg-black text-white" disabled>
        <span className="mr-2"></span> Continue with Apple
      </button>
    </div>
  )
}
