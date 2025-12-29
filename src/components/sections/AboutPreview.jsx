'use client';

import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

// Helper component for counting up animation
const CountUpStats = ({ value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    // Parse the numeric part and the suffix/prefix
    const numericValue = parseInt(value.replace(/,/g, ''), 10);
    const suffix = value.replace(/[\d,]/g, '');

    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => {
        return Math.floor(latest).toLocaleString() + suffix;
    });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, numericValue, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};



const AboutPreview = () => {
    const { t, i18n } = useTranslation();
    const isLao = i18n.language === 'la';
    const sectionRef = useRef(null);



    // Stats data adapted for the 3 stacked cards
    const stats = [
        {
            value: '20+',
            label: isLao ? 'ປີແຫ່ງປະສົບການ' : 'Years of Experience',
            desc: isLao ? 'ໃນການພັດທະນາໂຄງການ' : 'In project development',
            gradient: 'from-yellow-400 to-orange-500'
        },
        {
            value: '5+',
            label: isLao ? 'ໂຄງການຂະຫນາດໃຫຍ່' : 'Major Projects',
            desc: isLao ? 'ປະສົບຜົນສຳເລັດ' : 'Successfully completed',
            gradient: 'from-yellow-400 to-amber-500'
        },
        {
            value: '50+',
            label: isLao ? 'ບ້ານຈັດສັນ' : 'Villages Resettled',
            desc: isLao ? 'ຊີວິດການເປັນຢູ່ທີ່ດີຂຶ້ນ' : 'Better livelihoods created',
            gradient: 'from-amber-400 to-yellow-500'
        },
        {
            value: '3,360+',
            label: isLao ? 'ຄອບຄົວ' : 'Families Supported',
            desc: isLao ? 'ໄດ້ຮັບການຊ່ວຍເຫຼືອ' : 'Directly supported by PVD',
            gradient: 'from-orange-400 to-yellow-500'
        }
    ];



    return (
        <section ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/about-background.jpg')` }}
                />
                {/* Animated gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"
                    animate={{
                        background: [
                            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                            "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
                            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">


                <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">

                    {/* Left Column - Title & Text */}
                    <div className="lg:col-span-5 text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 relative"
                        >
                            {/* Shimmer effect overlay */}
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            />
                            <span className="relative">
                                {isLao ? 'ພະລັງແຫ່ງ' : 'Responsible'}<br />
                                <span className="font-bold bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text">{isLao ? 'ການພັດທະນາ' : 'Development'}</span><br />
                                {isLao ? 'ທີ່ຍືນຍົງ!' : ''}
                            </span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex gap-4 mb-10 max-w-md"
                        >
                            <motion.span
                                className="text-4xl font-serif opacity-60"
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                &quot;
                            </motion.span>
                            <p className="text-lg leading-relaxed font-light text-white/90">
                                {t('about.description')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <Link
                                href="/about"
                                className="group relative inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full transition-all duration-300 overflow-hidden"
                            >
                                {/* Button glow effect */}
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                                <span className="font-medium relative z-10">{isLao ? 'ອ່ານເພີ່ມເຕີມ' : 'Learn More'}</span>
                                <motion.svg
                                    className="w-5 h-5 ml-2 relative z-10"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side - Grid of Cards */}
                    <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 items-center">

                        {/* Middle Column - Stacked Stats */}
                        <div className="space-y-4 flex flex-col justify-center">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 60px rgba(234, 179, 8, 0.3)",
                                    }}
                                    animate={{
                                        y: [0, -5, 0],
                                    }}
                                    className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden"
                                    style={{
                                        animationDelay: `${index * 0.2}s`,
                                    }}
                                >
                                    {/* Gradient border glow on hover */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                                    />
                                    {/* Number pulse ring */}
                                    <div className="relative">
                                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                                            <CountUpStats value={stat.value} />
                                        </h3>
                                    </div>
                                    <p className="text-gray-900 font-medium mb-1 relative z-10">{stat.label}</p>
                                    <p className="text-gray-500 text-sm relative z-10">{stat.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Far Right Column - Feature Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.2)",
                            }}
                            animate={{
                                y: [0, -6, 0],
                            }}
                            className="bg-white rounded-[2rem] p-6 shadow-xl h-full flex flex-col group cursor-pointer relative overflow-hidden"
                        >
                            {/* Gradient border on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                            />

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                    {isLao ? 'ການພັດທະນາ' : 'DEVELOPMENT'}<br />
                                    <motion.span
                                        className="text-primary-600"
                                        animate={{
                                            backgroundPosition: ['0%', '100%', '0%']
                                        }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                        style={{
                                            backgroundImage: 'linear-gradient(90deg, #0066CC, #0099FF, #0066CC)',
                                            backgroundSize: '200%',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {isLao ? 'ສູ່ຄວາມຍືນຍົງທີ່ບໍ່ສິ້ນສຸດ' : 'TOWARDS ENDLESS SUSTAINABILITY'}
                                    </motion.span>
                                </h3>
                                <motion.div
                                    className="bg-gray-100 p-2 rounded-full group-hover:bg-primary-100 transition-colors duration-300"
                                    whileHover={{ rotate: 45, scale: 1.1 }}
                                >
                                    <svg className="w-4 h-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M5 5h14v14" />
                                    </svg>
                                </motion.div>
                            </div>

                            <p className="text-gray-500 text-sm mb-6 leading-relaxed relative z-10">
                                {isLao
                                    ? 'ສ້າງອະນາຄົດທີ່ດີກວ່າດ້ວຍການພັດທະນາທີ່ຍືນຍົງ ແລະ ເປັນມິດກັບສິ່ງແວດລ້ອມ.'
                                    : 'Imagine a future that is sustainable, environmentally friendly, and reliable.'}
                            </p>

                            <div className="mt-auto rounded-2xl overflow-hidden h-64 md:h-80 relative group/image">
                                <motion.img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Project Site"
                                    className="w-full h-full object-cover transition-transform duration-700"
                                    whileHover={{ scale: 1.1 }}
                                />
                                {/* Image overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
