import Image from 'next/image';

export default function WuyiYanChaTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        WUYI YAN CHA (WUYI KAYA ÇAYI)
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Wuyi Yan Cha, Çin'in Fujian eyaletindeki UNESCO Dünya Mirası listesinde yer alan Wuyi Dağları'ndan 
          gelen efsanevi bir oolong çayıdır. "Kaya Çayı" olarak da bilinen bu çay, dağların kayalık 
          yamaçlarında yetişen çay ağaçlarından elde edilir. Mineral açısından zengin toprak yapısı ve 
          benzersiz mikroklima, çaya karakteristik "yan yun" (kaya tadı) özelliğini kazandırır.
        </p>

        <p className="text-lg">
          Her yaprak geleneksel yöntemlerle işlenir ve ustaca kavrulur. Yapraklar orta-yüksek düzeyde 
          fermente edilir, bu da çaya zengin, kompleks ve derin bir karakter kazandırır. Wuyi çay ustaları, 
          nesillerdir aktarılan bilgi ve tecrübeyle bu özel çayı üretmeye devam etmektedir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/wuyi-leaves.jpg"
              alt="Wuyi Yan Cha Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/wuyi-brew.jpg"
              alt="Demlenen Wuyi Yan Cha"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Wuyi Yan Cha'nın Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Karakteristik mineral (yan yun) tadı</li>
            <li>Kavrulmuş, meyvemsi ve odunsu aromalar</li>
            <li>Zengin ve dolgun gövde</li>
            <li>Uzun süren tatlı bitiş</li>
            <li>Amber-kızıl renkte demleme</li>
          </ul>
        </div>

        <p className="text-lg">
          Wuyi Yan Cha, Çin çay kültürünün en değerli hazinelerinden biridir. Yüzyıllardır süregelen 
          üretim teknikleri ve bölgenin eşsiz coğrafi özellikleri, bu çayı dünya çapında aranan bir 
          ürün haline getirmiştir. Çayımız %100 organik olup, hiçbir katkı maddesi içermez.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demleme Önerileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Su Sıcaklığı</h3>
              <p>95-100°C</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Demleme Süresi</h3>
              <p>45-60 saniye</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 100ml su için 5-7g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Popüler Wuyi Yan Cha Çeşitleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Da Hong Pao</h3>
              <p className="text-sm">"Büyük Kırmızı Cüppe" - Wuyi kayalık çaylarının kralı, zengin ve derin karakterli.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Shui Xian</h3>
              <p className="text-sm">"Su Perisi" - Narkissos çiçeği aromalı, mineral karakterli klasik kaya çayı.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Rou Gui</h3>
              <p className="text-sm">"Tarçın" - Yoğun tarçın aromalı, tatlı ve baharatlı karakterli seçkin çay.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Tie Luo Han</h3>
              <p className="text-sm">"Demir Arhat" - Güçlü mineral karakterli, derin ve kompleks aromalı prestijli çay.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 