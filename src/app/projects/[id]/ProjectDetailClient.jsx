'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaCheckCircle, FaHome, FaRoad, FaSchool, FaHospital, FaLeaf } from 'react-icons/fa';

import { projects } from '../../../data/projects';
import { galleryItems } from '../../../data/gallery';

const iconMap = {
    infrastructure: <FaRoad className="text-2xl" />,
    resettlement: <FaHome className="text-2xl" />,
    community: <FaUsers className="text-2xl" />,
    environment: <FaLeaf className="text-2xl" />,
    livelihood: <FaSchool className="text-2xl" />,
    cultural: <FaHospital className="text-2xl" />,
};

const ProjectDetailClient = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const project = projects[id];

    // Get relevant gallery items for this project
    const projectGallery = galleryItems.filter(item => item.category === id).map(item => item.image);
    // If no filtered items found, fall back to the project's own images or placeholders if defined in data
    const displayGallery = projectGallery.length > 0 ? projectGallery : (project?.gallery || []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
                    <Link href="/projects" className="btn btn-primary">Back to Projects</Link>
                </div>
            </div>
        );
    }

    const isLao = i18n.language === 'la';

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-end bg-primary-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent" />
                </div>
                <div className="container-custom relative z-10 pb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Link href="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                            <FaArrowLeft /> {isLao ? 'ກັບຄືນໂຄງການ' : 'Back to Projects'}
                        </Link>
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${project.category === 'infrastructure' ? 'bg-blue-500' :
                            project.category === 'resettlement' ? 'bg-green-500' :
                                project.category === 'community' ? 'bg-purple-500' :
                                    project.category === 'environment' ? 'bg-emerald-500' :
                                        project.category === 'livelihood' ? 'bg-orange-500' : 'bg-amber-500'
                            }`}>
                            {t(`projects.categories.${project.category}`)}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            {isLao ? project.titleLa : project.titleEn}
                        </h1>
                        <div className="flex flex-wrap gap-6 text-white/80 text-lg">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt /> {isLao ? project.locationLa : project.locationEn}
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt /> {project.year}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-8 border-b">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">{project.familiesAffected.toLocaleString()}</div>
                            <div className="text-gray-600">{isLao ? 'ຄອບຄົວທີ່ໄດ້ຮັບການສະໜັບສະໜູນ' : 'Families Supported'}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">{project.villagesResettled}</div>
                            <div className="text-gray-600">{isLao ? 'ບ້ານທີ່ຍົກຍ້າຍ' : 'Villages Resettled'}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">{project.year.split('-')[1] - project.year.split('-')[0] || '10+'}</div>
                            <div className="text-gray-600">{isLao ? 'ປີຂອງໂຄງການ' : 'Years Duration'}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mx-auto mb-2">
                                {iconMap[project.category]}
                            </div>
                            <div className="text-gray-600">{t(`projects.categories.${project.category}`)}</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h2 className="text-3xl font-bold text-primary-800 mb-6">{isLao ? 'ພາບລວມໂຄງການ' : 'Project Overview'}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {isLao ? project.descriptionLa : project.descriptionEn}
                            </p>

                            <h3 className="text-xl font-bold text-primary-800 mb-4">{isLao ? 'ຂອບເຂດການບໍລິການ' : 'Scope of Services'}</h3>
                            <div className="space-y-3">
                                {(isLao ? project.scopeLa : project.scopeEn).map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-secondary-500 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h3 className="text-xl font-bold text-primary-800 mb-6">{isLao ? 'ຈຸດເດັ່ນຂອງໂຄງການ' : 'Project Highlights'}</h3>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="space-y-4">
                                    {(isLao ? project.highlightsLa : project.highlightsEn).map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl"
                                        >
                                            <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-primary-900 font-bold">
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="section-title">{isLao ? 'ຄັງຮູບພາບໂຄງການ' : 'Project Gallery'}</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {displayGallery.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img src={img} alt={`${project.titleEn} ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-900 text-white">
                <div className="container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {isLao ? 'ສົນໃຈໂຄງການຂອງພວກເຮົາບໍ?' : 'Interested in Our Projects?'}
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                            {isLao ? 'ຕິດຕໍ່ພວກເຮົາມື້ນີ້ເພື່ອປຶກສາຫາລືກ່ຽວກັບຄວາມຕ້ອງການຂອງທ່ານ' : 'Contact us today to discuss your project needs'}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn btn-secondary">{t('nav.contact')}</Link>
                            <Link href="/projects" className="btn bg-white/10 hover:bg-white/20 text-white">
                                {isLao ? 'ເບິ່ງໂຄງການອື່ນໆ' : 'View Other Projects'}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
};

export default ProjectDetailClient;
