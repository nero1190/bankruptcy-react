import React, { useState, useEffect } from "react";

export default function Slides() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Калькулятор банкротства",
            imageBaseName: "slide1",
            showImage: currentSlide === 0,
        },
        {
            title: "Сохранение имущества",
            imageBaseName: "slide2",
            showImage: currentSlide === 1,
        },
        {
            title: "Юридическая поддержка",
            imageBaseName: "slide3",
            showImage: currentSlide === 2,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative mb-6 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto relative">
                    {/* Слайды */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out h-[40vh] md:h-[400px]"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`w-full flex-shrink-0 flex items-center justify-center p-2 md:p-4 transition-opacity duration-700 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    <picture className="w-full h-full">
                                        <source
                                            srcSet={`/images/${slide.imageBaseName}-desktop.png`}
                                            media="(min-width: 768px)"
                                        />
                                        <img
                                            src={`/images/${slide.imageBaseName}-mobile.png`}
                                            alt={slide.title}
                                            className="w-full h-full object-contain md:object-cover md:object-[center_20%] rounded-xl shadow-lg aspect-auto md:aspect-[16/9] transition-all duration-700 ease-in-out"
                                        />
                                    </picture>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Кнопки навигации */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300"
                        aria-label="Предыдущий слайд"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300"
                        aria-label="Следующий слайд"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Индикаторы */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? 'bg-emerald-400 w-6'
                                    : 'bg-emerald-700 hover:bg-emerald-500'
                                    }`}
                                aria-label={`Слайд ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
