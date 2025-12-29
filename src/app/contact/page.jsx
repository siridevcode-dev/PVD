'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div>
            {/* Half-height Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center bg-primary-900 text-white overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('contact.title')}</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{t('contact.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h2 className="section-title mb-8">{t('contact.office.title')}</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 flex-shrink-0"><FaMapMarkerAlt className="text-xl" /></div>
                                    <div>
                                        <h4 className="font-semibold text-primary-800 mb-1">{t('contact.office.address')}</h4>
                                        <p className="text-gray-600">House No 345, Nongbone Road, Phonexay Village, Xaysettha District, Vientiane Capital, Lao PDR, PO Box 7591</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 flex-shrink-0"><FaPhone className="text-xl" /></div>
                                    <div>
                                        <h4 className="font-semibold text-primary-800 mb-1">{t('contact.office.phone')}</h4>
                                        <p className="text-gray-600">Office Tel: (856-21) 417411</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 flex-shrink-0"><FaEnvelope className="text-xl" /></div>
                                    <div>
                                        <h4 className="font-semibold text-primary-800 mb-1">{t('contact.office.email')}</h4>
                                        <p className="text-gray-600">info@pvd-laos.com<br />projects@pvd-laos.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 flex-shrink-0"><FaClock className="text-xl" /></div>
                                    <div>
                                        <h4 className="font-semibold text-primary-800 mb-1">Office Hours</h4>
                                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                                <span className="text-gray-500">Map Location</span>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-primary-800 mb-6">Send us a Message</h3>
                                {submitted ? (
                                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><FaPaperPlane className="text-green-500 text-2xl" /></div>
                                        <h4 className="text-xl font-semibold text-primary-800 mb-2">Message Sent!</h4>
                                        <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                                        <button onClick={() => setSubmitted(false)} className="btn btn-primary mt-6">Send Another Message</button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.subject')}</label>
                                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                                            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" />
                                        </div>
                                        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                                                    Sending...
                                                </span>
                                            ) : t('contact.form.submit')}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
