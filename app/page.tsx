export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-2xl text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">KAMAI — Next.js Starter</h1>
        <p className="opacity-80">
          If you can read this, your Vercel deployment works. 🎉
        </p>
        <p className="text-sm opacity-70">
          Edit <code className="px-1 py-0.5 rounded bg-gray-100">app/page.tsx</code> and push to GitHub to see instant redeploys.
        </p>
      </div>
    </main>
  );
}
