import Image from 'next/image';

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800 text-center">
        ÇAY SEREMONİSİ AKSESUARLARI
      </h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-center text-gray-700">
          Geleneksel Çin çay kültüründe, her bir aksesuar özenle seçilir ve kullanılır. Doğru aksesuarların kullanımı, 
          çay deneyimini zenginleştirir ve seremoninin ruhunu yansıtır. Koleksiyonumuzda yer alan her parça, 
          yüzyıllardır süregelen çay kültürünün modern yorumlarını sizlere sunmaktadır.
        </p>
      </div>

      {/* Temel Çay Araçları */}
      <section className="mb-20">
        <h2 className="text-3xl font-serif mb-8 text-emerald-800 text-center">Temel Çay Araçları</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Çay Maşası */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-72">
              <Image
                src="/images/tea-tongs.jpg"
                alt="Çay Maşası"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Bambu Çay Maşası</h3>
              <p className="text-gray-600 mb-4">
                El yapımı bambu maşalar, çay yapraklarını nazikçe tutmak ve servis etmek için idealdir.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Doğal bambu yapı</li>
                <li>• Ergonomik tutuş</li>
                <li>• 12cm uzunluk</li>
              </ul>
            </div>
          </div>

          {/* Çay Ölçeği */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-72">
              <Image
                src="/images/tea-scoop.jpg"
                alt="Çay Ölçeği"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pirinç Çay Ölçeği</h3>
              <p className="text-gray-600 mb-4">
                Hassas ölçüm için tasarlanmış, el yapımı pirinç çay kaşığı.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Antik pirinç yapı</li>
                <li>• 5ml kapasite</li>
                <li>• Dekoratif detaylar</li>
              </ul>
            </div>
          </div>

          {/* Çay İğnesi */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-72">
              <Image
                src="/images/tea-pick.jpg"
                alt="Çay İğnesi"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Çay İğnesi</h3>
              <p className="text-gray-600 mb-4">
                Preslenmiş çayları ayırmak ve parçalamak için özel tasarım.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Paslanmaz çelik</li>
                <li>• Ahşap sap</li>
                <li>• 15cm uzunluk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Çay Servis Ekipmanları */}
      <section className="mb-20 bg-emerald-50 py-16 px-4 rounded-2xl">
        <h2 className="text-3xl font-serif mb-8 text-emerald-800 text-center">Çay Servis Ekipmanları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Çay Tabağı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/tea-tray.jpg"
                alt="Bambu Çay Tabağı"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Bambu Çay Tabağı</h3>
              <p className="text-gray-600 mb-4">
                Su drenajlı, özel tasarım servis tabağı.
              </p>
            </div>
          </div>

          {/* Çay Süzgeci */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/tea-strainer.jpg"
                alt="Çay Süzgeci"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pirinç Süzgeç</h3>
              <p className="text-gray-600 mb-4">
                İnce gözenekli, dekoratif süzgeç.
              </p>
            </div>
          </div>

          {/* Çay Dengeleyici */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/tea-pitcher.jpg"
                alt="Çay Dengeleyici"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Çay Dengeleyici</h3>
              <p className="text-gray-600 mb-4">
                Demleme eşitleyici, fair cup.
              </p>
            </div>
          </div>

          {/* Çay Altlığı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/tea-coaster.jpg"
                alt="Çay Altlığı"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Bambu Altlık</h3>
              <p className="text-gray-600 mb-4">
                Dekoratif fincan altlıkları.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dekoratif Aksesuarlar */}
      <section className="mb-20">
        <h2 className="text-3xl font-serif mb-8 text-emerald-800 text-center">Dekoratif Aksesuarlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Çay Peti */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-72">
              <Image
                src="/images/tea-pet.jpg"
                alt="Seramik Çay Peti"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Seramik Çay Peti</h3>
              <p className="text-gray-600 mb-4">
                Şans getiren geleneksel çay masası figürleri.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Yixing kili</li>
                <li>• Renk değiştiren yüzey</li>
                <li>• El yapımı</li>
              </ul>
            </div>
          </div>

          {/* Tütsülük */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-72">
              <Image
                src="/images/incense-holder.jpg"
                alt="Seramik Tütsülük"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Seramik Tütsülük</h3>
              <p className="text-gray-600 mb-4">
                Çay seremonisi için özel tasarım tütsülük.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Porselen yapı</li>
                <li>• Geleneksel motifler</li>
                <li>• Çok amaçlı kullanım</li>
              </ul>
            </div>
          </div>

          {/* Çay Fırçası */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-72">
              <Image
                src="/images/tea-brush.jpg"
                alt="Bambu Çay Fırçası"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Bambu Çay Fırçası</h3>
              <p className="text-gray-600 mb-4">
                Geleneksel temizlik ve servis fırçası.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Doğal at kılı</li>
                <li>• Bambu sap</li>
                <li>• El yapımı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Saklama ve Taşıma */}
      <section className="mb-20 bg-emerald-50 py-16 px-4 rounded-2xl">
        <h2 className="text-3xl font-serif mb-8 text-emerald-800 text-center">Saklama ve Taşıma</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Çay Saklama Kabı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="/images/tea-caddy.jpg"
                alt="Çay Saklama Kabı"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Porselen Saklama Kabı</h3>
              <p className="text-gray-600 mb-4">
                Hava geçirmez kapaklı, özel tasarım saklama kapları.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Çift katlı kapak sistemi</li>
                <li>• Nem kontrolü</li>
                <li>• UV koruması</li>
                <li>• 250g kapasite</li>
              </ul>
            </div>
          </div>

          {/* Seyahat Seti */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="/images/travel-set.jpg"
                alt="Seyahat Çay Seti"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Seyahat Çay Seti</h3>
              <p className="text-gray-600 mb-4">
                Kompakt tasarımlı, taşınabilir çay seti.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• 4 fincan ve 1 demlik</li>
                <li>• Koruyucu çanta</li>
                <li>• Katlanabilir tasarım</li>
                <li>• Darbeye dayanıklı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bakım ve Temizlik */}
      <section className="mb-20">
        <h2 className="text-3xl font-serif mb-8 text-emerald-800 text-center">Bakım ve Temizlik</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Çay Havlusu */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-72">
              <Image
                src="/images/tea-towel.jpg"
                alt="Çay Havlusu"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Çay Havlusu</h3>
              <p className="text-gray-600 mb-4">
                %100 pamuk, el işi nakışlı havlular.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Yüksek emicilik</li>
                <li>• Yumuşak doku</li>
                <li>• 30x30cm</li>
              </ul>
            </div>
          </div>

          {/* Temizlik Fırçası Seti */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-72">
              <Image
                src="/images/cleaning-set.jpg"
                alt="Temizlik Fırçası Seti"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Temizlik Fırçası Seti</h3>
              <p className="text-gray-600 mb-4">
                Özel tasarım temizlik fırçaları seti.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• 3 farklı boy</li>
                <li>• Doğal kıl</li>
                <li>• Bambu saplar</li>
              </ul>
            </div>
          </div>

          {/* Kurutma Standı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-72">
              <Image
                src="/images/drying-rack.jpg"
                alt="Kurutma Standı"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Bambu Kurutma Standı</h3>
              <p className="text-gray-600 mb-4">
                Demlik ve fincanlar için kurutma standı.
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Katlanabilir tasarım</li>
                <li>• Doğal bambu</li>
                <li>• 6 bölmeli</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bakım Önerileri */}
      <section className="bg-emerald-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-serif mb-6 text-emerald-800 text-center">
          Aksesuar Bakım Önerileri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-medium text-lg mb-3 text-emerald-700">Bambu Ürünler</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Nemli ortamlardan uzak tutun</li>
              <li>• Düzenli havalandırın</li>
              <li>• Doğal bambu yağı ile koruyun</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-medium text-lg mb-3 text-emerald-700">Seramik Ürünler</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Yumuşak süngerle temizleyin</li>
              <li>• Sert darbelere karşı koruyun</li>
              <li>• Ani ısı değişiminden kaçının</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-medium text-lg mb-3 text-emerald-700">Metal Ürünler</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Her kullanımdan sonra kurulayın</li>
              <li>• Paslanmaya karşı koruyun</li>
                <li>• Yumuşak bezle parlatın</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-medium text-lg mb-3 text-emerald-700">Tekstil Ürünler</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Düzenli olarak yıkayın</li>
              <li>• Ilık suda bekletin</li>
              <li>• Doğal kurutun</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 