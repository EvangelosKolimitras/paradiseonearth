import React, {useState} from "react";
import S from "./features.module.scss"
import sprite from "./img/sprite.svg";

type FeaturesType = {
    id:number
    icon: string
    title: string
    description: string
}[];

const Features = () => {

    const id = "id";
    const icon = "icon";
    const title = "title";
    const description = "description";

    const FEATURES:FeaturesType = [
        {
            [id]:Math.random(),
            [icon]: "global",
            [title]: "Worldwide",
            [description]: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            [id]:Math.random(),
            [icon]: "trophy",
            [title]: "Top beaches",
            [description]: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            [id]:Math.random(),
            [icon]: "map-pin",
            [title]: "Best spots",
            [description]: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            [id]:Math.random(),
            [icon]: "key",
            [title]: "Cost-friendly",
            [description]: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            [id]:Math.random(),
            [icon]: "presentation",
            [title]: "Acknowledged",
            [description]: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            [id]:Math.random(),
            [icon]: "lock",
            [title]: "Secure",
            [description]: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [features, setFeatures] = useState(FEATURES)

    return <section className={S.features}> {Feature(features)} </section>
}

export default Features


// Render the features component
const Feature = (features:FeaturesType) =>
    features.map(feature => (
        <div key={feature.id} className={S.feature}>
            <svg className={S.feature__icon}><use href={`${sprite}#icon-${feature.icon}`} /></svg>
            <h4 className={`${S.heading_4} ${S.heading_4__dark}`}>{feature.title}</h4>
            <p className={S.feature__text}>{feature.description}</p>
        </div>
    ))
