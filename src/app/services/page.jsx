'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHardHat, FaBuilding, FaLeaf, FaUsers, FaHandHoldingHeart, FaExchangeAlt, FaWater, FaHome, FaArrowRight, FaCheckCircle, FaComments, FaClipboardCheck, FaTruck } from 'react-icons/fa';

const services = [
    { key: 'newSite', slug: 'new-site', icon: <FaHome />, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { key: 'infrastructure', slug: 'infrastructure', icon: <FaHardHat />, image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { key: 'publicBuildings', slug: 'public-buildings', icon: <FaBuilding />, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { key: 'emp', slug: 'emp', icon: <FaLeaf />, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { key: 'riverClearing', slug: 'river-clearing', icon: <FaWater />, image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { key: 'cdp', slug: 'cdp', icon: <FaUsers />, image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { key: 'livelihood', slug: 'livelihood', icon: <FaHandHoldingHeart />, image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { key: 'compensation', slug: 'compensation', icon: <FaExchangeAlt />, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const phase1Items = [
    { icon: <FaClipboardCheck />, textEn: 'RAP Finalization & Compliance Review', textLa: 'ການສິ້ນສຸດ RAP ແລະ ການທົບທວນການປະຕິບັດຕາມ' },
    { icon: <FaUsers />, textEn: 'Census, Socio-Economic Surveys & Inventory of Losses (IOL)', textLa: 'ການສຳຫຼວດພົນລະເມືອງ, ເສດຖະກິດ-ສັງຄົມ ແລະ ບັນຊີການສູນເສຍ (IOL)' },
    { icon: <FaComments />, textEn: 'Public Consultation & Stakeholder Engagement', textLa: 'ການປຶກສາຫາລືສາທາລະນະ ແລະ ການມີສ່ວນຮ່ວມຂອງພາກສ່ວນກ່ຽວຂ້ອງ' },
    { icon: <FaCheckCircle />, textEn: 'Grievance Redress Mechanism (GRM) Setup', textLa: 'ການຕັ້ງກົນໄກແກ້ໄຂຂໍ້ຂ້ອງໃຈ (GRM)' },
];

const phase2Items = [
    { icon: <FaExchangeAlt />, textEn: 'Compensation & Entitlement Distribution', textLa: 'ການແຈກຈ່າຍຄ່າຊົດເຊີຍ ແລະ ສິດທິ' },
    { icon: <FaTruck />, textEn: 'Physical Relocation Support', textLa: 'ການສະໜັບສະໜູນການຍົກຍ້າຍທາງກາຍະພາບ' },
    { icon: <FaHome />, textEn: 'Housing/Site Provision (Serviced land/fully built houses)', textLa: 'ການສະໜອງເຮືອນ/ສະຖານທີ່ (ດິນທີ່ມີສາທາລະນູປະໂພກ/ເຮືອນສ້າງສຳເລັດ)' },
    { icon: <FaHandHoldingHeart />, textEn: 'Post-Relocation Support (3-5 years LIRP continuation)', textLa: 'ການສະໜັບສະໜູນຫຼັງການຍົກຍ້າຍ (ສືບຕໍ່ LIRP 3-5 ປີ)' },
];

const ServicesPage = () => {
    const { t, i18n } = useTranslation();
    const isLao = i18n.language === 'la';

    return (
        <div>
            {/* Half-height Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center bg-primary-900 text-white overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    >
                        <source src="/videos/services-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('services.title')}</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{t('services.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Core Service Philosophy - LSTK */}
            <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
                        <div className="inline-block px-4 py-2 bg-secondary-500 text-primary-900 rounded-full font-semibold text-sm mb-6">
                            {isLao ? 'ປັດຊະຍາບໍລິການຫຼັກ' : 'Core Service Philosophy'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {isLao ? 'ຮູບແບບ Lump Sum Turnkey (LSTK)' : 'Lump Sum Turnkey (LSTK) Model'}
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            {isLao
                                ? 'ພວກເຮົາສະໜອງການຄຸ້ມຄອງໂຄງການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ແຜນປະຕິບັດການຍົກຍ້າຍຈັດສັນແບບ LSTK ຢ່າງຮອບດ້ານ, ຮັບຜິດຊອບຢ່າງເຕັມທີ່ໃນການສະໜອງຜົນສຳເລັດຕັ້ງແຕ່ການວາງແຜນຈົນເຖິງການສະໜັບສະໜູນຫຼັງການຍົກຍ້າຍ.'
                                : 'We provide comprehensive Lump Sum Turnkey (LSTK) management of Environment Management Programs and Resettlement Action Plans, taking full responsibility for delivering successful outcomes from planning through post-relocation support.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Two-Phase Service Structure */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="section-title">{isLao ? 'ຂະບວນການບໍລິການແບບເຊື່ອມໂຍງ' : 'Integrated Service Process'}</h2>
                        <p className="section-subtitle">{isLao ? 'ວິທີການສອງໄລຍະເພື່ອຄວາມສຳເລັດ' : 'Two-Phase Approach to Success'}</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Phase 1 */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-primary-700 text-white p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center text-primary-900 font-bold text-xl">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold">{isLao ? 'ໄລຍະ 1: ການວາງແຜນ ແລະ ການປະຕິບັດຕາມ' : 'Phase 1: Planning & Compliance'}</h3>
                                        <p className="text-white/70 text-sm">{isLao ? 'ການຄຸ້ມຄອງຄວາມສ່ຽງ ແລະ ການກຳນົດພື້ນຖານ' : 'Risk Management & Foundation Setting'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                {phase1Items.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <p className="text-gray-700">{isLao ? item.textLa : item.textEn}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Phase 2 */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-secondary-500 text-primary-900 p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold">{isLao ? 'ໄລຍະ 2: ການປະຕິບັດ ແລະ ການປ່ຽນຜ່ານ' : 'Phase 2: Execution & Transition'}</h3>
                                        <p className="text-primary-700 text-sm">{isLao ? 'ຄວາມໝັ້ນຄົງດ້ານການດຳລົງຊີວິດ ແລະ ການສ້າງຊຸມຊົນ' : 'Livelihood Security & Community Building'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                {phase2Items.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-700 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <p className="text-gray-700">{isLao ? item.textLa : item.textEn}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="section-title">{isLao ? 'ບໍລິການຫຼັກຂອງພວກເຮົາ' : 'Our Core Services'}</h2>
                        <p className="section-subtitle">{isLao ? 'ການແກ້ໄຂບັນຫາການຍົກຍ້າຍຈັດສັນແບບຮອບດ້ານ' : 'Comprehensive Resettlement Solutions'}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div key={service.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                {/* Image at Top */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={t(`services.items.${service.key}.title`)}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-700 text-2xl shadow-lg">
                                        {service.icon}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary-800 mb-3">{t(`services.items.${service.key}.title`)}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{t(`services.items.${service.key}.desc`)}</p>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium transition-colors group"
                                    >
                                        {isLao ? 'ສຶກສາເພີ່ມເຕີມ' : 'Learn More'}
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-900 text-white">
                <div className="container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{isLao ? 'ຕ້ອງການບໍລິການຂອງພວກເຮົາບໍ?' : 'Need Our Services?'}</h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">{isLao ? 'ຕິດຕໍ່ພວກເຮົາມື້ນີ້ເພື່ອປຶກສາຄວາມຕ້ອງການຂອງທ່ານ.' : 'Contact us today to discuss your needs.'}</p>
                        <Link href="/contact" className="btn btn-secondary">{t('nav.contact')}</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
