'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { projects as projectsData } from '../../data/projects';

const ProjectsPage = () => {
    const { t, i18n } = useTranslation();
    const isLao = i18n.language === 'la';

    // Convert projects object to array
    const projects = Object.values(projectsData);

    // We display all projects, no filtering.
    const filteredProjects = projects;

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
                        poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    >
                        <source src="/videos/projects-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('projects.title')}</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{t('projects.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Summary Stats */}
            <section className="py-12 bg-white border-b">
                <div className="container-custom">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            <div className="text-4xl font-bold text-primary-700">3,309</div>
                            <div className="text-gray-600">{isLao ? 'ຄອບຄົວທັງໝົດ' : 'Total Households'}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <div className="text-4xl font-bold text-secondary-500">3</div>
                            <div className="text-gray-600">{isLao ? 'ໂຄງການໃຫຍ່' : 'Major Projects'}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <div className="text-4xl font-bold text-green-600">LSTK</div>
                            <div className="text-gray-600">{isLao ? 'ຮູບແບບຄຸ້ມຄອງ' : 'Management Model'}</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            {/* Projects list */}
            <section className="section bg-gray-50 py-16">
                <div className="container-custom">
                    <div className="space-y-12">
                        {filteredProjects.map((project, index) => {
                            const highlights = isLao ? project.highlightsLa : project.highlightsEn;

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl group"
                                >
                                    {/* Full Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={project.image}
                                            alt={isLao ? project.titleLa : project.titleEn}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Glassmorphism Overlay Card */}
                                    <div className="absolute top-4 left-4 bottom-4 w-full md:w-[480px] bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-white/50 shadow-sm transition-all duration-300 hover:bg-white/70">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                                                {isLao ? project.titleLa : project.titleEn}
                                            </h3>
                                            <p className="text-gray-800 font-medium mb-4 text-sm md:text-base line-clamp-2 opacity-90">
                                                {isLao ? project.descriptionLa : project.descriptionEn}
                                            </p>

                                            {/* Tags / Highlights */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {highlights && highlights.slice(0, 4).map((tag, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-accent-700/80 text-white text-xs rounded-full backdrop-blur-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {/* Fallback tags if highlights missing */}
                                                {!highlights && (
                                                    <span className="px-3 py-1 bg-primary-800 text-white text-xs rounded-full">
                                                        {isLao ? (project.statusLa || project.status) : project.status}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bottom Details & Action */}
                                        <div>
                                            <div className="flex flex-col gap-1 mb-4 text-sm text-gray-800">
                                                <div className="flex items-center gap-2">
                                                    <FaUsers className="text-gray-700" />
                                                    <span>
                                                        {isLao ? 'ຜູ້ທີ່ໄດ້ຮັບຜົນກະທົບ:' : 'Affected:'}
                                                        <span className="font-bold ml-1">{project.familiesAffected || project.households} {isLao ? 'ຄອບຄົວ' : 'Families'}</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaMapMarkerAlt className="text-gray-700" />
                                                    <span className="truncate">{isLao ? project.locationLa : project.locationEn}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="text-xl font-bold text-gray-900 flex flex-col">
                                                    <span className="text-xs font-normal text-gray-600 uppercase">{isLao ? 'ໄລຍະເວລາ' : 'Period'}</span>
                                                    {project.year}
                                                </div>
                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="group/btn flex items-center gap-2 bg-accent-700/90 hover:bg-accent-800 text-white pl-5 pr-2 py-2 rounded-full transition-all duration-300"
                                                >
                                                    <span className="text-sm font-medium">{t('hero.learnMore')}</span>
                                                    <span className="bg-white/20 rounded-full p-1.5 group-hover/btn:translate-x-1 transition-transform">
                                                        <FaArrowRight className="text-xs" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LSTK Model Section */}
            <section className="py-16 bg-primary-900 text-white">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {isLao ? 'ຮູບແບບ Lump Sum Turnkey (LSTK)' : 'Lump Sum Turnkey (LSTK) Model'}
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            {isLao
                                ? 'PVD ສະໜອງການຄຸ້ມຄອງໂຄງການ RAP ແລະ LIRP ແບບຄົບວົງຈອນຕົ້ນຈົນຈົບ, ຮັບຜິດຊອບຢ່າງເຕັມທີ່ສຳລັບທຸກດ້ານຂອງການຍົກຍ້າຍຈັດສັນຕັ້ງແຕ່ການວາງແຜນຈົນເຖິງການສະໜັບສະໜູນຫຼັງການຍົກຍ້າຍ.'
                                : 'PVD provides comprehensive end-to-end management of RAP and LIRP programs, taking full responsibility for all aspects of resettlement from planning through post-relocation support.'}
                        </p>
                        <Link href="/services" className="btn btn-secondary">
                            {t('nav.services')}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
