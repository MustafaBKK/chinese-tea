import Image from 'next/image';

export default function GreenTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        YEŞİL ÇAY
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Özenle seçilmiş Çin yeşil çayı koleksiyonumuz, her biri kendine özgü karakteri ve aromasıyla öne çıkan 
          seçkin çeşitlerden oluşmaktadır. Yeşil çaylarımız, taze yaprakların ustalıkla işlenmesiyle elde edilir ve 
          karakteristik tatlı, bitkisel ve umami notalarıyla tanınır. Çaylarımızı Çin'in ünlü çay bölgelerinden, özellikle 
          Hangzhou, Suzhou ve Huangshan gibi prestijli yeşil çay üretim merkezlerinden tedarik ediyoruz.
        </p>

        <p className="text-lg">
          Her bir yeşil çay yaprağı, geleneksel Çin yöntemleriyle hasat edilip işlenir. Çay ustalarımız, yaprakların 
          tazeliğini ve kalitesini korumak için özenle çalışır. Yılda bir kez Çin'e yaptığımız ziyaretlerle, en iyi 
          hasat dönemlerinde en kaliteli yaprakları seçiyor ve her partiyi titizlikle test ediyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/green-tea-leaves.jpg"
              alt="Taze Yeşil Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/green-tea-brew.jpg"
              alt="Demlenen Yeşil Çay"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Yeşil Çayın Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Minimal işlem görmüş, doğal ve taze yapraklar</li>
            <li>Hafif ve ferahlatıcı bir tada sahiptir</li>
            <li>Karakteristik tatlı ve bitkisel aromalar</li>
            <li>Zengin antioksidan içeriği</li>
            <li>Geleneksel Çin çay kültürünün temel taşlarından biridir</li>
          </ul>
        </div>

        <p className="text-lg">
          Çin yeşil çayları, binlerce yıllık bir geleneğin modern temsilcileridir. Her bir fincan, Çin çay kültürünün 
          inceliklerini ve zenginliğini yansıtır. Yeşil çaylarımız %100 doğal olup, hiçbir katkı maddesi içermez ve 
          vegan beslenmeye uygundur.
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
              <p>1-2 dakika</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 200ml su için 2g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Popüler Çin Yeşil Çayları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Longjing (Dragon Well)</h3>
              <p className="text-sm">Hangzhou'nun meşhur düz yapraklı yeşil çayı, tatlı ve kestane benzeri aromaya sahiptir.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Biluochun</h3>
              <p className="text-sm">Suzhou'dan gelen spiral şeklinde yapraklara sahip, çiçeksi ve meyvemsi aromalı prestijli çay.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Huangshan Maofeng</h3>
              <p className="text-sm">Huangshan Dağları'ndan toplanan, orkide benzeri kokuya sahip zarif yapraklı çay.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Liu'an Guapian</h3>
              <p className="text-sm">Ayçiçeği tohumu şeklindeki yapraklarıyla ünlü, tatlı ve orkide aromalı seçkin çay.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 