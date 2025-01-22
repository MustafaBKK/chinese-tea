"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-emerald-800 shadow-lg' : 'bg-emerald-800/90 backdrop-blur-md'
    }`}>
      <div className="flex items-center justify-between p-4">
        {/* Marka Adı */}
        <div className="text-xl md:text-2xl font-serif italic font-bold text-white">
          ChaiMaiTea
        </div>

        {/* Ana Sayfa Butonu - Sadece Mobil ve Ana Sayfa Değilken */}
        <div className="flex items-center gap-4 md:hidden">
          {!isHomePage && (
            <Link 
              href="/" 
              className="text-white hover:text-emerald-200 transition-colors"
              aria-label="Ana Sayfaya Dön"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
            </Link>
          )}
          
          {/* Hamburger Menü Butonu - Sadece Mobil */}
          <button 
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menü */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
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

          {/* Tarihçe Link */}
          <Link href="/hakkimizda/tarihce" className="text-white hover:text-emerald-200 transition-colors py-2 block">
            Tarihçe
          </Link>
        </div>
      </div>

      {/* Mobil Menü */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-emerald-800 shadow-lg">
          {/* Mobil Çay Kategorileri */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('categories')}
              className="w-full text-left text-white hover:bg-emerald-700 px-4 py-3 border-b border-emerald-700 flex justify-between items-center"
            >
              <span>Çay Kategorileri</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'categories' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${activeDropdown === 'categories' ? 'block' : 'hidden'} bg-emerald-900`}>
              <Link href="/kategoriler/yesil-cay" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Yeşil Çay
              </Link>
              <Link href="/kategoriler/siyah-cay" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Siyah Çay
              </Link>
              <Link href="/kategoriler/oolong-cay" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Oolong Çay
              </Link>
              <Link href="/kategoriler/longjing" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Longjing (Dragon Well)
              </Link>
              <Link href="/kategoriler/biluochun" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Biluochun
              </Link>
              <Link href="/kategoriler/huangshan-maofeng" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Huangshan Maofeng
              </Link>
              <Link href="/kategoriler/tie-guan-yin" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Tiě Guān Yīn
              </Link>
              <Link href="/kategoriler/wuyi-yan-cha" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Wǔyí Yán Chá
              </Link>
              <Link href="/kategoriler/sheng-puerh" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Sheng Pu-erh
              </Link>
              <Link href="/kategoriler/bai-mu-dan" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Bai Mu Dan
              </Link>
            </div>
          </div>

          {/* Mobil Malzemeler */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('materials')}
              className="w-full text-left text-white hover:bg-emerald-700 px-4 py-3 border-b border-emerald-700 flex justify-between items-center"
            >
              <span>Malzemeler</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'materials' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${activeDropdown === 'materials' ? 'block' : 'hidden'} bg-emerald-900`}>
              <Link href="/malzemeler/demlikler" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Demlikler
              </Link>
              <Link href="/malzemeler/fincanlar" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Fincanlar
              </Link>
              <Link href="/malzemeler/aksesuarlar" className="block text-white hover:bg-emerald-700 px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Aksesuarlar
              </Link>
            </div>
          </div>

          {/* Mobil Tarihçe */}
          <Link 
            href="/hakkimizda/tarihce" 
            className="block text-white hover:bg-emerald-700 px-4 py-3 border-b border-emerald-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tarihçe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 