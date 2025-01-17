import Image from 'next/image';

export default function HuangshanMaofengTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        HUANGSHAN MAOFENG ÇAYI
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Huangshan Maofeng, Çin'in ünlü Sarı Dağları'ndan (Huangshan) gelen prestijli bir yeşil çaydır. 
          "Maofeng" kelimesi "Tüylü Zirve" anlamına gelir ve çayın karakteristik görünümünü tanımlar. 
          Yüksek rakımlı dağ yamaçlarında, serin ve sisli bir ortamda yetiştirilen bu çay, benzersiz bir 
          tada ve aromaya sahiptir.
        </p>

        <p className="text-lg">
          Her bir yaprak, deneyimli çay ustaları tarafından ilkbaharın erken döneminde elle toplanır. 
          Toplama işlemi sadece sabahın erken saatlerinde, çiy henüz kurumadan gerçekleştirilir. Bu özel 
          hasat yöntemi, çayın karakteristik orkide benzeri aromasını ve tatlı tadını korur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/huangshan-leaves.jpg"
              alt="Huangshan Maofeng Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/huangshan-brew.jpg"
              alt="Demlenen Huangshan Maofeng Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Huangshan Maofeng Çayının Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>İnce, tüylü ve zarif yaprak yapısı</li>
            <li>Orkide benzeri çiçeksi aroma</li>
            <li>Tatlı ve yumuşak karakter</li>
            <li>Berrak ve parlak demleme rengi</li>
            <li>Uzun süren hoş bitiş</li>
          </ul>
        </div>

        <p className="text-lg">
          Huangshan Maofeng, Çin'in "On Ünlü Çayı" listesinde yer alan seçkin bir çaydır. Yüksek dağ 
          ikliminde yetişmesi ve geleneksel üretim yöntemleriyle işlenmesi, bu çaya eşsiz karakterini 
          kazandırır. Çayımız %100 organik olup, hiçbir katkı maddesi içermez.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demleme Önerileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Su Sıcaklığı</h3>
              <p>75-80°C</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Demleme Süresi</h3>
              <p>2-3 dakika</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 200ml su için 3g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Huangshan Maofeng Kalite Sınıfları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Imperial Grade</h3>
              <p className="text-sm">En erken hasat edilen, en genç ve taze yapraklardan üretilen premium kalite.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Supreme Grade</h3>
              <p className="text-sm">Erken bahar hasadından seçilen, yüksek kaliteli tek tomurcuk ve yapraklar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Premium Grade</h3>
              <p className="text-sm">Bahar ortası hasadından toplanan, klasik Maofeng karakterini yansıtan yapraklar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Standard Grade</h3>
              <p className="text-sm">Geç bahar hasadından elde edilen, ekonomik ancak kaliteli yapraklar.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 