import React, { useEffect, useRef } from 'react';
import './InfiniteSlider.css';

const items = [
    {
        image: './imgs/automation.png',
        caption: 'Automation',
    },
    {
        image: './imgs/nextmove.png',
        caption: 'NextMove',
    },
    {
        image: './imgs/penta.png',
        caption: 'Penta',
    },
    {
        image: './imgs/product.png',
        caption: 'Product',
    },
    {
        image: './imgs/proline.png',
        caption: 'Proline',
    },
    {
        image: './imgs/sitemark.png',
        caption: 'SiteMark',
    },
    {
        image: './imgs/vision.png',
        caption: 'Vision',
    },
    {
        image: './imgs/waveless.png',
        caption: 'Waveless',
    },
];

const InfiniteSlider = () => {
    const sliderRef = useRef(null);
    const cloneRef = useRef(null);
    const totalWidthRef = useRef(0);

    useEffect(() => {
        const slider = sliderRef.current;
        const clone = cloneRef.current;
        const sliderChildren = Array.from(slider.children);
        const cloneChildren = sliderChildren.map(child => child.cloneNode(true));

        cloneChildren.forEach(cloneChild => {
            clone.appendChild(cloneChild);
        });

        const totalWidth = slider.scrollWidth;
        totalWidthRef.current = totalWidth;
        slider.style.width = `${totalWidth}px`;
        clone.style.width = `${totalWidth}px`;

        let stepIndex = 0;

        const moveSlider = () => {
            const stepWidth = sliderChildren[0].getBoundingClientRect().width;
            stepIndex = (stepIndex + 1) % sliderChildren.length;
            const currentTransform = stepIndex * stepWidth;

            slider.style.transition = 'transform 0.5s linear';
            clone.style.transition = 'transform 0.5s linear';
            slider.style.transform = `translateX(-${currentTransform}px)`;
            clone.style.transform = `translateX(-${currentTransform}px)`;

            if (stepIndex === sliderChildren.length - 1) {
                setTimeout(() => {
                    slider.style.transition = 'none';
                    clone.style.transition = 'none';
                    slider.style.transform = `translateX(0)`;
                    clone.style.transform = `translateX(0)`;
                    stepIndex = 0;
                }, 500);
            }
        };

        const interval = setInterval(moveSlider, 2500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="slider-container">
                <div className="slider" ref={sliderRef}>
                    {items.map((item) => (
                        <img className='slider-item' src={require(`${item.image}`)} alt={item.caption} />
                    ))}
                </div>
                <div className="slider" ref={cloneRef}></div>
            </div>
        </>
    );
};

export default InfiniteSlider;
