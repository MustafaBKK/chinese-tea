import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Arka plan resmi */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1493088/pexels-photo-1493088.jpeg')] bg-cover bg-center bg-no-repeat" />
        
        {/* Karartma overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero içeriği */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Geleneksel Çin Çayları
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Yüzyıllık geleneklerden gelen eşsiz tatlar ve aromalar
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg transition-colors duration-300">
            Çayları Keşfet
          </button>
        </div>
      </div>

      {/* Özellikler Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Özellik 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Kalite Yaprak Çaylar</h3>
              <p className="text-gray-600">
                Çin'in 14 farklı bölgesinden özenle seçilmiş, en kaliteli çay yaprakları ve uzman çay ustaları ile işbirliği içinde üretilen özel harmanlar.
              </p>
            </div>

            {/* Özellik 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Sürdürülebilir Üretim</h3>
              <p className="text-gray-600">
                Çiftliklerle doğrudan çalışarak, sürdürülebilir tarım yöntemleriyle üretilen çayları, aracısız olarak sizlere ulaştırıyoruz.
              </p>
            </div>

            {/* Özellik 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Sertifikalı Kalite</h3>
              <p className="text-gray-600">
                Tüm çaylarımız bağımsız laboratuvarlarda test edilip sertifikalandırılıyor, pestisit ve ağır metal içermediği garanti ediliyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarihçe ve Sağlık Faydaları Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Sağlık Faydaları */}
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-4">Sağlığa Faydaları</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Antioksidan kaynağı
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Metabolizmayı hızlandırır
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Bağışıklık sistemini güçlendirir
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Zihinsel performansı artırır
                  </li>
                </ul>
              </div>
            </div>

            {/* Tarihçe */}
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-[500px]">
              <div className="absolute inset-0">
                <Image
                  src="/images/cinli-adam.jpg"
                  alt="Geleneksel Çin Çay Ustası"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              <div className="relative p-8">
                <h3 className="text-3xl font-bold mb-6 text-white">Çin Çayının Tarihçesi</h3>
                <div className="prose prose-lg prose-emerald prose-invert">
                  <p className="mb-4 text-white">
                    Çin çayının tarihi, M.Ö. 2737 yılına kadar uzanır. Efsaneye göre, İmparator Shen Nung bir gün bahçesinde otururken, bir çay yaprağı sıcak su dolu kabına düşer ve böylece çay keşfedilmiş olur.
                  </p>
                  <p className="mb-4 text-white">
                    Tang Hanedanlığı döneminde (618-907) çay, sadece bir içecek olmaktan çıkıp bir sanat formuna dönüşmüştür. Lu Yu'nun yazdığı "Çay Klasiği" (Cha Jing), çay kültürünün temel taşı haline gelmiştir.
                  </p>
                  <p className="text-white">
                    Günümüzde Çin çayı, geleneksel üretim yöntemleri ve modern teknolojinin birleşimiyle, dünya çapında en prestijli içeceklerden biri olarak kabul edilmektedir.
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
