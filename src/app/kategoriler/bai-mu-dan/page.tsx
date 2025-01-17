import Image from 'next/image';

export default function BaiMuDanTeaPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
        BAI MU DAN (BEYAZ ŞAKAYIK ÇAYI)
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Bai Mu Dan, Çin'in Fujian eyaletinin dağlık bölgelerinden gelen prestijli bir beyaz çay türüdür. 
          "Beyaz Şakayık" olarak da bilinen bu çay, adını açılmamış tomurcukların şakayık çiçeğine 
          benzerliğinden alır. Sadece ilkbaharın ilk günlerinde toplanan genç tomurcuklar ve ilk 
          yapraklar kullanılarak üretilir.
        </p>

        <p className="text-lg">
          En minimal işlem gören çay türlerinden biri olan Bai Mu Dan, doğal güneşte kurutma ve hafif 
          soldurma dışında herhangi bir işleme tabi tutulmaz. Bu sayede yaprakların doğal enzim ve 
          antioksidanları korunur. Çayın karakteristik görünümü, gümüşi-beyaz tüylü tomurcuklar ve 
          açık yeşil yapraklardan oluşur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/bai-mu-dan-leaves.jpg"
              alt="Bai Mu Dan Çay Yaprakları"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/bai-mu-dan-brew.jpg"
              alt="Demlenen Bai Mu Dan Çayı"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Bai Mu Dan'ın Özellikleri
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>İnce, zarif ve tatlı aroma profili</li>
            <li>Çiçeksi ve meyvemsi notalar</li>
            <li>Minimal işlem görmüş saf yapraklar</li>
            <li>Açık sarı-yeşilimsi demleme rengi</li>
            <li>Yüksek antioksidan içeriği</li>
          </ul>
        </div>

        <p className="text-lg">
          Bai Mu Dan, beyaz çaylar arasında Silver Needle'dan sonra en prestijli çay olarak kabul edilir. 
          Minimal işlem görmesi sayesinde doğal ve saf karakterini korur. Her demlemede taze bahar 
          esintilerini anımsatan bu özel çay, %100 organik olup hiçbir katkı maddesi içermez.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-gray-800">
            Demleme Önerileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Su Sıcaklığı</h3>
              <p>75-80°C</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Demleme Süresi</h3>
              <p>4-5 dakika</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-medium mb-2">Çay Miktarı</h3>
              <p>Her 200ml su için 4-5g</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg shadow-sm my-8">
          <h2 className="text-2xl font-serif mb-4 text-emerald-800">
            Bai Mu Dan Kalite Sınıfları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Premium Sınıf</h3>
              <p className="text-sm">En yüksek tomurcuk oranına sahip, erken bahar hasadı. Zarif ve kompleks karakter.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Birinci Sınıf</h3>
              <p className="text-sm">Dengeli tomurcuk-yaprak oranı. Tatlı ve yumuşak içim.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">İkinci Sınıf</h3>
              <p className="text-sm">Daha fazla olgun yaprak içerir. Daha güçlü ve belirgin karakter.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Organik Sertifikalı</h3>
              <p className="text-sm">Tüm sınıflarda mevcut, özel organik sertifikalı üretim.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 