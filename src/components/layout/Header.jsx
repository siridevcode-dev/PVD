'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional hydration pattern for client-side rendering
        setMounted(true);
    }, []);

    // Ensure i18n is initialized client-side if needed, though Layout handles it.

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'home', path: '/' },
        { key: 'about', path: '/about' },
        { key: 'projects', path: '/projects' },
        { key: 'services', path: '/services' },
        { key: 'sustainability', path: '/sustainability' },
        { key: 'gallery', path: '/gallery' },
        { key: 'contact', path: '/contact' },
    ];

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'la' : 'en');
    };

    const isActive = (path) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Phornsavarn"
                            width={200}
                            height={100}
                            priority
                            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-24'}`}
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.path}
                                className={`nav-link ${isActive(item.path) ? 'text-secondary-400' : ''}`}
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
                        >
                            {mounted ? (i18n.language === 'en' ? 'ລາວ' : 'EN') : '...'}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-white p-2"
                        >
                            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 pb-4"
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.key}
                                        href={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors ${isActive(item.path) ? 'bg-white/10 text-secondary-400' : ''
                                            }`}
                                    >
                                        {t(`nav.${item.key}`)}
                                    </Link>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
