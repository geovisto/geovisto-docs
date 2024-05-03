import React, { useState, useEffect } from "react";
import "../../../pages/index.css";
import "./research.css";
import { Button } from "react-bootstrap";

import Link from "@docusaurus/Link";

/**
 * This file contains implementation of community frontend for home page
 *
 * @author Iva Utikalova
 */



const community_files = [
    "2024-01-01-community_1.md",
    "2024-01-02-community_2.md",
    "2024-01-03-community_3.md",
    "2024-01-04-community_4.md",
    "2024-01-05-community_5.md"
];

const Slide = (props) => {
    var nameClass = "";
    if (props.index === 0) {
        nameClass = "slide__prev"; 
    } else if (props.index === 1) {
        nameClass = "slide__active"; 
    } else if (props.index === 2) {
        nameClass = "slide__next"; 
    }
    
    return (
          <div className={"slider__slide " + nameClass} >
            <div className="block">
                <h3 className="slide__titles">
                    <a href={"/research/" + props.href} className="href">{props.title}</a>
                </h3>
                <div className="slide__name">
                    {props.name}
                </div>
            </div>
        </div>
    );
};


export const Research = () => {

    const [slides, setSlide] = useState([]);

    useEffect(() => {   
        community_files.forEach(element => {
            const markdown = require('!!raw-loader!../../../../research/' + element)?.default;
            
            var extractedMetadata = extractMetadata(markdown);
            extractedMetadata["id"] = (element.split('.')[0]).split('-').join('/');
            setSlide(slides => [...slides, extractedMetadata]);

        });
    },[]);

    function extractMetadata(markdown) {
        const frontMatter = markdown.split('---');

        if (frontMatter.length == 3) {

            const metadataLines = frontMatter[1].split('\n').filter(line => line.trim() !== '');

            const metadata = {};
            metadataLines?.forEach(line => {
                var [key, ...valueParts] = line.split(':').map(item => item.trim());
                key = key.split(" ")[1];

                metadata[key] = valueParts.join(':').replace(/(^"|"$)/g, '').trim();
            });

            metadata["tags"] = metadata["tags"] ? metadata["tags"].split(',').map(tag => tag.trim()) : [];

            return metadata;
        }
        return [];
    }


    const handleNext = (e) => {
        var active = document.querySelectorAll(".slide__active");
        var prev = document.querySelectorAll(".slide__prev");
        var next = document.querySelectorAll(".slide__next");

        [].forEach.call(active, function(el) {
            el.classList.remove("slide__active");
            el.classList.add("slide__prev");
        });


        [].forEach.call(next, function(el) {
            let sibling = el.nextSibling;
            if (sibling) {
                sibling.classList.add("slide__next");
            } else {
                e.target.classList.add("hidden");
            }
            el.classList.remove("slide__next");
            el.classList.add("slide__active");
        });

        [].forEach.call(prev, function(el) {
            el.classList.remove("slide__prev");
        });
        document.getElementById("prev").classList.remove("hidden");
    }

    const handlePrev = (e) => {
        var active = document.querySelectorAll(".slide__active");
        var prev = document.querySelectorAll(".slide__prev");
        var next = document.querySelectorAll(".slide__next");

        [].forEach.call(active, function(el) {
            el.classList.remove("slide__active");
            el.classList.add("slide__next");
        });

        [].forEach.call(prev, function(el) {
            let sibling = el.previousSibling;
            if (sibling) {
                sibling.classList.add("slide__prev");
            } else {
                e.target.classList.add("hidden");
            }
            el.classList.remove("slide__prev");
            el.classList.add("slide__active");
        });

        [].forEach.call(next, function(el) {
            el.classList.remove("slide__next");
        });
        document.getElementById("next").classList.remove("hidden");

    }

    return (
        <div className="community-container container-fluid text-center">
            <div className="w-100">
                <div className="community w-100 lead">
                    <h1 className="title">
                        Research
                    </h1>
                    <div className="w-100">
                        Stay up to date with library updates.
                    </div>
                    <div className="community-button w-100 p-3 pb-lg-5 lead">
                        <Link to="/research" className="ps-lg-3">
                            <Button variant="default">Go to Research</Button>
                        </Link>
                    </div>
                    <div className="slider__container">
                        <div className="slider__wrapper">
                            {slides.map((slide, index) => (
                                <Slide 
                                    key={slide["id"]} 
                                    title={slide["title"]}
                                    name={slide["name"]}
                                    index={index}
                                    href={slide["id"]}
                                />       
                            ))}
                        </div>
                        <div className="slider__actions">
                            <button className="slider__arrow swiper-button-prev" id="prev" role="button" aria-label="Previous slide" aria-disabled="false" onClick={handlePrev}></button>
                            <button className="slider__arrow swiper-button-next" id="next" role="button" aria-label="Next slide" aria-disabled="false" onClick={handleNext}></button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

};

export default Research;
