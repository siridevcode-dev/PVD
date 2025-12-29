import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';


// Typewriter Effect Component
const TypewriterText = ({ text, delay = 0, speed = 80, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout;
        let currentIndex = 0;

        const startTyping = () => {
            const interval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsComplete(true);
                    // Hide cursor after animation completes
                    setTimeout(() => setShowCursor(false), 1500);
                }
            }, speed);
            return interval;
        };

        timeout = setTimeout(() => {
            const interval = startTyping();
            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, speed]);

    // Cursor blink effect
    useEffect(() => {
        if (!isComplete) {
            const cursorInterval = setInterval(() => {
                setShowCursor(prev => !prev);
            }, 530);
            return () => clearInterval(cursorInterval);
        }
    }, [isComplete]);

    return (
        <span className={className}>
            {displayText}
            <span
                className="inline-block w-[3px] h-[1em] bg-secondary-400 ml-1 align-middle"
                style={{
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.1s'
                }}
            />
        </span>
    );
};

// Fade In Letter by Letter Component
const FadeInText = ({ text, delay = 0, staggerDelay = 0.03, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    if (!isVisible) {
        return <span className={`${className} opacity-0`}>{text}</span>;
    }

    return (
        <span className={className}>
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: index * staggerDelay,
                        ease: 'easeOut'
                    }}
                    style={{ display: 'inline-block' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
};

const Hero = () => {
    const { t, i18n } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);
    const [mounted, setMounted] = useState(false);
    const isLao = i18n.language === 'la';

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional hydration pattern for client-side rendering
        setMounted(true);
    }, []);

    // Show placeholder with same dimensions during SSR to prevent layout shift
    if (!mounted) {
        return (
            <section className="hero-section">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/images/hero-bg.jpg"
                    >
                        <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="gradient-overlay" />
            </section>
        );
    }

    const heroTitle = t('hero.title');
    const heroSubtitle = t('hero.subtitle');
    const heroDescription = t('hero.description');

    // Calculate delays based on title length
    const titleDuration = heroTitle.length * 80 + 500; // typewriter duration
    const subtitleDelay = titleDuration + 300;
    const descriptionDelay = subtitleDelay + heroSubtitle.length * 30 + 500;
    const buttonDelay = descriptionDelay + 800;

    return (
        <section className="hero-section">
            <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/images/hero-bg.jpg"
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="gradient-overlay" />

            <div className="relative z-10 container-custom text-center text-white">
                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <TypewriterText text={heroTitle} delay={500} speed={80} />
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-secondary-400">
                        <FadeInText text={heroSubtitle} delay={subtitleDelay} staggerDelay={0.025} />
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
                        <FadeInText text={heroDescription} delay={descriptionDelay} staggerDelay={0.008} />
                    </p>

                    {/* Watch Video Button */}
                    <motion.button
                        onClick={() => setShowVideo(true)}
                        className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: buttonDelay / 1000, duration: 0.6 }}
                    >
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaPlay className="text-secondary-500 text-sm ml-0.5" />
                        </div>
                        <span className="text-white font-medium">
                            {isLao ? 'ເບິ່ງວີດີໂອ' : 'Watch our video'}
                        </span>
                    </motion.button>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setShowVideo(false)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl hover:text-secondary-400 transition-colors z-10"
                            onClick={() => setShowVideo(false)}
                        >
                            <FaTimes />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                                {/* Replace with actual YouTube/Vimeo embed */}
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/QnfRnPg-wnw?autoplay=1"
                                    title="PVD Company Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
