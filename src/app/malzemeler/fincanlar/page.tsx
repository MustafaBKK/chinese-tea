import Image from 'next/image';

export default function TeaCupsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        GELENEKSEL ÇİN ÇAY FİNCANLARI
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Çin çay kültüründe fincan seçimi, çayın tadını ve aromasını tam anlamıyla deneyimlemek için 
          kritik öneme sahiptir. Her fincan türü, belirli çay çeşitleriyle uyum içinde çalışacak şekilde 
          tasarlanmıştır. Koleksiyonumuzda yer alan fincanlar, geleneksel el sanatlarının inceliğini 
          yansıtmaktadır.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {/* Porselen Fincan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/porcelain-cup.jpg"
                alt="Porselen Çay Fincanı"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Porselen Fincan</h3>
              <p className="text-gray-600 mb-4">
                İnce işçilikli porselen fincanlar, özellikle yeşil ve beyaz çayların aromasını korumak için idealdir.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Kapasitesi: 50-75ml</li>
                <li>• El boyaması desenler</li>
                <li>• Yüksek kalite porselen</li>
              </ul>
            </div>
          </div>

          {/* Seramik Fincan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/ceramic-cup.jpg"
                alt="Seramik Çay Fincanı"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Seramik Fincan</h3>
              <p className="text-gray-600 mb-4">
                Geleneksel seramik fincanlar, oolong ve siyah çayların zengin tadını vurgulamak için mükemmeldir.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Kapasitesi: 75-100ml</li>
                <li>• El yapımı üretim</li>
                <li>• Doğal seramik</li>
              </ul>
            </div>
          </div>

          {/* Cam Fincan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/glass-cup.jpg"
                alt="Cam Çay Fincanı"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Çift Cidarlı Cam Fincan</h3>
              <p className="text-gray-600 mb-4">
                Modern tasarımlı, ısıya dayanıklı cam fincanlar. Çayın rengini ve berraklığını görmek için ideal.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Kapasitesi: 100-150ml</li>
                <li>• Çift cidarlı yapı</li>
                <li>• Isı yalıtımlı tasarım</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Fincan Seçim Kriterleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Malzeme</h3>
              <p className="text-sm">Çay türüne göre porselen, seramik veya cam seçimi önemlidir. Her malzeme farklı tat profilleri sunar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Boyut</h3>
              <p className="text-sm">Gong Fu çay seremonisi için küçük (30-50ml), günlük kullanım için orta boy (80-150ml) idealdir.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Form</h3>
              <p className="text-sm">Fincanın ağız genişliği ve derinliği, çayın aromasını ve tadını etkiler.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Isı Tutma</h3>
              <p className="text-sm">Kalın duvarlı fincanlar ısıyı daha iyi korur, ince duvarlar hızlı soğuma sağlar.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Fincan Bakım Önerileri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Her kullanımdan sonra yumuşak bir şekilde temizleyin</li>
            <li>Sert temizlik malzemeleri kullanmaktan kaçının</li>
            <li>Ani sıcaklık değişimlerine maruz bırakmayın</li>
            <li>Çizilmelere karşı koruyun</li>
            <li>Temiz ve kuru bir yerde saklayın</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 