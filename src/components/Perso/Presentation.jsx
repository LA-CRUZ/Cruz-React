import React from 'react'
import { Trans } from 'react-i18next'
import i18n from 'i18next';

function Perso({ data, scrollToRef }) {
    const language = i18n.language;
    const fileName = language === "fr" || language === "fr-FR" ? data.cv_fr : data.cv_en;
    var resume;

    try {
        resume = fileName === "" ? "" : require('../../assets/cvs/' + fileName);
    } catch (error) {
        resume = "";
    };

    return (
        <section className={`perso-presentation ${data.name.toLowerCase()}`}>
            <div className="info-perso">
                <h1 data-aos="fade-left" data-aos-delay="300">{data.name} <strong>{data.firstname}</strong></h1>
                <p data-aos="fade-left" data-aos-delay="600"><Trans>{data.fonction}</Trans> - <Trans>{data.metier}</Trans></p>
                <ul data-aos="fade-left"  data-aos-delay="800">
                    {
                        data.socials.map(link => (
                            <li key={link.icon}>
                                <a href={link.name === "mail" ? "mailto:" + link.link : "" + link.name === "tel" ? "tel:" + link.link : "" + link.link} target="_blank" rel="noopener noreferrer">
                                    <i className={link.icon}></i>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                {
                    resume !== "" &&
                    <a data-aos="fade-left" className="hover-shadow cv" data-aos-delay="1000" href={resume} download={fileName} ><i className="fas fa-file-download"></i><Trans>label.perso.cv</Trans></a>
                }
            </div>
            <picture className="scroll" onClick={scrollToRef}>
                <source srcSet={require('../../assets/images/scroll.webp')} type="image/webp" />
                <img src={require('../../assets/images/scroll.png')} alt="scroll" />
            </picture>
        </section>
    )
}

export default Perso;