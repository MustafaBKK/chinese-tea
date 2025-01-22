import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh] sm:h-screen">
        {/* Arka plan resmi */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1493088/pexels-photo-1493088.jpeg"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
        </div>
        
        {/* Karartma overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero içeriği */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Geleneksel Çin Çayları
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl px-4">
            Yüzyıllık geleneklerden gelen eşsiz tatlar ve aromalar
          </p>
          <Link 
            href="/kategoriler" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg transition-colors duration-300"
          >
            Çayları Keşfet
          </Link>
        </div>
      </div>

      {/* Özellikler Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Özellik 1 */}
            <div className="text-center p-4 sm:p-6">
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
            <div className="text-center p-4 sm:p-6">
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
            <div className="text-center p-4 sm:p-6">
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
      <section className="py-12 sm:py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Sağlık Faydaları */}
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/tea-health.jpg"
                  alt="İmparator Shen Nung"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                  className="transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sağlığa Faydaları</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
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
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-[400px] sm:h-[500px] w-full">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/tea-old.jpg"
                  alt="Tang Hanedanlığı Dönemi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                  className="transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              <div className="relative p-4 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Çin Çayının Tarihçesi</h3>
                <div className="prose prose-sm sm:prose-lg prose-emerald prose-invert">
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

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* İletişim Bilgileri */}
            <div className="text-center sm:text-left space-y-4">
              <h3 className="text-xl font-serif mb-4 text-emerald-100">İletişim</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:mustafakokcok@outlook.com" 
                    className="flex items-center justify-center sm:justify-start hover:text-emerald-200 transition-colors group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-300 group-hover:text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mustafakokcok@outlook.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+905534365571" 
                    className="flex items-center justify-center sm:justify-start hover:text-emerald-200 transition-colors group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-300 group-hover:text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +90 553 436 55 71
                  </a>
                </li>
                <li className="flex items-center justify-center sm:justify-start group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
            </div>

            {/* Sosyal Medya */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-serif mb-4 text-emerald-100">Sosyal Medya</h3>
              <div className="flex justify-center sm:justify-start space-x-6">
                <a 
                  href="https://github.com/MustafaBKK" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-300 hover:text-emerald-200 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-300 hover:text-emerald-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/mustafa_fne" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-300 hover:text-emerald-200 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Günün Çay Bilgisi */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-serif mb-4 text-emerald-100">Günün Çay Bilgisi</h3>
              <div className="bg-emerald-800/50 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-emerald-100 italic mb-3 text-lg">
                  "茶禅一味" (Cha Zen Ichimi)
                </p>
                <p className="text-sm text-emerald-200">
                  "Çay ve Zen birdir" - Bu Japon atasözü, çay içmenin meditasyon gibi zihinsel huzur sağladığını anlatır.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-emerald-800/50">
            <p className="text-center text-sm text-emerald-300">
              © 2024 ChaiMaiTea. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
