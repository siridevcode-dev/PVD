'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { serviceData } from '../../../data/services';

const ServiceDetailClient = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const service = serviceData[id];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
                    <Link href="/services" className="btn btn-primary">Back to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img src={service.image} alt={t(`services.items.${service.key}.title`)} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`} />
                </div>
                <div className="container-custom relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                            <FaArrowLeft /> Back to Services
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                                {service.icon}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            {t(`services.items.${service.key}.title`)}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            {t(`services.items.${service.key}.desc`)}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="section-title">What We Offer</h2>
                        <p className="section-subtitle">Comprehensive services tailored to your needs</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-900 text-white">
                <div className="container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in This Service?</h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss how we can help with your project needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
                            <Link href="/projects" className="btn btn-outline">View Our Projects</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailClient;
