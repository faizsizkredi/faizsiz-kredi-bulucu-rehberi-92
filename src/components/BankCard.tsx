import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode } from "react";

interface BankCardProps {
  name: string;
  icon: ReactNode;
  specialOffer: string;
  interestRate: string;
  term: string;
  amount: string;
  details: string[];
  promotionScore?: number;
  lastUpdate?: string;
}

const BankCard = ({
  name,
  icon,
  specialOffer,
  interestRate,
  term,
  amount,
  details,
  lastUpdate,
}: BankCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden mb-4 transition-all hover:shadow-lg">
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{specialOffer}</p>
              {lastUpdate && (
                <p className="text-xs text-gray-400">Son güncelleme: {lastUpdate}</p>
              )}
            </div>
          </div>
          <button
            onClick={() => window.open("#", "_blank")}
            className="bg-secondary hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Başvur →
          </button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Faiz Oranı</p>
            <p className="font-semibold">{interestRate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Vade</p>
            <p className="font-semibold">{term}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Tutar</p>
            <p className="font-semibold">{amount}</p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 mt-4 text-primary hover:text-blue-700 transition-colors"
        >
          Detay
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {details.map((detail, index) => (
              <p key={index} className="text-sm text-gray-600 mb-2">
                ℹ️ {detail}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BankCard;