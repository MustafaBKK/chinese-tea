import Image from 'next/image';

export default function ShengPuerhTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        SHENG PU-ERH (HAM PU-ERH ÇAYI)
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Sheng Pu-erh, Çin'in Yunnan eyaletinin kadim çay ormanlarından gelen, yaşlanabilen ve zaman 
          içinde olgunlaşan eşsiz bir çay türüdür. "Ham" veya "Yeşil" Pu-erh olarak da bilinen bu çay, 
          yüzlerce yıllık eski ağaçlardan toplanan yapraklarla üretilir. Özel fermantasyon ve yaşlandırma 
          süreçleri sayesinde, yıllar içinde daha kompleks ve değerli hale gelir.
        </p>

        <p className="text-lg">
          Her bir parti, Yunnan'ın antik çay dağlarındaki özel bölgelerden hasat edilir. Yapraklar 
          geleneksel yöntemlerle işlenir ve güneşte kurutulur. Doğal mikrobiyal aktivite sayesinde 
          zaman içinde olgunlaşır ve karakteri değişir. Genç Sheng Pu-erh taze ve canlı iken, yaşlı 
          Sheng Pu-erh daha yumuşak ve kompleks bir karaktere bürünür.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/sheng-puerh-leaves.jpg"
              alt="Sheng Pu-erh Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/sheng-puerh-brew.jpg"
              alt="Demlenen Sheng Pu-erh Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Sheng Pu-erh'in Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Yaş ve depolama süresine göre değişen karakter</li>
            <li>Taze bitkisel notalardan bal ve odunsu tatlara uzanan profil</li>
            <li>Karakteristik "hui gan" (tatlı geri dönüş)</li>
            <li>Berrak ve parlak altın-amber rengi demleme</li>
            <li>Yaşlandıkça artan değer ve komplekslik</li>
          </ul>
        </div>

        <p className="text-lg">
          Sheng Pu-erh, Çin çay dünyasının en değerli ve koleksiyonu yapılan çaylarından biridir. 
          Doğru koşullarda depolandığında onlarca yıl yaşlanabilen bu çay, zaman içinde daha da 
          değerlenir. Her demlemede farklı karakterler sunan bu eşsiz çay, %100 doğal olup hiçbir 
          katkı maddesi içermez.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demleme Önerileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Su Sıcaklığı</h3>
              <p>95-100°C</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Demleme Süresi</h3>
              <p>10-15 saniye (ilk demleme)</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 100ml su için 5-8g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Sheng Pu-erh Çeşitleri ve Yaş Profilleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Genç Sheng (0-3 yıl)</h3>
              <p className="text-sm">Taze, canlı ve keskin karakterli. Bitkisel ve çiçeksi notalar baskın.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Olgunlaşmış Sheng (3-10 yıl)</h3>
              <p className="text-sm">Dengeli ve yumuşak. Bal, meyve ve hafif odunsu notalar gelişmiş.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Yaşlı Sheng (10-20 yıl)</h3>
              <p className="text-sm">Kompleks ve derin. Tatlı, mineral ve ginseng benzeri notalar.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Antik Sheng (20+ yıl)</h3>
              <p className="text-sm">Son derece nadir ve değerli. Derin, tatlı ve meditatif karakter.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 