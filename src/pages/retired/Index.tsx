import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";

const RETIRED_BANKS = [
  {
    name: "Ziraat Bankası",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "Emekliye Özel %0 Faizli Kredi!",
    interestRate: "%0",
    term: "36 Ay",
    amount: "100.000 TL",
    details: [
      "Emeklilere özel promosyon ödemesi",
      "Ücretsiz emekli maaş hesabı",
      "İnternet bankacılığında özel avantajlar"
    ],
    promotionScore: 95,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Vakıfbank",
    icon: <Building2 className="w-8 h-8 text-blue-700" />,
    specialOffer: "Emekli Dostu Kredi!",
    interestRate: "%0.79",
    term: "36 Ay",
    amount: "150.000 TL",
    details: [
      "Emekli promosyonu",
      "Özel bankacılık hizmetleri",
      "Masrafsız EFT/Havale"
    ],
    promotionScore: 92,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Halkbank",
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    specialOffer: "Emekliye Özel Avantajlı Kredi!",
    interestRate: "%0.89",
    term: "36 Ay",
    amount: "125.000 TL",
    details: [
      "Emekliye özel promosyon",
      "Ücretsiz hesap işletim ücreti",
      "İndirimli kredi kartı aidatı"
    ],
    promotionScore: 90,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "İş Bankası",
    icon: <Building2 className="w-8 h-8 text-purple-600" />,
    specialOffer: "Maximum Emekli Kredisi!",
    interestRate: "%0.99",
    term: "36 Ay",
    amount: "200.000 TL",
    details: [
      "Maximum kart ile ek avantajlar",
      "Emekliye özel sigorta indirimi",
      "7/24 özel müşteri hizmetleri"
    ],
    promotionScore: 88,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Garanti BBVA",
    icon: <Landmark className="w-8 h-8 text-green-700" />,
    specialOffer: "Bonus Emekli Kredisi!",
    interestRate: "%1.09",
    term: "36 Ay",
    amount: "175.000 TL",
    details: [
      "Bonus kart ile taksit avantajları",
      "Emekliye özel promosyon",
      "Ücretsiz para transferleri"
    ],
    promotionScore: 87,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "QNB Finansbank",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
    specialOffer: "CardFinans Emekli Kredisi!",
    interestRate: "%1.19",
    term: "36 Ay",
    amount: "150.000 TL",
    details: [
      "CardFinans ile özel indirimler",
      "Emekliye özel mevduat faizi",
      "Ücretsiz ATM kullanımı"
    ],
    promotionScore: 85,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Akbank",
    icon: <CircleDollarSign className="w-8 h-8 text-red-600" />,
    specialOffer: "Axess Emekli Kredisi!",
    interestRate: "%1.29",
    term: "36 Ay",
    amount: "160.000 TL",
    details: [
      "Axess kart ile ek taksit fırsatları",
      "Emekliye özel promosyon",
      "Dijital bankacılıkta ücretsiz işlemler"
    ],
    promotionScore: 84,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "Emekli kredisi başvurusu için hangi belgeler gerekli?",
    answer: "Emekli maaş kartı veya emekli kimlik belgesi, nüfus cüzdanı ve gelir belgesi ile başvuru yapabilirsiniz. Bazı bankalar ek belgeler talep edebilir."
  },
  {
    question: "Emekliler için en avantajlı kredi hangi bankada?",
    answer: "Her bankanın sunduğu avantajlar farklılık gösterebilir. Ziraat Bankası, Vakıfbank ve Halkbank gibi kamu bankaları genellikle daha uygun faiz oranları ve promosyonlar sunmaktadır."
  },
  {
    question: "Emekli kredisi için yaş sınırı var mı?",
    answer: "Evet, bankalar genellikle 70-75 yaş üst sınırı uygulamaktadır. Kredi vadesi bittiğinde müşterinin yaşı bu sınırı geçmemelidir."
  }
];

const RetiredIndex = () => {
  const [currentTab] = useState("retired");

  return (
    <FilterContent
      title="Emekliye Özel Kredi Kampanyaları 2024"
      description="2024 yılında emeklilere özel kredi kampanyaları, düşük faizli krediler ve promosyon fırsatları. En avantajlı emekli kredisi teklifleri!"
      banks={RETIRED_BANKS}
      currentTab={currentTab}
      onSortChange={() => {}}
      faqItems={FAQ_ITEMS}
    />
  );
};

export default RetiredIndex;