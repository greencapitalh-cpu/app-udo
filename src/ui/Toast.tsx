import { useEffect, useState } from 'react'
export default function Toast({message, onClose}:{message:string,onClose:()=>void}){
  const [show,setShow]=useState(true)
  useEffect(()=>{ const id=setTimeout(()=>{setShow(false); onClose()},3000); return ()=>clearTimeout(id)},[])
  if(!show) return null
  return <div className="fixed bottom-4 right-4 rounded-md bg-black/80 text-white px-4 py-2">{message}</div>
}
