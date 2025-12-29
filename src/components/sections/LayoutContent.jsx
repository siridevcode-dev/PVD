'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const layoutItems = [
    {
        id: 1,
        image: '/images/hydropower-dam.jpg',
        titleEn: 'Hydropower Dam',
        titleLa: 'ເຂື່ອນໄຟຟ້ານ້ຳຕົກ',
        descEn: 'Major hydropower infrastructure projects',
        descLa: 'ໂຄງການພື້ນຖານໂຄງລ່າງເຂື່ອນໄຟຟ້າ',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        titleEn: 'Resettlement Village',
        titleLa: 'ບ້ານຍົກຍ້າຍຈັດສັນ',
        descEn: 'Modern resettlement communities',
        descLa: 'ຊຸມຊົນຍົກຍ້າຍຈັດສັນທັນສະໄໝ',
    },
    {
        id: 3,
        image: '/images/school.jpg',
        titleEn: 'School',
        titleLa: 'ໂຮງຮຽນ',
        descEn: 'Educational facilities construction',
        descLa: 'ການກໍ່ສ້າງສິ່ງອຳນວຍຄວາມສະດວກດ້ານການສຶກສາ',
    },
    {
        id: 4,
        image: '/images/infrastructure.jpg',
        titleEn: 'Infrastructure',
        titleLa: 'ພື້ນຖານໂຄງລ່າງ',
        descEn: 'Roads and utilities development',
        descLa: 'ການພັດທະນາຖະໜົນ ແລະ ສາທາລະນູປະໂພກ',
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Community Meeting',
        titleLa: 'ກອງປະຊຸມຊຸມຊົນ',
        descEn: 'Community engagement activities',
        descLa: 'ກິດຈະກຳການມີສ່ວນຮ່ວມຂອງຊຸມຊົນ',
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Hospital',
        titleLa: 'ໂຮງໝໍ',
        descEn: 'Healthcare facilities',
        descLa: 'ສິ່ງອຳນວຍຄວາມສະດວກດ້ານສາທາລະນະສຸກ',
    },
];

const LayoutContent = () => {
    const { i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);

    // Derive isLao from i18n
    const isLao = i18n.language === 'la';

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="py-20 bg-gray-100 min-h-[600px]" />;
    }

    return (
        <section className="py-20 bg-gray-100">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                        {isLao ? 'ຄັງຮູບພາບໂຄງການ' : 'PROJECT GALLERY'}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {isLao
                            ? 'ສຳຫຼວດພື້ນທີ່ໂຄງການ ແລະ ສະພາບແວດລ້ອມທຳມະຊາດຂອງພວກເຮົາ'
                            : 'Explore our project areas and natural environments'
                        }
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    {/* Item 1 - Large left (spans 2 cols, 1 row) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-2 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={layoutItems[0].image}
                            alt={isLao ? layoutItems[0].titleLa : layoutItems[0].titleEn}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-amber-400 font-semibold text-lg mb-1">
                                {isLao ? layoutItems[0].titleLa : layoutItems[0].titleEn}
                            </h3>
                            <p className="text-white/80 text-sm">
                                {isLao ? layoutItems[0].descLa : layoutItems[0].descEn}
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2 - Tall middle (spans 1 col, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={layoutItems[1].image}
                            alt={isLao ? layoutItems[1].titleLa : layoutItems[1].titleEn}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-amber-400 font-semibold text-base mb-1">
                                {isLao ? layoutItems[1].titleLa : layoutItems[1].titleEn}
                            </h3>
                            <p className="text-white/80 text-sm">
                                {isLao ? layoutItems[1].descLa : layoutItems[1].descEn}
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 3 - Top right (1 col, 1 row) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={layoutItems[2].image}
                            alt={isLao ? layoutItems[2].titleLa : layoutItems[2].titleEn}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-amber-400 font-semibold text-sm mb-1">
                                {isLao ? layoutItems[2].titleLa : layoutItems[2].titleEn}
                            </h3>
                            <p className="text-white/70 text-xs line-clamp-2">
                                {isLao ? layoutItems[2].descLa : layoutItems[2].descEn}
                            </p>
                        </div>
                    </motion.div>

                    {/* Bottom row items */}
                    {/* Item 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={layoutItems[3].image}
                            alt={isLao ? layoutItems[3].titleLa : layoutItems[3].titleEn}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-amber-400 font-semibold text-sm mb-1">
                                {isLao ? layoutItems[3].titleLa : layoutItems[3].titleEn}
                            </h3>
                            <p className="text-white/70 text-xs line-clamp-2">
                                {isLao ? layoutItems[3].descLa : layoutItems[3].descEn}
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={layoutItems[4].image}
                            alt={isLao ? layoutItems[4].titleLa : layoutItems[4].titleEn}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-amber-400 font-semibold text-sm mb-1">
                                {isLao ? layoutItems[4].titleLa : layoutItems[4].titleEn}
                            </h3>
                            <p className="text-white/70 text-xs line-clamp-2">
                                {isLao ? layoutItems[4].descLa : layoutItems[4].descEn}
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="col-span-1 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={layoutItems[5].image}
                            alt={isLao ? layoutItems[5].titleLa : layoutItems[5].titleEn}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-amber-400 font-semibold text-sm mb-1">
                                {isLao ? layoutItems[5].titleLa : layoutItems[5].titleEn}
                            </h3>
                            <p className="text-white/70 text-xs line-clamp-2">
                                {isLao ? layoutItems[5].descLa : layoutItems[5].descEn}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* View More Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <Link href="/gallery" className="btn btn-secondary">
                        {isLao ? 'ເບິ່ງທັງໝົດ' : 'View All'}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default LayoutContent;
