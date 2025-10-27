import { clsx } from 'clsx'
export default function Button({children, className, ...props}: any){
  return <button className={clsx('btn btn-primary', className)} {...props}>{children}</button>
}
