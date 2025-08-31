import React from "react";
import { UnitCard } from "@core/index";

// Recebe as informações da carta e como deve ser exibida
interface UnitCardLayoutProps {
  card: UnitCard;
  className?: string;
  style?: React.CSSProperties;
}

const UnitCardlayout: React.FC<UnitCardLayoutProps> = ({ card, className = "", style }) => {
  return (
    <div
      className={`relative rounded-2xl border-4 border-green-950 overflow-hidden bg-black font-serif${className}`}
      style={{
        width: "18rem",
        aspectRatio: "5 / 7",
        transformOrigin: "top left",
        ...style,
      }}
    >
      {/* Background */}
      <img
        src={card.image}
        alt={card.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Escurece a carta parcialmente para facilitar a leitura */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-950 to-transparent"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="absolute top-0 right-0 flex w-10 h-10 
        items-baseline justify-center 
        bg-gradient-to-bl from-green-950 to-transparent rounded-tl-md rounded-bl-2xl rounded-br-2xl">
          <span className="text-3xl font-bold text-red-700">{card.hitpoints}</span>
        </div>

        {/* Attacks */}
        <div className="absolute top-1/2 left-2 right-2 overflow-y-auto rounded p-2">
          <ul className="space-y-2">
            {card.attacks.map((atk, index) => (
              <li
                key={index}
                className="border rounded p-1 bg-gray-900/80 text-xs text-white"
              >
                <div className="flex justify-between font-semibold">
                  <span>{atk.name}</span>
                  <span className="text-blue-400">Cost: {atk.cost}</span>
                </div>
                <div className="flex justify-between text-red-400 font-bold">
                  <span>Damage: {atk.damage}</span>
                </div>
                {atk.effectDescription && (
                  <p className="text-[10px] text-gray-300 mt-1 italic">
                    {atk.effectDescription}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 font-bold text-red-700 text-base text-center py-1 uppercase">
          {card.name}
        </div>
      </div>
    </div>
  );
}

export default UnitCardlayout;