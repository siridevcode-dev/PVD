'use client';

import { Hero, AboutPreview, ServicesPreview, FeaturedProjects, LayoutContent } from '../components/sections';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Hero />

            <AboutPreview />
            <ServicesPreview />
            <FeaturedProjects />
            <LayoutContent />
            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }} />
                <div className="absolute inset-0 bg-primary-900/90" />

                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-white max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                        <p className="text-white/70 text-lg mb-8">Contact us today to discuss how we can help with your environmental management and resettlement needs.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-secondary">{t('nav.contact')}</Link>
                            <Link href="/services" className="btn btn-outline">{t('nav.services')}</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
