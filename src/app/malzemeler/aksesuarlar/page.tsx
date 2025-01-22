import Image from 'next/image';

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/tea-ceremony.jpg"
          alt="Çay Seremonisi"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-serif mb-6">Çay Seremonisi Sanatı</h1>
          <p className="text-xl max-w-2xl text-center leading-relaxed">
            Yüzyıllardır süregelen bir geleneğin zarif aletleri, 
            her biri ustalıkla şekillendirilmiş ve ruhla bezeli.
          </p>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Giriş Yazısı */}
        <div className="prose prose-lg mx-auto mb-24 text-center">
          <p className="text-xl leading-relaxed text-gray-700">
            Çin çay kültüründe her bir aksesuar, yüzyılların bilgeliğini ve estetiğini taşır. 
            Bu zarif aletler sadece işlevsel değil, aynı zamanda çay seremonisinin 
            ruhani yolculuğunda birer rehberdir.
          </p>
        </div>

        {/* Çay Hazırlık Sanatı */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-serif text-gray-800 mb-8">Çay Hazırlık Sanatı</h2>
              <div className="prose prose-lg">
                <p>
                  Çay hazırlığı, sabır ve özen gerektiren kutsal bir ritüeldir. 
                  Her alet, bu ritüelin kusursuz bir şekilde gerçekleştirilmesine 
                  hizmet eder.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl text-emerald-800">壺</span>
                    <div>
                      <h3 className="font-medium text-lg">Bambu Çay Maşası</h3>
                      <p className="text-gray-600">
                        Yaprakları nazikçe kavrar, çayın özünü korur. Her hareketi 
                        hassasiyet ve saygıyla yapılır.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl text-emerald-800">匙</span>
                    <div>
                      <h3 className="font-medium text-lg">Pirinç Çay Ölçeği</h3>
                      <p className="text-gray-600">
                        Mükemmel dengeyi sağlamak için tasarlanmış, her ölçüm 
                        kusursuz bir demleme için hesaplanır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative h-[600px]">
              <Image
                src="/images/tea-tools.jpg"
                alt="Çay Hazırlık Aletleri"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Seramik Sanatı */}
        <section className="mb-32 relative py-20">
          <div className="absolute inset-0 bg-stone-100 -skew-y-3"></div>
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <h2 className="text-4xl font-serif text-gray-800 mb-8">Seramik Sanatı</h2>
                <div className="prose prose-lg">
                  <p>
                    Her seramik parça, yüzyılların birikimini taşıyan bir sanat eseridir. 
                    Ustaların ellerinde şekillenen bu eserler, çay seremonisine ruh katar.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="font-medium text-xl mb-2">Yixing Çay Peti</h3>
                      <p className="text-gray-600">
                        Mor kil ile şekillenen bu figürler, her çay seremonisinin 
                        sessiz tanıklarıdır. Zamanla çayın aromasını emerek kendi 
                        karakterini oluşturur.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-2">Porselen Fincanlar</h3>
                      <p className="text-gray-600">
                        İnce işçilikle üretilen fincanlar, çayın rengini ve 
                        berraklığını en iyi şekilde yansıtır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative h-[600px]">
                <Image
                  src="/images/ceramic-art.jpg"
                  alt="Seramik Sanatı"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Saklama ve Sunum */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-800 mb-6">Saklama ve Sunum Sanatı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çayın tazeliğini korumak ve seremoniye yakışır şekilde sunmak, 
              ayrı bir uzmanlık ve özen gerektirir.
            </p>
          </div>
          
          <div className="relative mt-20">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 relative">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-serif mb-6">Saklama Kapları</h3>
                  <div className="prose prose-lg">
                    <p>
                      Geleneksel saklama kapları, çayın aromasını ve tazeliğini 
                      korumak için özel olarak tasarlanmıştır. Her detay, çayın 
                      kalitesini korumak için düşünülmüştür.
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full"></span>
                        Nem kontrolü için çift katlı kapak sistemi
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full"></span>
                        Işık geçirmeyen seramik yapı
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full"></span>
                        El yapımı geleneksel motifler
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="space-y-8">
                  <div className="relative h-[400px]">
                    <Image
                      src="/images/tea-storage.jpg"
                      alt="Çay Saklama Kapları"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative h-[400px]">
                    <Image
                      src="/images/tea-presentation.jpg"
                      alt="Çay Sunumu"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bakım ve Koruma */}
        <section className="relative overflow-hidden rounded-3xl bg-stone-100">
          <div className="absolute inset-0">
            <Image
              src="/images/tea-care.jpg"
              alt="Çay Aksesuarları Bakımı"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-20"
            />
          </div>
          <div className="relative p-16">
            <h2 className="text-4xl font-serif text-gray-800 mb-12">Bakım ve Koruma</h2>
            <div className="max-w-2xl">
              <p className="text-lg text-gray-700 mb-8">
                Her aksesuar, uzun yıllar boyunca size eşlik edecek değerli bir 
                yol arkadaşıdır. Bu değerli parçaların bakımı, çay kültürünün 
                önemli bir parçasıdır.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Seramik Ürünler</h3>
                  <p className="text-gray-600 mb-4">
                    Her kullanımdan sonra nazikçe temizlenmeli, ani ısı değişimlerinden 
                    korunmalıdır. Doğal yöntemlerle kurutulması önerilir.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Bambu Ürünler</h3>
                  <p className="text-gray-600 mb-4">
                    Nemli ortamlardan uzak tutulmalı, düzenli olarak havalandırılmalıdır. 
                    Doğal bambu yağı ile bakım yapılması önerilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 