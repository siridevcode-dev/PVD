'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaCheckCircle, FaGlobe, FaFlag, FaComments, FaClipboardCheck, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const SustainabilityPage = () => {
    const { t, i18n } = useTranslation();
    const isLao = i18n.language === 'la';

    const pillars = [
        { icon: <FaShieldAlt className="text-4xl" />, titleEn: 'Ethical Foundation', titleLa: 'ພື້ນຖານທາງຈັນຍາບັນ', descEn: 'Our process is driven by the mandate to ensure that all Project-Affected Persons (PAPs) achieve a restored or improved quality of life.', descLa: 'ຂະບວນການຂອງພວກເຮົາຖືກຂັບເຄື່ອນໂດຍພາລະກິດເພື່ອຮັບປະກັນວ່າປະຊາຊົນທີ່ໄດ້ຮັບຜົນກະທົບຈາກໂຄງການ (PAPs) ທັງໝົດບັນລຸຄຸນນະພາບຊີວິດທີ່ຟື້ນຟູ ຫຼື ດີຂຶ້ນ.', color: 'bg-primary-700' },
        { icon: <FaLeaf className="text-4xl" />, titleEn: 'Environmental Responsibility', titleLa: 'ຄວາມຮັບຜິດຊອບຕໍ່ສິ່ງແວດລ້ອມ', descEn: 'We implement comprehensive environmental management programs to minimize impact, promote ecological balance, and ensure sustainable development.', descLa: 'ພວກເຮົາຈັດຕັ້ງປະຕິບັດໂຄງການຄຸ້ມຄອງສິ່ງແວດລ້ອມຢ່າງຮອບດ້ານເພື່ອຫຼຸດຜ່ອນຜົນກະທົບ, ສົ່ງເສີມຄວາມສົມດຸນທາງນິເວດ ແລະ ຮັບປະກັນການພັດທະນາແບບຍືນຍົງ.', color: 'bg-green-600' },
        { icon: <FaUsers className="text-4xl" />, titleEn: 'Social Responsibility', titleLa: 'ຄວາມຮັບຜິດຊອບຕໍ່ສັງຄົມ', descEn: 'Our LIRP and Vulnerable Family Support Programs ensure no one is left behind, with guaranteed 3-5 years post-relocation support.', descLa: 'ໂຄງການ LIRP ແລະ ການສະໜັບສະໜູນຄອບຄົວທີ່ມີຄວາມສ່ຽງຂອງພວກເຮົາຮັບປະກັນວ່າບໍ່ມີໃຜຖືກປະຖິ້ມໄວ້, ພ້ອມການສະໜັບສະໜູນຫຼັງການຍົກຍ້າຍ 3-5 ປີ.', color: 'bg-blue-600' },
    ];

    const internationalStandards = [
        { icon: <FaGlobe />, textEn: 'IFC Performance Standards (especially PS5 - Land Acquisition and Involuntary Resettlement)', textLa: 'ມາດຕະຖານການປະຕິບັດຂອງ IFC (ໂດຍສະເພາະ PS5 - ການໄດ້ມາຂອງທີ່ດິນ ແລະ ການຍົກຍ້າຍໂດຍບໍ່ສະໝັກໃຈ)' },
        { icon: <FaGlobe />, textEn: 'World Bank Safeguard Policies', textLa: 'ນະໂຍບາຍປົກປ້ອງຂອງທະນາຄານໂລກ' },
        { icon: <FaGlobe />, textEn: 'Asian Development Bank Safeguard Policy', textLa: 'ນະໂຍບາຍປົກປ້ອງຂອງທະນາຄານພັດທະນາອາຊີ' },
        { icon: <FaGlobe />, textEn: 'International Best Practices for Resettlement', textLa: 'ການປະຕິບັດທີ່ດີທີ່ສຸດສາກົນສຳລັບການຍົກຍ້າຍຈັດສັນ' },
    ];

    const nationalStandards = [
        { icon: <FaFlag />, textEn: 'Lao PDR Environmental Protection Law', textLa: 'ກົດໝາຍວ່າດ້ວຍການປົກປ້ອງສິ່ງແວດລ້ອມ ສປປ ລາວ' },
        { icon: <FaFlag />, textEn: 'National Resettlement Policy', textLa: 'ນະໂຍບາຍການຍົກຍ້າຍຈັດສັນແຫ່ງຊາດ' },
        { icon: <FaFlag />, textEn: 'Land Law and Decree on Compensation', textLa: 'ກົດໝາຍວ່າດ້ວຍທີ່ດິນ ແລະ ດຳລັດວ່າດ້ວຍການຊົດເຊີຍ' },
        { icon: <FaFlag />, textEn: 'Relevant Provincial and District Regulations', textLa: 'ກົດລະບຽບຂອງແຂວງ ແລະ ເມືອງທີ່ກ່ຽວຂ້ອງ' },
    ];

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
                        poster="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    >
                        <source src="/videos/sustainability-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('sustainability.title')}</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{t('sustainability.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gray-50 rounded-2xl p-8 text-center">
                                <div className={`w-20 h-20 ${pillar.color} rounded-full flex items-center justify-center text-white mx-auto mb-6`}>{pillar.icon}</div>
                                <h3 className="text-xl font-bold text-primary-800 mb-4">{isLao ? pillar.titleLa : pillar.titleEn}</h3>
                                <p className="text-gray-600">{isLao ? pillar.descLa : pillar.descEn}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* International Standards */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center">
                                    <FaGlobe className="text-white text-xl" />
                                </div>
                                <h2 className="text-2xl font-bold text-primary-800">{isLao ? 'ມາດຕະຖານສາກົນ' : 'International Standards'}</h2>
                            </div>
                            <p className="text-gray-600 mb-8">{isLao ? 'ພວກເຮົາປະຕິບັດຕາມມາດຕະຖານສາກົນທີ່ເຄັ່ງຄັດທີ່ສຸດເພື່ອຮັບປະກັນຄວາມຮັບຜິດຊອບ ແລະ ການປະຕິບັດຕາມ.' : 'We adhere to the most rigorous international standards to ensure accountability and compliance.'}</p>
                            <div className="space-y-4">
                                {internationalStandards.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <p className="text-gray-700">{isLao ? item.textLa : item.textEn}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center">
                                    <FaFlag className="text-primary-900 text-xl" />
                                </div>
                                <h2 className="text-2xl font-bold text-primary-800">{isLao ? 'ການປະຕິບັດຕາມພາຍໃນປະເທດ' : 'National Compliance'}</h2>
                            </div>
                            <p className="text-gray-600 mb-8">{isLao ? 'ພວກເຮົາປະຕິບັດຕາມກົດໝາຍ ແລະ ກົດລະບຽບຂອງ ສປປ ລາວ ທັງໝົດຢ່າງເຂັ້ມງວດ.' : 'We strictly comply with all Lao PDR laws and regulations.'}</p>
                            <div className="space-y-4">
                                {nationalStandards.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
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

            {/* Transparency & Accountability */}
            <section className="section bg-primary-900 text-white">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{isLao ? 'ຄວາມໂປ່ງໃສ ແລະ ຄວາມຮັບຜິດຊອບ' : 'Transparency & Accountability'}</h2>
                        <p className="text-white/70 text-lg max-w-3xl mx-auto">{isLao ? 'ພວກເຮົາຮັບປະກັນການສື່ສານແບບເປີດເຜີຍ ແລະ ກົນໄກຄວາມຮັບຜິດຊອບທີ່ຊັດເຈນຕະຫຼອດທຸກໂຄງການ.' : 'We ensure open communication and clear accountability mechanisms throughout all projects.'}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* GRM */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center">
                                    <FaComments className="text-primary-900 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold">{isLao ? 'ກົນໄກແກ້ໄຂຂໍ້ຂ້ອງໃຈ (GRM)' : 'Grievance Redress Mechanism (GRM)'}</h3>
                            </div>
                            <p className="text-white/80 mb-6">{isLao ? 'ພວກເຮົາຮັກສາຂະບວນການທີ່ໂປ່ງໃສສຳລັບການຍື່ນ, ຕິດຕາມ ແລະ ແກ້ໄຂຂໍ້ຂ້ອງໃຈຂອງຊຸມຊົນ, ຮັບປະກັນຄວາມໄວ້ວາງໃຈ ແລະ ຄວາມຮັບຜິດຊອບ.' : 'We maintain a transparent process for submitting, tracking, and resolving community grievances, ensuring trust and accountability.'}</p>
                            <ul className="space-y-3">
                                {[
                                    { en: 'Clear submission process for complaints', la: 'ຂະບວນການຍື່ນຄຳຮ້ອງທຸກທີ່ຊັດເຈນ' },
                                    { en: 'Tracking system with timeline commitments', la: 'ລະບົບຕິດຕາມພ້ອມຄຳໝັ້ນສັນຍາເວລາ' },
                                    { en: 'Transparent resolution communication', la: 'ການສື່ສານການແກ້ໄຂທີ່ໂປ່ງໃສ' },
                                    { en: 'Community awareness campaigns', la: 'ການໂຄສະນາສ້າງຈິດສຳນຶກຊຸມຊົນ' },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-secondary-400 flex-shrink-0" />
                                        <span className="text-white/90">{isLao ? item.la : item.en}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Monitoring & Audit */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center">
                                    <FaClipboardCheck className="text-primary-900 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold">{isLao ? 'ການຕິດຕາມ ແລະ ກວດສອບ' : 'Monitoring & Audit'}</h3>
                            </div>
                            <p className="text-white/80 mb-6">{isLao ? 'ການຕິດຕາມພາຍໃນ ແລະ ພາຍນອກຢ່າງຕໍ່ເນື່ອງຕະຫຼອດການຈັດຕັ້ງປະຕິບັດໂຄງການ, ນຳໄປສູ່ການກວດສອບສຳເລັດສຸດທ້າຍສຳລັບຜູ້ໃຫ້ກູ້ ແລະ ພາກສ່ວນກ່ຽວຂ້ອງ.' : 'Continuous internal and external monitoring throughout project implementation, leading to a final Completion Audit for lenders and stakeholders.'}</p>
                            <ul className="space-y-3">
                                {[
                                    { en: 'Regular internal progress reviews', la: 'ການທົບທວນຄວາມຄືບໜ້າພາຍໃນເປັນປະຈຳ' },
                                    { en: 'External independent monitoring', la: 'ການຕິດຕາມອິດສະຫຼະພາຍນອກ' },
                                    { en: 'Lender compliance reporting', la: 'ການລາຍງານການປະຕິບັດຕາມຕໍ່ຜູ້ໃຫ້ກູ້' },
                                    { en: 'Final Completion Audit certification', la: 'ການຢັ້ງຢືນການກວດສອບສຳເລັດສຸດທ້າຍ' },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-secondary-400 flex-shrink-0" />
                                        <span className="text-white/90">{isLao ? item.la : item.en}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sustainable Outcomes */}
            <section className="py-20 bg-[#7b7b7b] text-white">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaHandshake className="text-4xl" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{isLao ? 'ຜົນໄດ້ຮັບທີ່ຍືນຍົງ' : 'Sustainable Outcomes'}</h2>
                        <p className="text-white/90 text-lg leading-relaxed mb-8">
                            {isLao
                                ? 'ຜ່ານໂຄງການ LIRP ແລະ ການສະໜັບສະໜູນຫຼັງການຍົກຍ້າຍຂອງພວກເຮົາ (ປົກກະຕິ 3-5 ປີ), ພວກເຮົາຮັບປະກັນຄວາມໝັ້ນຄົງ ແລະ ຄວາມສຳເລັດໃນໄລຍະຍາວສຳລັບຊຸມຊົນທີ່ຖືກຍົກຍ້າຍ. ເປົ້າໝາຍຂອງພວກເຮົາແມ່ນເພື່ອຮັບປະກັນວ່າປະຊາຊົນທີ່ໄດ້ຮັບຜົນກະທົບຈາກໂຄງການທັງໝົດຈະມີຄວາມເປັນຢູ່ທີ່ດີກວ່າກ່ອນໂຄງການເລີ່ມຕົ້ນ.'
                                : 'Through our LIRP and post-relocation support programs (typically 3-5 years), we guarantee long-term stability and success for resettled communities. Our goal is to ensure that all Project-Affected Persons are better off than before project commencement.'}
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-12">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">3-5</div>
                                <div className="text-white/70 text-sm">{isLao ? 'ປີສະໜັບສະໜູນຫຼັງການຍົກຍ້າຍ' : 'Years Post-Relocation Support'}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <div className="text-white/70 text-sm">{isLao ? 'ການຊົດເຊີຍຄົບຖ້ວນ' : 'Full Compensation'}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-white/70 text-sm">{isLao ? 'ການຕິດຕາມຢ່າງຕໍ່ເນື່ອງ' : 'Continuous Monitoring'}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SustainabilityPage;
