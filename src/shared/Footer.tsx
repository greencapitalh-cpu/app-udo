export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} UDoChain. All rights reserved.
      </div>
    </footer>
  )
}
