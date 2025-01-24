import Image from 'next/image';

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        <Image
          src="/images/chinese-tea-history.jpg"
          alt="Geleneksel Çin Çay Kültürü"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover' }}
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 text-center">
            Çay'ın Kadim Yolculuğu
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl text-center leading-relaxed px-4 md:px-0">
            Beş bin yıllık bir geleneğin modern temsilcileri olarak, 
            size en seçkin Çin çaylarını sunuyoruz.
          </p>
        </div>
      </div>

      {/* Tarihçe Bölümü */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Efsanevi Başlangıç */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row items-center gap-16 relative">
              {/* Mobil arka plan resmi */}
              <div className="absolute inset-0 w-full h-full md:hidden">
                <Image
                  src="/images/shen-nung.jpg"
                  alt="İmparator Shen Nung"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  className="opacity-20"
                />
              </div>
              
              <div className="flex-1 relative z-10">
                <h2 className="text-4xl font-serif text-gray-800 mb-8 -mt-8 md:mt-0">
                  <span className="text-2xl block text-emerald-800 mb-2">神農氏</span>
                  Efsanevi Başlangıç
                </h2>
                <div className="prose prose-lg">
                  <p className="text-gray-800 font-medium text-base sm:text-lg">
                    Çin çayının tarihi, M.Ö. 2737 yılına, efsanevi İmparator Shen Nung dönemine kadar uzanır. 
                    Rivayete göre, bir gün bahçesinde dinlenirken kaynatılmış suyuna düşen birkaç çay yaprağı, 
                    insanlık tarihinin en önemli içeceklerinden birinin keşfine vesile olur.
                  </p>
                  <p className="text-gray-800 font-medium text-base sm:text-lg">
                    İmparator, suyun renginin değiştiğini ve ortaya çıkan aromanın büyüleyici olduğunu fark eder. 
                    İçtiğinde vücudunda ferahlık hisseder ve böylece çayın şifalı özellikleri de keşfedilmiş olur.
                  </p>
                </div>
              </div>
              {/* Desktop resmi */}
              <div className="flex-1 relative h-[500px]">
                <Image
                  src="/images/shen-nung.jpg"
                  alt="İmparator Shen Nung"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Altın Çağ */}
          <div className="mb-32 relative">
            <div className="relative py-20">
              <h2 className="text-4xl font-serif text-gray-800 mb-8">
                <span className="text-2xl block text-emerald-800 mb-2">唐朝</span>
                Tang Hanedanlığı'nın Altın Çağı
              </h2>
              <div className="flex flex-col md:flex-row-reverse items-center gap-16 relative">
                {/* Mobil arka plan resmi */}
                <div className="absolute inset-0 w-full h-full md:hidden">
                  <Image
                    src="/images/tang-dynasty.jpg"
                    alt="Tang Hanedanlığı Çay Kültürü"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className="opacity-20"
                  />
                </div>
                
                <div className="flex-1 relative z-10">
                  <div className="prose prose-lg">
                    <p className="text-gray-800 font-medium text-base sm:text-lg">
                      Tang Hanedanlığı (618-907), Çin çay kültürünün altın çağıdır. Bu dönemde çay, 
                      sadece bir içecek olmaktan çıkıp bir sanat formuna dönüşür. Lu Yu'nun yazdığı 
                      "Çay Klasiği" (茶經), çay kültürünün temel taşı haline gelir.Tang döneminde Lu Yu tarafından yazılan "Cha Jing" (Çayın Klasiği), çay üzerine yazılmış ilk kitap olarak kabul edilir
                    </p>
                    <p className="text-gray-800 font-medium text-base sm:text-lg">
                      Saray mensupları ve şairler çay seremonilerinde bir araya gelir, şiirler yazılır, 
                      çay üzerine felsefi sohbetler edilir. Çay artık sadece bir içecek değil, 
                      bir medeniyet sembolüdür.
                    </p>
                  </div>
                </div>
                {/* Desktop resmi */}
                <div className="flex-1 relative h-[500px]">
                  <Image
                    src="/images/tang-dynasty.jpg"
                    alt="Tang Hanedanlığı Çay Kültürü"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* İpek Yolu ve Çay */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-800 mb-6">
                <span className="text-2xl block text-emerald-800 mb-2">絲綢之路</span>
                İpek Yolu ve Çayın Yayılışı
              </h2>
            </div>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-stretch gap-12">
                {/* Mobil ekranda arka plan olarak kullanılacak resimler */}
                <div className="absolute inset-0 w-full h-full md:hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/silk-road.jpg"
                      alt="İpek Yolu Kervanları"
                      fill
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}
                      className="opacity-20"
                    />
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <div className="sticky top-24 prose prose-lg relative z-10">
                    <p className="text-gray-800 font-medium text-base sm:text-lg">
                      İpek Yolu, sadece ipeğin değil, çayın da dünyaya açılan kapısı olur. 
                      Kervanlar, değerli ipek kumaşların yanında, özenle paketlenmiş çay yapraklarını da taşır. 
                      Çay, bu yolculukla birlikte farklı kültürlerle tanışır ve her uğradığı yerde 
                      yeni geleneklerin doğmasına vesile olur.
                    </p>

                    <p className="text-gray-800 font-medium text-base sm:text-lg">
                      M.S. 618-907 yılları arasında, Tang Hanedanlığı döneminde, çay ticareti İpek Yolu üzerinde 
                      altın çağını yaşar. Çin'den başlayan bu yolculuk, Orta Asya üzerinden Avrupa'ya kadar uzanır. 
                      Özellikle sıkıştırılmış çay kalıpları, uzun kervan yolculukları için ideal bir ticaret ürünü 
                      haline gelir.
                    </p>

                    <p className="text-gray-800 font-medium text-base sm:text-lg">
                      8. yüzyılda, Çay-At Ticareti (茶馬古道) olarak bilinen özel bir ticaret yolu oluşur. 
                      Tibet'in güçlü atları karşılığında, Çin'in değerli çayları takas edilir. Bu ticaret, 
                      her iki uygarlık için de hayati önem taşır ve yüzyıllar boyunca devam eder.
                    </p>

                    <div className="mt-6 md:mt-8 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full mt-3"></span>
                        <p className="flex-1 text-gray-800 font-medium text-base sm:text-lg">
                          Tibet'te tereyağlı çay geleneği doğar. Yüksek rakımda yaşayan halk için 
                          çay, sadece bir içecek değil, yaşamsal bir besin kaynağı haline gelir. 
                          Yak tereyağı ve tuz ile hazırlanan bu besleyici içecek, Tibet'in soğuk 
                          ikliminde hayatta kalmanın önemli bir parçası olur.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full mt-3"></span>
                        <p className="flex-1 text-gray-800 font-medium text-base sm:text-lg">
                          Moğollar çayı süt ve tuzla demlemeye başlar. Bozkır kültürüne özgü 
                          bu demleme şekli, günümüzde hala devam etmektedir. Süt çayı (сүүтэй цай), 
                          Moğol mutfağının vazgeçilmez bir parçası haline gelir.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full mt-3"></span>
                        <p className="flex-1 text-gray-800 font-medium text-base sm:text-lg">
                          Orta Asya'da, özellikle Uygur ve Kazak topluluklarında, çay misafirperverliğin 
                          sembolü olur. Yeşil çay ve siyah çay çeşitleri, geleneksel sofraların 
                          vazgeçilmez parçası haline gelir.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-emerald-800 rounded-full mt-3"></span>
                        <p className="flex-1 text-gray-800 font-medium text-base sm:text-lg">
                          İran üzerinden geçen çay ticareti, Persler'in kendine özgü çay kültürünü 
                          şekillendirir. Samovarlarda demlenen siyah çay, İran çay kültürünün temelini 
                          oluşturur ve buradan Anadolu'ya kadar yayılır.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-800 font-medium text-base sm:text-lg">
                      16. yüzyıla gelindiğinde, Portekizli tüccarlar deniz yoluyla çayı Avrupa'ya 
                      taşımaya başlar. Bu yeni ticaret rotası, çayın Batı dünyasında tanınmasını ve 
                      yaygınlaşmasını sağlar. Hollanda Doğu Hindistan Şirketi ve İngiliz Doğu Hindistan 
                      Şirketi'nin kurulmasıyla, çay ticareti yeni bir boyut kazanır.
                    </p>
                  </div>
                </div>
                
                {/* Desktop görünümü için resimler */}
                <div className="hidden md:block flex-1">
                  <div className="space-y-8">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/silk-road.jpg"
                        alt="İpek Yolu Kervanları"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/tea-route.jpg"
                        alt="Çay Rotası"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Dönem */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <Image
                src="/images/modern-tea.jpg"
                alt="Modern Çay Kültürü"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                className="opacity-20"
              />
            </div>
            <div className="relative p-16">
              <h2 className="text-4xl font-serif text-gray-800 mb-12">
                <span className="text-2xl block text-emerald-800 mb-2">現代</span>
                Günümüzde Çin Çayı
              </h2>
              <div className="max-w-3xl">
                <div className="prose prose-lg">
                  <p className="text-gray-800 font-medium text-base sm:text-lg">
                    Günümüzde Çin çayı, geleneksel üretim yöntemleri ve modern teknolojinin 
                    mükemmel bir sentezini sunuyor. UNESCO tarafından kültürel miras listesine 
                    alınan çay bahçeleri ve üretim teknikleri, binlerce yıllık geleneği yaşatmaya 
                    devam ediyor.
                  </p>
                  <p className="text-gray-800 font-medium text-base sm:text-lg">
                    Biz de bu kadim geleneğin modern temsilcileri olarak, size en seçkin 
                    Çin çaylarını sunmaktan gurur duyuyoruz. Her bir ürünümüz, uzun bir tarihî 
                    yolculuğun ve derin bir kültürel birikimin temsilcisidir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 