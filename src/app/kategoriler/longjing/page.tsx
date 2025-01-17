import Image from 'next/image';

export default function LongjingTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        LONGJING (DRAGON WELL) ÇAYI
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Longjing çayı, Çin'in en prestijli yeşil çaylarından biridir ve "Ejder Kuyusu" olarak da bilinir. 
          Bu eşsiz çay, Hangzhou'nun Batı Gölü (West Lake) bölgesindeki özel bahçelerde yetiştirilir. Düz ve parlak 
          yaprakları, karakteristik kestane benzeri aroması ve tatlı-umami dengesiyle tanınır. Her yaprak elle 
          toplanır ve geleneksel tavada kavurma yöntemiyle işlenir.
        </p>

        <p className="text-lg">
          Longjing çayımız, sadece bahar hasadından elde edilir ve en yüksek kalite standardını temsil eden 
          "pre-Qingming" (清明前) yapraklarından üretilir. Her yıl Çin'e yaptığımız ziyaretlerde, en iyi Longjing 
          üreticileriyle doğrudan çalışıyor ve en taze ürünleri seçiyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/longjing-leaves.jpg"
              alt="Longjing Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/longjing-brew.jpg"
              alt="Demlenen Longjing Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Longjing Çayının Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Düz, parlak ve zümrüt yeşili yapraklar</li>
            <li>Karakteristik kestane ve tatlı aromalar</li>
            <li>Yumuşak ve dengeli umami tadı</li>
            <li>Uzun süren tatlı son damak</li>
            <li>Elle işlenmiş premium kalite</li>
          </ul>
        </div>

        <p className="text-lg">
          Longjing çayı, Çin İmparatorluk sarayının resmi çayı olarak tarihe geçmiştir. Qianlong İmparatoru 
          tarafından "Çin Çaylarının İmparatoru" olarak adlandırılan bu çay, geleneksel Çin çay kültürünün en 
          değerli örneklerinden biridir. Çayımız %100 organik olup, hiçbir katkı maddesi içermez.
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
              <p>Her 200ml su için 4g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Longjing Kalite Sınıfları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Pre-Qingming Longjing</h3>
              <p className="text-sm">Bahar başlangıcında toplanan en premium kalite, taze ve zarif aromalı yapraklar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Shi Feng Longjing</h3>
              <p className="text-sm">Aslan Tepesi bölgesinden toplanan, mineral açısından zengin toprakta yetişen özel yapraklar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Ming Qian Longjing</h3>
              <p className="text-sm">Temiz Aydınlık Festivali öncesi toplanan, yüksek kaliteli genç yapraklar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Yu Qian Longjing</h3>
              <p className="text-sm">Bahar yağmurları sonrası toplanan, dengeli ve yumuşak karakterli yapraklar.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 