// app/page.tsx
export default function Home() {
  return (
    <div className="p-4">
      <h1>xNglo</h1>
      <p>font pikxr templet</p>

      {/* Mic test input */}
      <div className="mt-6">
        <label className="block mb-2">Mic test:</label>
        <textarea
          id="mic-test-input"
          rows={4}
          className="w-full p-2 border rounded-md text-black"
          placeholder="Mic button dabakar boliye..."
        />
      </div>

      {/* Sample xi38 text */}
      <h2 className="mt-6">sxmpl</h2>
      <p>xNglo Barxj wiQya nikejxn</p>
    </div>
  );
}