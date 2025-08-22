export default function Card({ name, description }: { name: string; description: string }) {
  return (
    <div className="border p-2 rounded bg-white shadow">
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}