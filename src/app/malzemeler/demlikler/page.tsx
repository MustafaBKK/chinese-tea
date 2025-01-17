import Image from 'next/image';

export default function TeapotsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        GELENEKSEL ÇİN DEMLİKLERİ
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Geleneksel Çin çay kültüründe, doğru demlik seçimi mükemmel bir çay deneyimi için kritik öneme sahiptir. 
          Her bir demlik türü, belirli çay çeşitleri için özel olarak tasarlanmıştır. Koleksiyonumuzda yer alan 
          demlikler, yüzyıllardır süregelen geleneksel üretim tekniklerini modern tasarımlarla birleştirmektedir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {/* Yixing Demlik */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/yixing-teapot.jpg"
                alt="Yixing Kil Demlik"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Yixing Kil Demlik</h3>
              <p className="text-gray-600 mb-4">
                Özel mor kil kullanılarak el yapımı üretilen bu demlikler, özellikle oolong ve pu-erh çayları için idealdir.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Kapasitesi: 150-200ml</li>
                <li>• El yapımı üretim</li>
                <li>• Doğal mor kil</li>
              </ul>
            </div>
          </div>

          {/* Gaiwan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/gaiwan.jpg"
                alt="Gaiwan"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Gaiwan</h3>
              <p className="text-gray-600 mb-4">
                Geleneksel Çin çay demleme kabı, tüm çay türleri için kullanılabilir. Özellikle yeşil ve beyaz çaylar için mükemmeldir.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Kapasitesi: 100-150ml</li>
                <li>• Porselen yapı</li>
                <li>• Çok yönlü kullanım</li>
              </ul>
            </div>
          </div>

          {/* Cam Demlik */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/glass-teapot.jpg"
                alt="Cam Demlik"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Borosilikat Cam Demlik</h3>
              <p className="text-gray-600 mb-4">
                Modern tasarımlı, ısıya dayanıklı cam demlikler. Çayın rengini ve yaprakların açılışını izlemek için ideal.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Kapasitesi: 300-500ml</li>
                <li>• Isıya dayanıklı cam</li>
                <li>• Çıkarılabilir süzgeç</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Demlik Seçim Kriterleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Malzeme</h3>
              <p className="text-sm">Çay türüne göre kil, porselen veya cam seçimi önemlidir. Her malzemenin kendine özgü avantajları vardır.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Kapasite</h3>
              <p className="text-sm">Tek kişilik demleme için 100-150ml, grup için 300-500ml ideal hacimdir.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Kullanım Amacı</h3>
              <p className="text-sm">Gong Fu çay seremonisi için küçük, günlük kullanım için orta-büyük boy tercih edilmelidir.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Bakım</h3>
              <p className="text-sm">Kil demlikler özel bakım gerektirir, cam ve porselen demlikler daha kolay temizlenir.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demlik Bakım Önerileri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Her kullanımdan sonra ılık suyla durulayın</li>
            <li>Deterjan kullanmaktan kaçının</li>
            <li>Kil demlikleri asla bulaşık makinesinde yıkamayın</li>
            <li>Kullanımdan sonra iyice kurulayın</li>
            <li>Serin ve kuru bir yerde saklayın</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 