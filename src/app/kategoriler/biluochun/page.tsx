import Image from 'next/image';

export default function BiluochunTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        BILUOCHUN ÇAYI
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Biluochun, "Yeşil Salyangoz Baharı" anlamına gelen, Çin'in en değerli yeşil çaylarından biridir. 
          Jiangsu Eyaleti'nin Dongting Dağı'nda yetişen bu özel çay, karakteristik spiral şeklindeki yaprakları 
          ve yoğun çiçeksi aromasıyla tanınır. Her bir yaprak, bahar başlangıcında elle toplanır ve geleneksel 
          yöntemlerle işlenir.
        </p>

        <p className="text-lg">
          Biluochun çayımız, sadece ilkbaharın ilk hasadından elde edilir. Taze filizler ve yapraklar, 
          şeftali, kayısı ve erik ağaçlarının arasında yetiştiğinden, çiçek polenlerinin etkisiyle benzersiz 
          bir aromaya kavuşur. Her parti, uzman çay ustaları tarafından özenle işlenir ve kalite kontrolünden geçirilir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/biluochun-leaves.jpg"
              alt="Biluochun Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/biluochun-brew.jpg"
              alt="Demlenen Biluochun Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Biluochun Çayının Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Spiral şeklinde kıvrılmış küçük yapraklar</li>
            <li>Yoğun çiçeksi ve meyvemsi aroma</li>
            <li>Taze ve ferahlatıcı tat profili</li>
            <li>İpeksi yumuşak içim</li>
            <li>Uzun süren tatlı bitiş</li>
          </ul>
        </div>

        <p className="text-lg">
          Ming Hanedanlığı döneminden beri üretilen Biluochun, Çin'in "On Ünlü Çayı" listesinde yer alan 
          prestijli bir çaydır. Kendine özgü işleme tekniği ve hassas toplama standartları sayesinde, 
          her demlemede mükemmel bir içim deneyimi sunar. Çayımız %100 organik olup, hiçbir katkı maddesi içermez.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demleme Önerileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Su Sıcaklığı</h3>
              <p>70-75°C</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Demleme Süresi</h3>
              <p>1-2 dakika</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 200ml su için 3g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Biluochun Kalite Sınıfları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Superior Grade Biluochun</h3>
              <p className="text-sm">İlk bahar hasadının en küçük ve en taze filizlerinden üretilen premium kalite.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">First Grade Biluochun</h3>
              <p className="text-sm">Erken bahar hasadından seçilen, yüksek kaliteli genç yapraklar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Special Grade Biluochun</h3>
              <p className="text-sm">Bahar ortası hasadından toplanan, dengeli ve karakteristik tada sahip yapraklar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Standard Grade Biluochun</h3>
              <p className="text-sm">Geç bahar hasadından elde edilen, klasik Biluochun karakterini yansıtan yapraklar.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 