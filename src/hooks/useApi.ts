export const API_BASE = import.meta.env.VITE_API_BASE || 'https://api-udo.onrender.com'

export async function apiPost<T>(path: string, data: any): Promise<T>{
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if(!res.ok){
    const msg = await res.text()
    throw new Error(msg || `Request failed: ${res.status}`)
  }
  return res.json()
}
