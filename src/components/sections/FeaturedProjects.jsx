'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaRoad, FaBuilding, FaLeaf, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const projectStats = [
    { icon: <FaHome />, count: '5', labelEn: 'MAJOR PROJECTS', labelLa: 'ໂຄງການໃຫຍ່', subEn: 'Completed in Lao PDR', subLa: 'ສຳເລັດໃນ ສປປ ລາວ', color: 'bg-blue-500' },
    { icon: <FaUsers />, count: '3,360+', labelEn: 'FAMILIES RESETTLED', labelLa: 'ຄອບຄົວຍົກຍ້າຍ', subEn: 'Supported & relocated', subLa: 'ສະໜັບສະໜູນ ແລະ ຍົກຍ້າຍ', color: 'bg-secondary-500' },
    { icon: <FaBuilding />, count: '50+', labelEn: 'VILLAGES DEVELOPED', labelLa: 'ບ້ານພັດທະນາ', subEn: 'New communities built', subLa: 'ຊຸມຊົນໃໝ່ທີ່ສ້າງຂຶ້ນ', color: 'bg-orange-500' },
    { icon: <FaRoad />, count: '150+', labelEn: 'KM INFRASTRUCTURE', labelLa: 'ກມ ພື້ນຖານໂຄງລ່າງ', subEn: 'Roads & utilities', subLa: 'ຖະໜົນ ແລະ ສາທາລະນູປະໂພກ', color: 'bg-green-500' },
];

const mapProjects = [
    {
        id: 'nn2',
        top: '41%',
        left: '31%',
        nameEn: 'Nam Ngum 2 (NN2)',
        nameLa: 'ນ້ຳງື່ມ 2 (NN2)',
        households: '1,053 HHs',
        color: 'from-blue-400 to-blue-600',
        ripple: 'bg-blue-400',
        mapImage: '/images/laosmap4.png',
        cardImage: '/images/nn2-dam.jpg',
        backgroundImage: '/images/nn2-dam.jpg',
        descriptionEn: 'A major hydropower project contributing to national energy security.',
        descriptionLa: 'ໂຄງການໄຟຟ້າພະລັງນໍ້າຂະໜາດໃຫຍ່ທີ່ປະກອບສ່ວນເຂົ້າໃນຄວາມໝັ້ນຄົງດ້ານພະລັງງານແຫ່ງຊາດ.'
    },
    {
        id: 'xhpp',
        top: '35%',
        left: '24%',
        nameEn: 'Xayaburi (XHPP)',
        nameLa: 'ໄຊຍະບູລີ (XHPP)',
        households: '663 HHs',
        color: 'from-orange-400 to-orange-600',
        ripple: 'bg-orange-400',
        mapImage: '/images/laosmap3.png',
        cardImage: '/images/xayaburi-dam.png',
        backgroundImage: '/images/xayaburi-dam.png',
        descriptionEn: 'Sustainable hydropower development on the Mekong mainstream.',
        descriptionLa: 'ການພັດທະນາໄຟຟ້າພະລັງນໍ້າແບບຍືນຍົງໃນສາຍນໍ້າຂອງ.'
    },
    {
        id: 'lphpp',
        top: '25%',
        left: '35%',
        nameEn: 'Luang Prabang (LPHPP)',
        nameLa: 'ຫຼວງພະບາງ (LPHPP)',
        households: '1,593 HHs',
        color: 'from-purple-400 to-purple-600',
        ripple: 'bg-purple-400',
        mapImage: '/images/laosmap2.png',
        cardImage: '/images/lphpp-dam.jpg',
        backgroundImage: '/images/lphpp-dam.jpg',
        descriptionEn: 'Modern infrastructure supporting community development.',
        descriptionLa: 'ພື້ນຖານໂຄງລ່າງທີ່ທັນສະໄໝສະໜັບສະໜູນການພັດທະນາຊຸມຊົນ.'
    },
];

const defaultMapImage = '/images/laosmap1.png';

const FeaturedProjects = () => {
    const { t, i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isExiting, setIsExiting] = useState(false);

    // Get current map image based on selected project
    const currentMapImage = selectedProject
        ? mapProjects.find(p => p.id === selectedProject)?.mapImage || defaultMapImage
        : defaultMapImage;

    // Get current background image based on selected project (null when no project selected)
    const currentBackgroundImage = selectedProject
        ? mapProjects.find(p => p.id === selectedProject)?.backgroundImage
        : null;

    // Handle click on empty area to reset map
    const handleMapAreaClick = () => {
        // Reset selection when clicking anywhere on the map container
        if (selectedProject) {
            setIsExiting(true);
            setTimeout(() => {
                setSelectedProject(null);
                setIsExiting(false);
            }, 300);
        }
    };

    // Handle pin click
    const handlePinClick = (e, projectId) => {
        e.stopPropagation();

        if (selectedProject && selectedProject !== projectId) {
            // Switch to new project with slide-out animation for old card
            setIsExiting(true);
            setTimeout(() => {
                setSelectedProject(projectId);
                setIsExiting(false);
            }, 300);
        } else if (selectedProject === projectId) {
            // Click same project - close it
            setIsExiting(true);
            setTimeout(() => {
                setSelectedProject(null);
                setIsExiting(false);
            }, 300);
        } else {
            // No project selected, open new one
            setSelectedProject(projectId);
        }
    };

    const activeProject = selectedProject ? mapProjects.find(p => p.id === selectedProject) : null;

    // Derive isLao from i18n
    const isLao = i18n.language === 'la';

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative min-h-[80vh] overflow-hidden">
            {/* Background - Solid color by default, image when project selected */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Solid gradient background (always visible) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />

                {/* Project background image (only when project selected) */}
                <AnimatePresence mode="sync">
                    {currentBackgroundImage && (
                        <motion.div
                            key={currentBackgroundImage}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={currentBackgroundImage}
                                alt="Projects Background"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-primary-800/40" />
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container-custom relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {isLao ? 'ໂຄງການຂອງພວກເຮົາ' : 'OUR PROJECTS'}
                        </h2>

                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            {isLao
                                ? 'PVD ໄດ້ປະສົບຜົນສຳເລັດໃນການຈັດຕັ້ງປະຕິບັດໂຄງການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ແຜນປະຕິບັດການຍົກຍ້າຍຈັດສັນໃນ ສປປ ລາວ, ສ້າງຊຸມຊົນໃໝ່ ແລະ ປັບປຸງຊີວິດການເປັນຢູ່ຂອງຫຼາຍພັນຄອບຄົວ.'
                                : 'PVD has successfully implemented Environment Management Programs and Resettlement Action Plans across Lao PDR, creating new communities and improving livelihoods for thousands of families.'
                            }
                        </p>

                        {/* Investment Structure Label */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                                <FaLeaf className="text-white/70" />
                            </div>
                            <span className="text-white/70 uppercase tracking-wider text-sm">
                                {isLao ? 'ໂຄງສ້າງໂຄງການ' : 'PROJECT STRUCTURE'}
                            </span>
                        </div>

                        {/* Project Stats */}
                        <div className="space-y-6">
                            {projectStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                                        {stat.icon}
                                    </div>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-4xl font-bold text-white">{stat.count}</span>
                                        <div>
                                            <p className="text-secondary-400 font-semibold text-sm">{isLao ? stat.labelLa : stat.labelEn}</p>
                                            <p className="text-white/50 text-xs">{isLao ? stat.subLa : stat.subEn}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* View Projects Link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-10"
                        >
                            <Link href="/projects" className="btn btn-secondary">
                                {t('projects.viewAll')}
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Laos Map Image */}
                        <div
                            className="relative w-full aspect-square max-w-md mx-auto lg:-ml-20 cursor-pointer rounded-2xl overflow-hidden"
                            onClick={handleMapAreaClick}
                        >
                            {/* Map Image - Dynamic based on selection */}
                            <Image
                                src={currentMapImage}
                                alt="Laos Map"
                                width={500}
                                height={500}
                                className="w-full h-full object-contain drop-shadow-2xl"
                                priority
                            />

                            {/* Project Location Markers - Clickable */}
                            {mapProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 z-50"
                                    style={{ top: project.top, left: project.left }}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div className="block relative group">
                                        {/* Colored circle with pin - matching map color */}
                                        <button
                                            onClick={(e) => handlePinClick(e, project.id)}
                                            className={`relative z-10 w-5 h-5 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center cursor-pointer transition-all ${selectedProject === project.id ? 'scale-125 ring-4 ring-white/50' : 'group-hover:scale-125'} shadow-xl`}
                                        >
                                            <FaMapMarkerAlt className="text-white text-xs" />
                                        </button>
                                        {/* Ripple effect */}
                                        <div className={`absolute inset-0 ${project.ripple} rounded-full animate-ping opacity-30 pointer-events-none`} />

                                        {/* Tooltip on hover only (hidden when selected as card shows) */}
                                        {hoveredProject === project.id && selectedProject !== project.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute left-12 top-0 bg-white rounded-lg px-4 py-2 shadow-lg whitespace-nowrap z-50"
                                            >
                                                <p className="text-primary-800 font-medium text-sm">
                                                    {isLao ? project.nameLa : project.nameEn}
                                                </p>
                                                <p className="text-secondary-600 font-semibold text-xs">{project.households}</p>
                                                <Link href={`/projects/${project.id}`} className="text-xs text-primary-600 hover:underline">
                                                    {isLao ? 'ກົດເພື່ອເບິ່ງລາຍລະອຽດ' : 'Click for details'}
                                                </Link>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Detail Card Overlay - Below map on mobile, overlay on desktop */}
                        <AnimatePresence mode="wait">
                            {activeProject && (
                                <motion.div
                                    key={activeProject.id}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.1,
                                    }}
                                    animate={isExiting ? {
                                        opacity: 0,
                                        x: 200,
                                        scale: 0.8,
                                        transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }
                                    } : {
                                        opacity: 1,
                                        scale: 1,
                                        x: 0,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25,
                                            mass: 0.8
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: 200,
                                        scale: 0.8,
                                        transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }
                                    }}
                                    style={{ transformOrigin: 'left center' }}
                                    className="mt-4 mx-auto w-[220px] lg:absolute lg:mt-0 lg:top-12 lg:-right-36 lg:w-[280px] bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden z-[60] p-2 lg:p-3"
                                >
                                    <div className="relative h-28 lg:h-44 rounded-xl lg:rounded-2xl overflow-hidden">
                                        <Image
                                            src={activeProject.cardImage}
                                            alt={activeProject.nameEn}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${activeProject.color.replace('from-', 'from-black/10 ').replace('to-', 'to-')} opacity-60`} />
                                        <div className="absolute bottom-2 left-3 lg:bottom-3 lg:left-4 text-white">
                                            <div className="font-bold text-sm lg:text-lg leading-tight shadow-black/50 drop-shadow-md">
                                                {isLao ? activeProject.nameLa : activeProject.nameEn}
                                            </div>
                                            <div className="text-[10px] lg:text-xs opacity-90 font-medium">
                                                {activeProject.households}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-3 lg:pt-4 pb-1 lg:pb-2 px-1">
                                        <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2 lg:line-clamp-3">
                                            {isLao ? activeProject.descriptionLa : activeProject.descriptionEn}
                                        </p>
                                        <Link
                                            href={`/projects/${activeProject.id}`}
                                            className={`block w-full py-1.5 lg:py-2 rounded-lg bg-gradient-to-r ${activeProject.color} text-center text-white text-[10px] lg:text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-shadow`}
                                        >
                                            {isLao ? 'ອ່ານເພີ່ມເຕີມ' : 'READ MORE'}
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute left-4 bottom-8 flex items-center gap-2 text-white/50 text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="w-px h-12 bg-white/30" />
                    <span className="rotate-[-90deg] origin-left whitespace-nowrap">SCROLL DOWN</span>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
