import Button from '../../../ui/Button'

const plans = [
  { name: 'Starter', price: '$10', credits: '80 credits', cta: 'Buy now' },
  { name: 'Growth', price: '$50', credits: '400 credits', cta: 'Buy now' },
  { name: 'Scale', price: '$200', credits: '1,600 credits', cta: 'Buy now' },
  { name: 'Enterprise', price: 'Contact us', credits: 'Custom', cta: 'Contact sales' }
]

export default function Payments(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Purchase Credits</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map(p => (
          <div key={p.name} className="card text-center">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{p.credits}</p>
            <div className="text-2xl font-bold mt-4">{p.price}</div>
            <Button className="w-full mt-6">{p.cta}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
