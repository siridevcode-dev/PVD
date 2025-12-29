'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';

const milestones = [
    {
        year: '2008',
        titleEn: 'Company Established',
        titleLa: 'ສ້າງຕັ້ງບໍລິສັດ',
        descEn: 'Founded PVD with a vision to become a leading resettlement development company in Lao PDR.',
        descLa: 'ສ້າງຕັ້ງ PVD ດ້ວຍວິໄສທັດເພື່ອກາຍເປັນບໍລິສັດພັດທະນາການຍົກຍ້າຍຈັດສັນຊັ້ນນໍາໃນລາວ.'
    },
    {
        year: '2010',
        titleEn: 'First Major Project',
        titleLa: 'ໂຄງການໃຫຍ່ທຳອິດ',
        descEn: 'Launched our first major hydropower resettlement project, establishing our LSTK model.',
        descLa: 'ເລີ່ມໂຄງການຍົກຍ້າຍພະລັງງານນ້ຳໃຫຍ່ທຳອິດ, ສ້າງຕັ້ງແບບຈຳລອງ LSTK.'
    },
    {
        year: '2015',
        titleEn: 'Expanded Operations',
        titleLa: 'ຂະຫຍາຍການດຳເນີນງານ',
        descEn: 'Expanded our team and capabilities to handle multiple large-scale projects simultaneously.',
        descLa: 'ຂະຫຍາຍທີມງານ ແລະ ຄວາມສາມາດໃນການຈັດການຫຼາຍໂຄງການຂະໜາດໃຫຍ່ພ້ອมກັນ.'
    },
    {
        year: '2018',
        titleEn: '50 Villages Resettled',
        titleLa: 'ຍົກຍ້າຍ 50 ບ້ານ',
        descEn: 'Achieved milestone of successfully resettling over 50 villages with improved living standards.',
        descLa: 'ບັນລຸເປົ້າໝາຍການຍົກຍ້າຍ 50 ບ້ານດ້ວຍມາດຕະຖານການດຳລົງຊີວິດທີ່ດີຂຶ້ນ.'
    },
    {
        year: '2023',
        titleEn: 'Today',
        titleLa: 'ປັດຈຸບັນ',
        descEn: 'Supporting 3,360+ families across multiple projects with comprehensive LIRP programs.',
        descLa: 'ສະໜັບສະໜູນ 3,360+ ຄອບຄົວໃນຫຼາຍໂຄງການດ້ວຍໂຄງການ LIRP ທີ່ຄົບຖ້ວນ.'
    },
];

const stats = [
    {
        value: '20+',
        titleEn: 'Years of Experience',
        titleLa: 'ປີປະສົບການ',
        descEn: 'Over two decades of excellence in resettlement and livelihood restoration across Lao PDR.',
        descLa: 'ປະສົບການກວ່າ 20 ປີໃນການຍົກຍ້າຍຈັດສັນ ແລະ ຟື້ນຟູຊີວິດການເປັນຢູ່ໃນລາວ.'
    },
    {
        value: '5+',
        titleEn: 'Major Projects',
        titleLa: 'ໂຄງການໃຫຍ່',
        descEn: 'Successfully completed and ongoing hydropower resettlement projects including NN2, XHPP, LPHPP.',
        descLa: 'ໂຄງການຍົກຍ້າຍພະລັງງານນ້ຳທີ່ສຳເລັດ ແລະ ດຳເນີນຢູ່ລວມທັງ NN2, XHPP, LPHPP.'
    },
    {
        value: '50+',
        titleEn: 'Villages Resettled',
        titleLa: 'ບ້ານຖືກຍົກຍ້າຍ',
        descEn: 'Complete village relocations with improved infrastructure, housing, and community facilities.',
        descLa: 'ການຍົກຍ້າຍບ້ານທີ່ສົມບູນດ້ວຍພື້ນຖານໂຄງລ່າງ, ເຮືອນ ແລະ ສິ່ງອຳນວຍຄວາມສະດວກ.'
    },
    {
        value: '3,360+',
        titleEn: 'Families Supported',
        titleLa: 'ຄອບຄົວໄດ້ຮັບການສະໜັບສະໜູນ',
        descEn: 'Families benefiting from our comprehensive livelihood and income restoration programs.',
        descLa: 'ຄອບຄົວທີ່ໄດ້ຮັບຜົນປະໂຫຍດຈາກໂຄງການຟື້ນຟູຊີວິດ ແລະ ລາຍໄດ້ຂອງພວກເຮົາ.'
    }
];

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    const isLao = i18n.language === 'la';

    return (
        <div className="bg-white">
            {/* Hero Section - Compact */}
            <section className="relative min-h-[40vh] flex items-center justify-center bg-primary-900 text-white overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    >
                        <source src="/videos/about-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('about.title')}</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{t('about.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Our Impact by the Numbers */}
            <section className="section bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {isLao ? 'ຜົນກະທົບຂອງພວກເຮົາດ້ວຍຕົວເລກ' : 'Our Impact by the Numbers'}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {isLao
                                ? 'ກຸ່ມຜູ້ຊ່ຽວຊານທີ່ຫຼາກຫຼາຍ, ແຕ່ລະຄົນນໍາເອົາທັກສະ ແລະ ປະສົບການທີ່ເປັນເອກະລັກເພື່ອຂັບເຄື່ອນນະວັດຕະກໍາ ແລະ ຄວາມເປັນເລີດໃນທຸກໂຄງການທີ່ພວກເຮົາດໍາເນີນ.'
                                : 'A diverse group of passionate professionals, each bringing unique skills and experiences to drive innovation and excellence in every project we undertake.'}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {isLao ? stat.titleLa : stat.titleEn}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {isLao ? stat.descLa : stat.descEn}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Building a Better Way Section with Timeline */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Title and Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                {isLao
                                    ? 'ສ້າງວິທີທີ່ດີກວ່າໃນການຮ່ວມມື, ເປັນໝາກບາດກ້າວໜຶ່ງ'
                                    : 'Building a Better Way to Collaborate, One Milestone at a Time'}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {t('about.description')}
                            </p>

                            {/* Mission, Vision, Values Cards */}
                            <div className="space-y-4">
                                {['mission', 'vision', 'values'].map((item, index) => {
                                    const valuesItems = t('about.values.items', { returnObjects: true });
                                    const valuesText = Array.isArray(valuesItems) ? valuesItems.join(' • ') : '';
                                    return (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="bg-gray-50 p-5 rounded-xl border-l-4 border-primary-600"
                                        >
                                            <h4 className="text-lg font-semibold text-primary-800 mb-2">{t(`about.${item}.title`)}</h4>
                                            <p className="text-gray-600 text-sm">{item === 'values' ? valuesText : t(`about.${item}.text`)}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Right: Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />

                            <div className="space-y-8">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={milestone.year}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="relative pl-12"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md" />

                                        <div>
                                            <span className="text-blue-600 font-bold text-sm">{milestone.year}</span>
                                            <h4 className="text-lg font-semibold text-gray-900 mt-1">
                                                {isLao ? milestone.titleLa : milestone.titleEn}
                                            </h4>
                                            <p className="text-gray-500 text-sm mt-1">
                                                {isLao ? milestone.descLa : milestone.descEn}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Team Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-10 ml-12 rounded-2xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="PVD Team Collaboration"
                                    className="w-full h-64 object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/80" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {isLao
                                ? 'ປ່ຽນແປງຊຸມຊົນ, ໂຄງການໜຶ່ງຕໍ່ຄັ້ງ'
                                : 'Transforming Communities, One Project at a Time'}
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                            {isLao
                                ? 'ຮ່ວມມືກັບພວກເຮົາເພື່ອສ້າງອະນາຄົດທີ່ຍືນຍົງສໍາລັບຊຸມຊົນທີ່ໄດ້ຮັບຜົນກະທົບ. ເພີດເພີນກັບປະສົບການທີ່ບໍ່ມີຮອຍຕໍ່ ແລະ ການສະໜັບສະໜູນທີ່ຄົບຖ້ວນ.'
                                : 'Partner with us to build sustainable futures for affected communities. Experience seamless resettlement solutions and comprehensive support.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-medium shadow-lg"
                                >
                                    {isLao ? 'ສຳຫຼວດໂຄງການ' : 'Explore Projects'} →
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 px-8 py-4 rounded-lg font-medium"
                                >
                                    {isLao ? 'ຕິດຕໍ່ພວກເຮົາ' : 'Contact Us'}
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
