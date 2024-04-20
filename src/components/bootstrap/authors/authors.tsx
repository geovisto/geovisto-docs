import React, { useState, useEffect } from "react";
import "../../../pages/index.css";
import "./authors.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import Link from "@docusaurus/Link";

/**
 * This file contains implementation of community frontend for home page
 *
 * @author Iva Utikalova
 */

  // TODO autori
  const slides = [
    {
      name: 'HYNEK Jiří',
      work: ['Founding author']
    },
    {
      name: 'RUSŇÁK Vít',
      work: ['Founding author']
    },
    {
      name: 'KACHLÍK Jakub',
      work: ['Founding author']

    },
    {
      name: 'DOHNAL Lukáš',
      work: ['Automatization testing']
    },
    {
      name: 'CHLÁDEK Martin',
      work: ['Abstraction']
    },
    {
      name: 'KOSCIELNIAK Tomáš',
      work: ['Legend tool', 'Info tool', 'Web app']
    },
    {
      name: 'MALÝ Vojtěch',
      work: ['Hierarchy', 'Geo-downloader tool']

    },
    {
      name: 'KAŠPAR Petr',
      work: ['Heat layer', 'Dot layer', 'Spike layer', 'Bubble layer']

    },
    {
      name: 'LAZÚR Juraj',
      work: ['Public transport']
    },
    {
      name: 'RYKALA Kryštof',
      work: ['Timeline tool']

    },
    {
      name: 'TLČINA Andrej',
      work: ['']

    },
    {
      name: 'KNETL Petr',
      work: ['Data-provider (unreleased)']

    },
    {
      name: 'GROSSMANN Jan',
      work: ['']

    },
    {
      name: 'KORENČIK Vladimír',
      work: ['Web app']

    },
    {
      name: 'FEŇKO Šimon',
      work: ['Information system (unreleased)']

    },                
  ];
  

export const Authors = () => {

  useEffect(() => {   
    const root = document.documentElement;
    const marqueeElementsDisplayed: String = root.style.getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("div.authors__slider");
    
    root.style.setProperty("--marquee-elements", marqueeContent.children.length.toString());
    
    for(let i=0; i<5; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }

  },[]);




  return (
      <div className="container-fluid text-center grey-lightest">
          <div className="w-100 p-3 pt-lg-5 display-6">
              <div >
                  Authors and co-authors
              </div>
              <div className="w-100 p-3 pb-lg-5 lead">
                  Stay up to date with library updates.
              </div>
          </div>
          <div className="authors__container">
              <div className="authors__wrapper">
                  <div className="authors__slider">
                    {slides.map((slide, index) => (
                        <div className="authors__slide" key={index}>
                          <h5>{slide.name}</h5>
                          {slide.work.map((work, index) => (
                                <div key={index}>{work}</div>
                          ))}
                        </div>
                    ))}
                  </div>
              </div>

          </div>
          <div className="w-100 p-3 pb-lg-5 lead">
              <Link href="https://github.com/geovisto" className="ps-lg-3">
                  <Button variant="default">Visit our organization on Github</Button>
              </Link>
          </div>

      </div>
  );
};

export default Authors;
