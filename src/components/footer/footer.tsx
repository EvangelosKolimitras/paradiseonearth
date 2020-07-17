import React from 'react'
import S from "./footer.module.scss"

const Footer = () => {
    const labels = [
        {label: "Get a Quote"},
        {label: "Our catalogs"},
        {label: "FAQ"},
        {label: "Career"},
        {label: "Contact"}
    ]
    return (
        <footer className={S.footer}>
            <ul className={S.footer__nav}>
                {
                    labels.map(label => {
                        return(
                            <li key={labels.indexOf(label)} className={S.footer__nav__item}>
                                <a href="#" className={S.footer__nav__link}>
                                    {label.label}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <p className={S.footer__text}>
                Evangelos Kolimitras &copy; {new Date().getUTCFullYear() }
            </p>
        </footer>
    )
}

export default Footer;

