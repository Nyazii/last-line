import { UnitCardlayout } from "./ui/index";
import { OvoDeDragao } from "./core";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-10 p-6">
      {/* Vários tamanhos da mesma carta */}
      <div className="flex gap-20">
        <div>
          <UnitCardlayout card={OvoDeDragao} />
        </div>
      </div>
    </div>
  );
}

export default App;