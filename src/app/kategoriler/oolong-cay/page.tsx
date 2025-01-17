import Image from 'next/image';

export default function OolongTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        OOLONG ÇAYI
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Bizim özenle seçilmiş taze Oolong çayı koleksiyonumuz, kendine has özellikleri ve lezzetleriyle öne çıkan, 
          büyüleyici aromalara sahip çeşitler içerir. Her bir Oolong çayımız, zengin ve kremsi dokusuyla, tatlı nektar 
          notaları ve cezbedici aromalarıyla karakterize edilir. Oolong çaylarımızı Çin'in Fujian Eyaleti'nin güneydoğusundaki 
          Anxi İlçesi'nden tedarik ediyoruz.
        </p>

        <p className="text-lg">
          Müşterilerimize sadece en kaliteli yaprak Oolong çayını sunabilmek için her yıl Çin'i ziyaret ediyor, 
          çay ustalarımızla bir araya geliyor ve satın almadan önce tüm çaylarımızı titizlikle test ediyoruz. 
          Çalıştığımız tüm çay ustaları, nesillerdir bu sanata adanmış ailelere mensup ve kendi bağımsız çay 
          bahçelerinin sahipleridir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/oolong-dark.jpg"
              alt="Kavrulmuş Oolong Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/oolong-light.jpg"
              alt="Açık Oolong Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Oolong Çayının Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Yeşil ve siyah çay arasında benzersiz bir profile sahiptir</li>
            <li>Zengin, kompleks ve katmanlı bir tada sahiptir</li>
            <li>Çiçeksi ve meyvemsi aromalar içerir</li>
            <li>Her demlemede farklı tatlar ortaya çıkarabilir</li>
            <li>Geleneksel Çin çay kültürünün önemli bir parçasıdır</li>
          </ul>
        </div>

        <p className="text-lg">
          Oolong çayı, 'Demir Tanrıça' veya 'Demir Buda' olarak da bilinir ve tüm Oolong çayları arasında 
          en ünlüsüdür. Evde, ofiste veya yolda kolayca hazırlanabilen çok yönlü bir çaydır. Tüm Oolong 
          çaylarımız %100 yaprak çayıdır ve bu nedenle vegan ve vejetaryenler için uygundur.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demleme Önerileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Su Sıcaklığı</h3>
              <p>85-90°C</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Demleme Süresi</h3>
              <p>2-3 dakika</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 200ml su için 2-3g</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 