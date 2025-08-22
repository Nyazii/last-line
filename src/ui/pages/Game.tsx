import { Board, Hand } from "../components";

export default function Game() {
  return (
    <div className="flex flex-col gap-4">
      <Board />
      <Hand />
    </div>
  );
}