import Link from 'next/link'

// export const dynamic = 'force-dynamic'

export default function CacheLayout({
  children,
}:{children: React.ReactNode}) {
  return (
    <section className="p-5">
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/ab1">ab1</Link>
          <Link href="/ab2">ab2</Link>
        </nav>
      {children}
    </section>
  )
}