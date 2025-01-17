import Image from 'next/image';

export default function TieGuanYinTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        TIE GUAN YIN (DEMİR GUANYIN ÇAYI)
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Tie Guan Yin, Çin'in Fujian eyaletinin Anxi bölgesinden gelen efsanevi bir oolong çayıdır. 
          "Demir Guanyin" veya "Demir Merhamet Tanrıçası" olarak da bilinen bu çay, adını Budist 
          merhamet tanrıçası Guanyin'den alır. Efsaneye göre, bir çiftçi tapınaktaki Guanyin 
          heykeline düzenli olarak çay sunduğu için, tanrıça ona bu özel çay bitkisinin yerini 
          rüyasında göstermiştir.
        </p>

        <p className="text-lg">
          Geleneksel yöntemlerle üretilen Tie Guan Yin, yaprakların özenle toplanması, soldurulması, 
          çalkalanması, kıvrılması ve hafif oksidasyonu gibi karmaşık aşamalardan geçer. Modern 
          versiyonları daha yeşil ve çiçeksi iken, geleneksel versiyonları daha koyu ve kavrulmuş 
          karakterdedir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/tie-guan-yin-leaves.jpg"
              alt="Tie Guan Yin Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/tie-guan-yin-brew.jpg"
              alt="Demlenen Tie Guan Yin Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Tie Guan Yin'in Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Orkide benzeri çiçeksi aroma</li>
            <li>Kremsi ve ipeksi yapı</li>
            <li>Tatlı ve uzun süren bitiş</li>
            <li>Açık altın-amber rengi demleme</li>
            <li>Çoklu demleme potansiyeli</li>
          </ul>
        </div>

        <p className="text-lg">
          Tie Guan Yin, oolong çayları arasında en çok tanınan ve sevilen çaylardan biridir. 
          Her yıl bahar ve sonbahar olmak üzere iki kez hasat edilir. Yaprakların kıvrılmış 
          top şeklindeki görünümü karakteristiktir. %100 doğal olup, hiçbir katkı maddesi içermez.
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
              <p>1-2 dakika (ilk demleme)</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 100ml su için 5-6g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Tie Guan Yin Çeşitleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Modern Yeşil Stil</h3>
              <p className="text-sm">Hafif okside edilmiş, taze ve çiçeksi karakterli. Daha açık renk demlemesi.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Geleneksel Kavrulmuş</h3>
              <p className="text-sm">Orta-yüksek kavurma, derin ve zengin karakterli. Fırınlanmış notalar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Bahar Hasadı</h3>
              <p className="text-sm">Taze ve canlı karakterli, çiçeksi aromaları ön planda.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Sonbahar Hasadı</h3>
              <p className="text-sm">Daha olgun ve dengeli karakter, meyve notaları belirgin.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 