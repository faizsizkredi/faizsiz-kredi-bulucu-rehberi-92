import { Helmet } from "react-helmet";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import DepositTypes from "@/components/mevduat/DepositTypes";
import DepositAdvantages from "@/components/mevduat/DepositAdvantages";
import InterestRates from "@/components/mevduat/InterestRates";
import DepositFAQ from "@/components/mevduat/DepositFAQ";

const Mevduat = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Mevduat Hesabı Açma {currentYear} | En Yüksek Faizli Mevduat</title>
        <meta 
          name="description" 
          content="En yüksek faizli mevduat hesapları, vadeli ve vadesiz mevduat seçenekleri, döviz mevduatı ve e-mevduat hesapları hakkında detaylı bilgi." 
        />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Mevduat Hesabı</h1>
          </div>
          <p className="text-gray-600 max-w-3xl">
            Birikimlerinizi güvenle değerlendirin, yüksek faiz oranlarından yararlanın. 
            Vadeli, vadesiz ve döviz mevduat hesapları ile paranızı en iyi şekilde değerlendirin.
          </p>
        </header>

        <DepositTypes />
        <DepositAdvantages />
        <InterestRates />
        <DepositFAQ />

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Hemen Mevduat Hesabı Açın</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Birikimlerinizi değerlendirmek için en uygun mevduat hesabını seçin, 
            yüksek faiz avantajlarından yararlanın.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Başvuru Yap
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Mevduat;