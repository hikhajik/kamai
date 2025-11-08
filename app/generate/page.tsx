"use client";

import { useState } from "react";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate/brief", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
    setLoading(false);
  }

  return (
    <main className="min-h-screen p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Generate Website Brief</h1>

      <textarea
        placeholder="Describe the website you want..."
        className="w-full border rounded p-4 min-h-[120px]"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded hover:opacity-80 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </main>
  );
}
