"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-emerald-800 shadow-lg' : 'bg-emerald-800/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          {/* Anasayfa */}
          <Link href="/" className="text-white hover:text-emerald-200 transition-colors py-2 block">
            Anasayfa
          </Link>

          {/* Çay Kategorileri */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('categories')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-white hover:text-emerald-200 transition-colors py-2 block cursor-default">
              Çay Kategorileri
            </span>
            {activeDropdown === 'categories' && (
              <div className="absolute top-full left-0 pt-4">
                <div className="bg-white/95 backdrop-blur-md text-gray-800 rounded-lg shadow-lg py-2 w-64">
                  <Link href="/kategoriler/yesil-cay" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Yeşil Çay
                  </Link>
                  <Link href="/kategoriler/siyah-cay" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Siyah Çay
                  </Link>
                  <Link href="/kategoriler/oolong-cay" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Oolong Çay
                  </Link>
                  <Link href="/kategoriler/longjing" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Longjing (Dragon Well)
                  </Link>
                  <Link href="/kategoriler/biluochun" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Biluochun
                  </Link>
                  <Link href="/kategoriler/huangshan-maofeng" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Huangshan Maofeng
                  </Link>
                  <Link href="/kategoriler/tie-guan-yin" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Tiě Guān Yīn
                  </Link>
                  <Link href="/kategoriler/wuyi-yan-cha" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Wǔyí Yán Chá
                  </Link>
                  <Link href="/kategoriler/sheng-puerh" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Sheng Pu-erh (Raw Pu-erh)
                  </Link>
                  <Link href="/kategoriler/bai-mu-dan" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Bai Mu Dan (White Peony)
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Malzemeler */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('materials')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-white hover:text-emerald-200 transition-colors py-2 block cursor-default">
              Malzemeler
            </span>
            {activeDropdown === 'materials' && (
              <div className="absolute top-full left-0 pt-4">
                <div className="bg-white/95 backdrop-blur-md text-gray-800 rounded-lg shadow-lg py-2 w-64">
                  <Link href="/malzemeler/demlikler" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Demlikler
                  </Link>
                  <Link href="/malzemeler/fincanlar" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Fincanlar
                  </Link>
                  <Link href="/malzemeler/aksesuarlar" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Aksesuarlar
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Hakkımızda */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-white hover:text-emerald-200 transition-colors py-2 block cursor-default">
              Hakkımızda
            </span>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 pt-4">
                <div className="bg-white/95 backdrop-blur-md text-gray-800 rounded-lg shadow-lg py-2 w-64">
                  <Link href="/hakkimizda/tarihce" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    Tarihçe
                  </Link>
                  <Link href="/hakkimizda/iletisim" className="block px-4 py-1.5 hover:bg-emerald-100 text-sm transition-colors">
                    İletişim
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Marka Adı */}
        <div className="text-2xl font-serif italic font-bold text-white">
          ChaiMaiTea
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 