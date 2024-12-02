import { Building } from "lucide-react";
import BankLoanAmountDetail from "@/components/bank/BankLoanAmountDetail";
import { Bank } from "@/types/bank";

const CURRENT_BANK: Bank = {
  name: "Garanti BBVA",
  icon: <Building className="w-8 h-8 text-green-600" />,
  specialOffer: "5.000 TL Faizsiz Kredi!",
  interestRate: "%0",
  term: "6 Ay",
  amount: "5.000 TL",
  details: [
    "Yeni müşterilere özel fırsat",
    "6 ay vade ile faizsiz kredi",
    "Masrafsız kullandırım"
  ],
  lastUpdate: new Date().toLocaleDateString('tr-TR')
};

const OTHER_BANKS: Bank[] = [
  {
    name: "QNB",
    icon: <Building className="w-8 h-8 text-purple-600" />,
    specialOffer: "5.000 TL Faizsiz Kredi",
    interestRate: "%0",
    term: "6 Ay",
    amount: "5.000 TL",
    details: [
      "%0 faiz ile 6 ay vade",
      "Masrafsız kullandırım",
      "Anında başvuru sonucu"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FiveThousandLoan = () => {
  return (
    <BankLoanAmountDetail
      bankName="Garanti BBVA"
      amount="5.000"
      currentBank={CURRENT_BANK}
      otherBanks={OTHER_BANKS}
    />
  );
};

export default FiveThousandLoan;