import React from "react";
import S from "./header.module.scss"
import logo from "./img/Logo_site.png";

const Header = () => {
    const techs = ["trivago"]
    return (
        <header className={S.header}>
            <img src={logo} alt="Website Logo" className={S.header__logo}/>
            <h1 className={S.heading_1}>PARADISE ON EARTH</h1>
            <button className={`${S.btn} ${S.header__btn}`}>
                check our services
            </button>
            <div className={S.header__seenon_text}>check it out on</div>
            <div className={S.header__seenon_logos}>
                {techs.map(tech => <img key={techs.indexOf(tech) * Math.random()} src={require(`./img/logo-${tech}.png`)} alt={`Published on everywhere`}/>)}
            </div>
        </header>
    )
}

export default Header;
