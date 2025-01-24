import Link from 'next/link';
import Image from 'next/image';

export default function KategorilerPage() {
  const categories = [
    {
      title: "Yeşil Çay",
      description: "Minimal işlem görmüş, doğal ve ferahlatıcı çaylar",
      image: "/images/green-tea-leaves.jpg",
      link: "/kategoriler/yesil-cay"
    },
    {
      title: "Oolong Çayı",
      description: "Kompleks aromalar ve zengin tatlar sunan yarı fermente çaylar",
      image: "/images/oolong-dark.jpg",
      link: "/kategoriler/oolong-cay"
    },
    {
      title: "Siyah Çay",
      description: "Tam fermente edilmiş, güçlü ve aromatik çaylar",
      image: "/images/black-tea-leaves.jpg",
      link: "/kategoriler/siyah-cay"
    },
    {
      title: "Longjing",
      description: "Çin'in en prestijli yeşil çayı, kestane aromalı bir efsane",
      image: "/images/longjing-leaves.jpg",
      link: "/kategoriler/longjing"
    },
    {
      title: "Tie Guan Yin",
      description: "Efsanevi 'Demir Tanrıça' oolong çayı",
      image: "/images/tie-guan-yin-leaves.jpg",
      link: "/kategoriler/tie-guan-yin"
    },
    {
      title: "Biluochun",
      description: "Spiral yapraklı, çiçeksi aromalı premium yeşil çay",
      image: "/images/biluochun-leaves.jpg",
      link: "/kategoriler/biluochun"
    },
    {
      title: "Bai Mu Dan",
      description: "Zarif ve narin yapraklı beyaz çay",
      image: "/images/bai-mu-dan-leaves.jpg",
      link: "/kategoriler/bai-mu-dan"
    },
    {
      title: "Wuyi Yan Cha",
      description: "Wuyi Dağları'ndan gelen efsanevi kaya çayı",
      image: "/images/wuyi-leaves.jpg",
      link: "/kategoriler/wuyi-yan-cha"
    },
    {
      title: "Sheng Pu-erh",
      description: "Yaşlandıkça değerlenen, kompleks aromalı çay",
      image: "/images/sheng-puerh-leaves.jpg",
      link: "/kategoriler/sheng-puerh"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 text-center">
          Çay Kategorilerimiz
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Çin'in en seçkin çay bölgelerinden özenle seçilmiş, geleneksel yöntemlerle işlenmiş premium kalite çaylar
        </p>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif text-gray-800 mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 