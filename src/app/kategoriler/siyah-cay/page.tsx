import Image from 'next/image';

export default function BlackTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        SİYAH ÇAY
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Çin'in en prestijli siyah çaylarından oluşan koleksiyonumuz, yüzyıllardır süregelen geleneksel üretim 
          yöntemleriyle hazırlanmaktadır. Çin'de "Kırmızı Çay" (Hong Cha) olarak bilinen bu çaylar, tam fermente 
          edilmiş yapraklardan elde edilir ve karakteristik tatlı, meyvemsi ve baharatlı aromalarıyla tanınır. 
          Yunnan, Fujian ve Keemun bölgelerinin seçkin çay bahçelerinden özenle toplanan yapraklar kullanılmaktadır.
        </p>

        <p className="text-lg">
          Her bir siyah çay partisi, deneyimli çay ustaları tarafından geleneksel yöntemlerle işlenir. Yaprakların 
          kıvrılması, oksidasyon süreci ve kurutma aşamaları titizlikle kontrol edilir. Çaylarımızın kalitesini 
          garanti etmek için düzenli olarak Çin'deki üreticilerimizi ziyaret ediyor ve her partiyi özenle test ediyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/black-tea-leaves.jpg"
              alt="Siyah Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/black-tea-brew.jpg"
              alt="Demlenen Siyah Çay"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Çin Siyah Çayının Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Tam fermente edilmiş yapraklar</li>
            <li>Zengin ve dolgun gövdeli bir içim</li>
            <li>Karamel, malt ve meyvemsi notalar</li>
            <li>Doğal tatlılık ve yumuşak aroma</li>
            <li>Geleneksel Çin üretim teknikleriyle işlenir</li>
          </ul>
        </div>

        <p className="text-lg">
          Çin siyah çayları, diğer bölgelerin siyah çaylarından farklı olarak daha yumuşak ve zarif bir karaktere 
          sahiptir. Bu çaylar genellikle süt ve şeker eklenmeden tüketilir, böylece doğal tatları ve aromaları 
          tam anlamıyla ortaya çıkar. Tüm siyah çaylarımız %100 doğal olup, katkı maddesi içermez.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demleme Önerileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Su Sıcaklığı</h3>
              <p>90-95°C</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Demleme Süresi</h3>
              <p>3-5 dakika</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 200ml su için 3-4g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Seçkin Çin Siyah Çayları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Keemun</h3>
              <p className="text-sm">Çin'in en ünlü siyah çayı, orkide benzeri çiçeksi aroması ve hafif kakao notalarıyla tanınır.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Yunnan Dian Hong</h3>
              <p className="text-sm">Altın tomurcuklu, bal ve karamel notaları taşıyan, zengin ve dolgun gövdeli prestijli çay.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Fujian Zheng Shan Xiao Zhong</h3>
              <p className="text-sm">Geleneksel tütsüleme yöntemiyle üretilen, çam ve orkide notaları taşıyan eşsiz çay.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Jin Jun Mei</h3>
              <p className="text-sm">Sadece altın tomurcuklardan üretilen, meyve ve çiçek notaları taşıyan premium siyah çay.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 