export default function Menu({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Last Line</h1>
      <button
        onClick={onStart}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Start Game
      </button>
    </div>
  );
}