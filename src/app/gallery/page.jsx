'use client';

import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaImages, FaMap, FaVideo, FaMapMarkerAlt, FaPlus, FaMinus, FaExpand } from 'react-icons/fa';
import { galleryItems, photoCategories, projectMapSummaries as projectMapsData, videoItems as videos, mapItems } from '../../data/gallery';

// Simple drag/swipe hook (no momentum - always moves 1 item)
const useDrag = (onNavigate) => {
    const dragStartRef = useRef({ x: 0 });

    const handleDragStart = (e) => {
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        dragStartRef.current = { x: clientX };
    };

    const handleDragEnd = (e) => {
        const clientX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
        const displacement = clientX - dragStartRef.current.x;

        if (Math.abs(displacement) < 50) return;

        const direction = displacement < 0 ? 'next' : 'prev';
        onNavigate(direction);
    };

    return {
        onMouseDown: handleDragStart,
        onMouseUp: handleDragEnd,
        onMouseLeave: handleDragEnd,
        onTouchStart: handleDragStart,
        onTouchEnd: handleDragEnd,
    };
};

// Village pins data for the map - Cleared for now as we don't have specific lat/long for each village
const villageMapPins = [];

const GalleryPage = () => {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState('photos');
    const [activeMapTab, setActiveMapTab] = useState('project_map');
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedLayout, setSelectedLayout] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [photoCarouselIndex, setPhotoCarouselIndex] = useState(0);
    const [showPhotoCarousel, setShowPhotoCarousel] = useState(false);
    // Map zoom and pan state
    const [mapZoom, setMapZoom] = useState(1);
    const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const mapContainerRef = useRef(null);

    // Zoom constraints
    const MIN_ZOOM = 1;
    const MAX_ZOOM = 4;
    const ZOOM_STEP = 0.5;

    // Calculate pin size based on zoom level (inversely proportional, with limits)
    const getPinSize = useCallback(() => {
        // Base size is 48px (w-12 h-12), scale down as zoom increases
        const baseSize = 48;
        const scaledSize = baseSize / Math.sqrt(mapZoom);
        return Math.max(32, Math.min(56, scaledSize)); // Clamp between 32-56px
    }, [mapZoom]);

    // Zoom handlers
    const handleZoomIn = useCallback(() => {
        setMapZoom(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
    }, []);

    const handleZoomOut = useCallback(() => {
        setMapZoom(prev => {
            const newZoom = Math.max(prev - ZOOM_STEP, MIN_ZOOM);
            // Reset position if zooming back to 1
            if (newZoom <= 1) {
                setMapPosition({ x: 0, y: 0 });
            }
            return newZoom;
        });
    }, []);

    const handleZoomReset = useCallback(() => {
        setMapZoom(1);
        setMapPosition({ x: 0, y: 0 });
    }, []);

    // Mouse wheel zoom
    const handleWheel = useCallback((e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
        setMapZoom(prev => {
            const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev + delta));
            if (newZoom <= 1) {
                setMapPosition({ x: 0, y: 0 });
            }
            return newZoom;
        });
    }, []);

    // Pan handlers (only when zoomed in)
    const handlePanStart = useCallback((e) => {
        if (mapZoom <= 1) return;
        e.preventDefault();
        setIsDragging(true);
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        setDragStart({ x: clientX - mapPosition.x, y: clientY - mapPosition.y });
    }, [mapZoom, mapPosition]);

    const handlePanMove = useCallback((e) => {
        if (!isDragging || mapZoom <= 1) return;
        e.preventDefault();
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        // Calculate boundaries based on zoom level
        const container = mapContainerRef.current;
        if (!container) return;

        const maxOffset = (mapZoom - 1) * container.offsetWidth * 0.3;
        const maxOffsetY = (mapZoom - 1) * container.offsetHeight * 0.3;

        const newX = Math.max(-maxOffset, Math.min(maxOffset, clientX - dragStart.x));
        const newY = Math.max(-maxOffsetY, Math.min(maxOffsetY, clientY - dragStart.y));

        setMapPosition({ x: newX, y: newY });
    }, [isDragging, mapZoom, dragStart]);

    const handlePanEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    // Reset zoom when project changes
    const handleProjectSelect = useCallback((project) => {
        setSelectedProject(project);
        setMapZoom(1);
        setMapPosition({ x: 0, y: 0 });
    }, []);

    const handleLayoutSelect = useCallback((layout) => {
        setSelectedLayout(layout);
        setMapZoom(1);
        setMapPosition({ x: 0, y: 0 });
    }, []);

    const filteredPhotos = activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);


    const navigatePhotoCarousel = (direction) => {
        setPhotoCarouselIndex((prev) => {
            if (direction === 'prev') {
                return prev === 0 ? filteredPhotos.length - 1 : prev - 1;
            } else {
                return prev === filteredPhotos.length - 1 ? 0 : prev + 1;
            }
        });
    };

    const photoDragHandlers = useDrag(navigatePhotoCarousel);

    const openPhotoCarousel = (index) => {
        setPhotoCarouselIndex(index);
        setShowPhotoCarousel(true);
    };

    const sectionLabels = {
        photos: { en: 'Photos', la: 'ຮູບພາບ', icon: <FaImages /> },
        videos: { en: 'Videos', la: 'ວີດີໂອ', icon: <FaVideo /> },
        maps: { en: 'Maps & Layouts', la: 'ແຜນທີ່ ແລະ ແຜນຜັງ', icon: <FaMap /> },
    };

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
                        <source src="/videos/gallery-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('gallery.title')}</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{t('gallery.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Section Tabs */}
            <section className="bg-white border-b sticky top-0 z-50 shadow-md">
                <div className="container-custom">
                    <div className="flex justify-center gap-2 py-4">
                        {Object.entries(sectionLabels).map(([key, value]) => (
                            <button
                                key={key}
                                onClick={() => { setActiveSection(key); setActiveCategory('all'); }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeSection === key
                                    ? 'bg-primary-700 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {value.icon}
                                {i18n.language === 'la' ? value.la : value.en}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photos Section */}
            {activeSection === 'photos' && (
                <section className="section bg-gray-50">
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-wrap justify-center gap-3 mb-12">
                            {photoCategories.map((cat) => (
                                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full font-medium transition-all ${activeCategory === cat ? 'bg-primary-700 text-white' : 'bg-white text-gray-600 hover:bg-primary-50'}`}>
                                    {t(`gallery.categories.${cat}`)}
                                </button>
                            ))}
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredPhotos.map((item, index) => (
                                <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 }} className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group" onClick={() => openPhotoCarousel(index)}>
                                    <img src={item.image} alt={i18n.language === 'la' ? item.titleLa : item.titleEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <p className="text-white font-medium text-sm">{i18n.language === 'la' ? item.titleLa : item.titleEn}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Maps Section */}
            {/* Maps Section */}
            {activeSection === 'maps' && (
                <section className="section bg-gray-50">
                    <div className="container-custom mb-8">
                        {/* Sub-navigation for Maps vs Layouts */}
                        <div className="flex justify-center gap-4 py-8">
                            <button
                                onClick={() => setActiveMapTab('project_map')}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${activeMapTab === 'project_map'
                                    ? 'bg-primary-700 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {i18n.language === 'la' ? 'ແຜນທີ່ໂຄງການ' : 'Project Map'}
                            </button>
                            <button
                                onClick={() => setActiveMapTab('layouts')}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${activeMapTab === 'layouts'
                                    ? 'bg-primary-700 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {i18n.language === 'la' ? 'ແຜນຜັງ' : 'Layouts'}
                            </button>
                        </div>
                    </div>

                    {/* Project Map View */}
                    {activeMapTab === 'project_map' && (
                        <div className="bg-gray-200 py-16 mb-16">
                            <div className="container-custom">

                                {/* Title Section - Above the grid */}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">{i18n.language === 'la' ? 'ແຜນທີ່ໂຄງການ' : 'Project Map'}</h2>
                                    <p className="text-gray-600">{i18n.language === 'la' ? 'ແຜນທີ່ສະແດງເຂດພື້ນທີ່ໂຄງການ' : 'Regional project area maps'}</p>
                                </motion.div>

                                {/* Layout: Top Thumbnails Row - Bottom Main Map */}
                                <div className="flex flex-col gap-8">
                                    {/* Top Row - Project Thumbnails */}
                                    <div className="flex flex-row justify-center flex-wrap gap-6 pb-4">
                                        {projectMapsData.map((project, index) => (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => handleProjectSelect(project)}
                                                className={`flex-shrink-0 cursor-pointer group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-primary-700 w-full md:w-64 ${selectedProject?.id === project.id ? 'ring-4 ring-secondary-500 scale-105' : ''}`}
                                            >
                                                <div className="relative aspect-[4/3]">
                                                    <img
                                                        src={project.image}
                                                        alt={i18n.language === 'la' ? project.nameLa : project.nameEn}
                                                        className="w-full h-full object-cover opacity-80"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                                        <p className="text-white text-sm font-bold truncate">
                                                            {i18n.language === 'la' ? project.nameLa : project.nameEn}
                                                        </p>
                                                        <p className="text-secondary-400 text-xs font-medium">{project.capacity}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Main Map Area */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative"
                                    >
                                        {selectedProject ? (
                                            // Show selected project map with zoom capability
                                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                                {/* Zoom Controls */}
                                                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                                                    <button
                                                        onClick={handleZoomIn}
                                                        disabled={mapZoom >= MAX_ZOOM}
                                                        className="w-10 h-10 bg-white/95 hover:bg-white text-primary-800 rounded-lg shadow-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                                        title={i18n.language === 'la' ? 'ຂະຫຍາຍ' : 'Zoom In'}
                                                    >
                                                        <FaPlus className="text-lg" />
                                                    </button>
                                                    <button
                                                        onClick={handleZoomOut}
                                                        disabled={mapZoom <= MIN_ZOOM}
                                                        className="w-10 h-10 bg-white/95 hover:bg-white text-primary-800 rounded-lg shadow-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                                        title={i18n.language === 'la' ? 'ຫຍໍ້' : 'Zoom Out'}
                                                    >
                                                        <FaMinus className="text-lg" />
                                                    </button>
                                                    <button
                                                        onClick={handleZoomReset}
                                                        disabled={mapZoom === 1}
                                                        className="w-10 h-10 bg-white/95 hover:bg-white text-primary-800 rounded-lg shadow-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                                        title={i18n.language === 'la' ? 'ຣີເຊັດ' : 'Reset'}
                                                    >
                                                        <FaExpand className="text-lg" />
                                                    </button>
                                                </div>

                                                {/* Zoom Level Indicator */}
                                                <div className="absolute top-4 left-16 z-20 bg-white/95 px-3 py-1.5 rounded-lg shadow-lg">
                                                    <span className="text-primary-800 text-sm font-medium">
                                                        {Math.round(mapZoom * 100)}%
                                                    </span>
                                                </div>

                                                {/* Zoomable Map Container */}
                                                <div
                                                    ref={mapContainerRef}
                                                    className={`relative overflow-hidden min-h-[400px] ${mapZoom > 1 ? 'cursor-grab' : 'cursor-default'} ${isDragging ? 'cursor-grabbing' : ''}`}
                                                    onWheel={handleWheel}
                                                    onMouseDown={handlePanStart}
                                                    onMouseMove={handlePanMove}
                                                    onMouseUp={handlePanEnd}
                                                    onMouseLeave={handlePanEnd}
                                                    onTouchStart={handlePanStart}
                                                    onTouchMove={handlePanMove}
                                                    onTouchEnd={handlePanEnd}
                                                >
                                                    <div
                                                        className="transition-transform duration-200 ease-out origin-center"
                                                        style={{
                                                            transform: `scale(${mapZoom}) translate(${mapPosition.x / mapZoom}px, ${mapPosition.y / mapZoom}px)`,
                                                        }}
                                                    >
                                                        <img
                                                            src={selectedProject.image}
                                                            alt={i18n.language === 'la' ? selectedProject.nameLa : selectedProject.nameEn}
                                                            className="w-full h-auto min-h-[400px] object-cover select-none pointer-events-none"
                                                            draggable={false}
                                                        />
                                                        {/* Village/Resettlement Pin Markers - Scale with zoom */}
                                                        {villageMapPins.map((village, index) => {
                                                            const pinSize = getPinSize();
                                                            const iconSize = pinSize * 0.4;
                                                            return (
                                                                <motion.div
                                                                    key={village.id}
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 + index * 0.05 }}
                                                                    className="absolute z-10 cursor-pointer"
                                                                    style={{
                                                                        top: village.pinTop,
                                                                        left: village.pinLeft,
                                                                        // Counter-scale to maintain visual size
                                                                        transform: `translate(-50%, -50%) scale(${1 / mapZoom})`,
                                                                    }}
                                                                    onClick={(e) => { e.stopPropagation(); }}
                                                                >
                                                                    <div className="relative group">
                                                                        {/* Orange circle with pin - dynamic size */}
                                                                        <div
                                                                            className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 group-hover:scale-125"
                                                                            style={{ width: pinSize, height: pinSize }}
                                                                        >
                                                                            <FaMapMarkerAlt
                                                                                className="text-primary-800"
                                                                                style={{ fontSize: iconSize }}
                                                                            />
                                                                        </div>
                                                                        {/* Ripple effect */}
                                                                        <div
                                                                            className="absolute bg-orange-400 rounded-full animate-ping opacity-30"
                                                                            style={{
                                                                                width: pinSize,
                                                                                height: pinSize,
                                                                                top: 0,
                                                                                left: 0
                                                                            }}
                                                                        />
                                                                        {/* Tooltip on hover */}
                                                                        <div
                                                                            className="absolute bg-white rounded-lg px-3 py-2 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                                                            style={{ left: pinSize + 8, top: 0 }}
                                                                        >
                                                                            <p className="text-primary-800 font-medium text-sm">
                                                                                {i18n.language === 'la' ? village.nameLa : village.nameEn}
                                                                            </p>
                                                                            <p className="text-xs text-gray-500">
                                                                                {village.families} {i18n.language === 'la' ? 'ຄອບຄົວ' : 'Families'}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Info overlay - stays fixed at bottom */}
                                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                                                    <h3 className="text-2xl font-bold mb-2">
                                                        {i18n.language === 'la' ? selectedProject.nameLa : selectedProject.nameEn}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-4 text-sm mb-3">
                                                        <span className="flex items-center gap-2 bg-secondary-500/20 px-3 py-1 rounded-full">
                                                            <span className="text-secondary-400 font-bold">{selectedProject.capacity}</span>
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <FaMapMarkerAlt className="text-secondary-400" />
                                                            {i18n.language === 'la' ? selectedProject.locationLa : selectedProject.location}
                                                        </span>
                                                    </div>
                                                    <p className="text-white/80 text-sm">
                                                        {i18n.language === 'la' ? selectedProject.descLa : selectedProject.descEn}
                                                    </p>
                                                    <div className="mt-3">
                                                        <span className="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                                                            ● {i18n.language === 'la' ? selectedProject.statusLa : selectedProject.status}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Zoom hint - shows when at 100% */}
                                                {mapZoom === 1 && (
                                                    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-black/60 text-white/80 px-4 py-2 rounded-full text-sm pointer-events-none">
                                                        {i18n.language === 'la' ? 'ໃຊ້ລໍ້ເມົ້າເພື່ອຊູມ ຫຼື ກົດປຸ່ມ +/-' : 'Use mouse wheel to zoom or click +/- buttons'}
                                                    </div>
                                                )}

                                                {/* Back to map button */}
                                                <button
                                                    onClick={() => { setSelectedProject(null); handleZoomReset(); }}
                                                    className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-primary-800 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transition-all pointer-events-auto"
                                                >
                                                    {i18n.language === 'la' ? '← ກັບຄືນແຜນທີ່' : '← Back to Map'}
                                                </button>
                                            </div>
                                        ) : (
                                            // Empty placeholder - just instruction text
                                            <div className="flex flex-col items-center justify-center min-h-[400px] rounded-xl bg-white/50">
                                                <p className="text-gray-500 text-center">
                                                    {i18n.language === 'la' ? 'ກົດແຜນທີ່ດ້ານເທິງເພື່ອເບິ່ງລາຍລະອຽດ' : 'Click on project maps above to view details'}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Layouts View */}
                    {activeMapTab === 'layouts' && (
                        <div className="bg-gray-200 py-16 mb-16">
                            <div className="container-custom">
                                {/* Title Section */}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">{i18n.language === 'la' ? 'ແຜນຜັງໂຄງການ' : 'Project Layouts'}</h2>
                                    <p className="text-gray-600">{i18n.language === 'la' ? 'ລາຍລະອຽດແຜນຜັງການຈັດສັນ' : 'Detailed resettlement layout plans'}</p>
                                </motion.div>

                                {/* Thumbnails Row */}
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-row justify-center flex-wrap gap-6 pb-4">
                                        {mapItems.map((item, index) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => handleLayoutSelect(item)}
                                                className={`flex-shrink-0 cursor-pointer group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-primary-700 w-full md:w-64 ${selectedLayout?.id === item.id ? 'ring-4 ring-secondary-500 scale-105' : ''}`}
                                            >
                                                <div className="relative aspect-[4/3]">
                                                    <img
                                                        src={item.image}
                                                        alt={i18n.language === 'la' ? item.titleLa : item.titleEn}
                                                        className="w-full h-full object-cover opacity-80"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                                        <p className="text-white text-sm font-bold truncate">
                                                            {i18n.language === 'la' ? item.titleLa : item.titleEn}
                                                        </p>
                                                        <p className="text-secondary-400 text-xs font-medium">
                                                            {i18n.language === 'la' ? item.categoryLa : item.categoryEn}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Main Layout Area */}
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative">
                                        {selectedLayout ? (
                                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                                {/* Zoom Controls */}
                                                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                                                    <button onClick={handleZoomIn} disabled={mapZoom >= MAX_ZOOM} className="w-10 h-10 bg-white/95 hover:bg-white text-primary-800 rounded-lg shadow-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                                                        <FaPlus className="text-lg" />
                                                    </button>
                                                    <button onClick={handleZoomOut} disabled={mapZoom <= MIN_ZOOM} className="w-10 h-10 bg-white/95 hover:bg-white text-primary-800 rounded-lg shadow-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                                                        <FaMinus className="text-lg" />
                                                    </button>
                                                    <button onClick={handleZoomReset} disabled={mapZoom === 1} className="w-10 h-10 bg-white/95 hover:bg-white text-primary-800 rounded-lg shadow-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                                                        <FaExpand className="text-lg" />
                                                    </button>
                                                </div>

                                                <div className="absolute top-4 left-16 z-20 bg-white/95 px-3 py-1.5 rounded-lg shadow-lg">
                                                    <span className="text-primary-800 text-sm font-medium">{Math.round(mapZoom * 100)}%</span>
                                                </div>

                                                {/* Zoomable View */}
                                                <div
                                                    ref={mapContainerRef}
                                                    className={`relative overflow-hidden min-h-[400px] ${mapZoom > 1 ? 'cursor-grab' : 'cursor-default'} ${isDragging ? 'cursor-grabbing' : ''}`}
                                                    onWheel={handleWheel}
                                                    onMouseDown={handlePanStart}
                                                    onMouseMove={handlePanMove}
                                                    onMouseUp={handlePanEnd}
                                                    onMouseLeave={handlePanEnd}
                                                    onTouchStart={handlePanStart}
                                                    onTouchMove={handlePanMove}
                                                    onTouchEnd={handlePanEnd}
                                                >
                                                    <div
                                                        className="transition-transform duration-200 ease-out origin-center"
                                                        style={{ transform: `scale(${mapZoom}) translate(${mapPosition.x / mapZoom}px, ${mapPosition.y / mapZoom}px)` }}
                                                    >
                                                        <img
                                                            src={selectedLayout.image}
                                                            alt={i18n.language === 'la' ? selectedLayout.titleLa : selectedLayout.titleEn}
                                                            className="w-full h-auto min-h-[400px] object-cover select-none pointer-events-none"
                                                            draggable={false}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Info Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                                                    <h3 className="text-2xl font-bold mb-2">
                                                        {i18n.language === 'la' ? selectedLayout.titleLa : selectedLayout.titleEn}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-4 text-sm mb-3">
                                                        <span className="flex items-center gap-2 bg-secondary-500/20 px-3 py-1 rounded-full">
                                                            <span className="text-secondary-400 font-bold">{i18n.language === 'la' ? selectedLayout.categoryLa : selectedLayout.categoryEn}</span>
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <FaMapMarkerAlt className="text-secondary-400" />
                                                            {i18n.language === 'la' ? 'ແຜນຜັງໂຄງການ' : 'Project Layout'}
                                                        </span>
                                                    </div>
                                                    <p className="text-white/80 text-sm">
                                                        {i18n.language === 'la' ? selectedLayout.descLa : selectedLayout.descEn}
                                                    </p>
                                                    <div className="mt-3">
                                                        <span className="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                                                            ● {i18n.language === 'la' ? 'ອະນຸມັດແລ້ວ' : 'Approved'}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Back Button */}
                                                <button
                                                    onClick={() => { setSelectedLayout(null); handleZoomReset(); }}
                                                    className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-primary-800 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transition-all"
                                                >
                                                    {i18n.language === 'la' ? '← ກັບຄືນ' : '← Back to List'}
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center min-h-[400px] rounded-xl bg-white/50">
                                                <p className="text-gray-500 text-center">
                                                    {i18n.language === 'la' ? 'ກົດເລືອກແຜນຜັງດ້ານເທິງເພື່ອເບິ່ງລາຍລະອຽດ' : 'Select a layout from the thumbnails above to view details'}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            )}

            {/* Videos Section */}
            {activeSection === 'videos' && (
                <section className="section bg-gray-50">
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary-800 mb-4">{i18n.language === 'la' ? 'ວີດີໂອໂຄງການ' : 'Project Videos'}</h2>
                            <p className="text-gray-600">{i18n.language === 'la' ? 'ເບິ່ງວີດີໂອນຳສະເໜີໂຄງການ ແລະ ກິດຈະກຳຂອງພວກເຮົາ' : 'Watch videos about our projects and activities'}</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.map((video, index) => (
                                <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer" onClick={() => setSelectedVideo(video)}>
                                    <div className="relative aspect-video overflow-hidden">
                                        <img src={video.thumbnail} alt={i18n.language === 'la' ? video.titleLa : video.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <FaPlay className="text-primary-900 text-xl ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
                                            {video.duration}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg text-primary-800">{i18n.language === 'la' ? video.titleLa : video.titleEn}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Photo Carousel Modal - Bootstrap Style with Thumbnails */}
            <AnimatePresence>
                {showPhotoCarousel && filteredPhotos.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 py-6"
                        style={{ background: '#1a1f2e' }}
                        onClick={() => setShowPhotoCarousel(false)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white/70 text-2xl hover:text-white transition-colors z-20"
                            onClick={() => setShowPhotoCarousel(false)}
                        >
                            <FaTimes />
                        </button>

                        {/* Main Carousel Container */}
                        <div
                            className="relative w-full max-w-5xl flex-1 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left Arrow */}
                            <button
                                className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 text-white/80 text-4xl md:text-5xl hover:text-white transition-colors z-10 p-2"
                                onClick={(e) => { e.stopPropagation(); navigatePhotoCarousel('prev'); }}
                            >
                                <FaChevronLeft />
                            </button>

                            {/* Main Image with Drag Support */}
                            <div
                                className="w-full max-w-4xl mx-12 md:mx-20 cursor-grab active:cursor-grabbing select-none"
                                {...photoDragHandlers}
                            >
                                <motion.div
                                    key={photoCarouselIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative aspect-[16/10] w-full overflow-hidden rounded-lg shadow-2xl"
                                >
                                    <img
                                        src={filteredPhotos[photoCarouselIndex]?.image}
                                        alt={i18n.language === 'la' ? filteredPhotos[photoCarouselIndex]?.titleLa : filteredPhotos[photoCarouselIndex]?.titleEn}
                                        className="w-full h-full object-cover pointer-events-none"
                                        draggable={false}
                                    />
                                    {/* Optional Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <h3 className="text-white text-lg md:text-xl font-semibold">
                                            {i18n.language === 'la' ? filteredPhotos[photoCarouselIndex]?.titleLa : filteredPhotos[photoCarouselIndex]?.titleEn}
                                        </h3>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-white/80 text-4xl md:text-5xl hover:text-white transition-colors z-10 p-2"
                                onClick={(e) => { e.stopPropagation(); navigatePhotoCarousel('next'); }}
                            >
                                <FaChevronRight />
                            </button>
                        </div>

                        {/* Thumbnail Strip */}
                        <div
                            className="w-full max-w-5xl mt-6 px-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex gap-3 justify-center overflow-x-auto py-2 px-2 scrollbar-hide">
                                {filteredPhotos.map((photo, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setPhotoCarouselIndex(index)}
                                        className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden transition-all duration-300 ${index === photoCarouselIndex
                                            ? 'ring-2 ring-green-500 ring-offset-2 ring-offset-[#1a1f2e] scale-105'
                                            : 'opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={photo.image}
                                            alt={i18n.language === 'la' ? photo.titleLa : photo.titleEn}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Image Counter */}
                        <div className="text-white/60 text-sm mt-3">
                            {photoCarouselIndex + 1} / {filteredPhotos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <div className="bg-black w-full max-w-4xl aspect-video rounded-xl overflow-hidden relative shadow-2xl" onClick={e => e.stopPropagation()}>
                            <button
                                className="absolute top-4 right-4 text-white text-2xl hover:text-secondary-500 z-10 transition-colors"
                                onClick={() => setSelectedVideo(null)}
                            >
                                <FaTimes />
                            </button>
                            <div className="w-full h-full flex items-center justify-center">
                                {/* Placeholder for actual video player */}
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                        <FaPlay className="text-primary-900 text-3xl ml-2" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-2">{i18n.language === 'la' ? selectedVideo.titleLa : selectedVideo.titleEn}</h3>
                                    <p className="text-gray-400">Video Player Loading...</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
