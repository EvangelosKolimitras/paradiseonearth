import React from 'react'
import S from "./story.module.scss"

const Story = () => {
    return (
        <>
            <div className={S.story__pictures}>
                <img src={require("./img/couple01.jpg")} alt="Couple with new house" className={S.story__img__1}/>
                <img src={require("./img/couple02.jpg")} alt="new house" className={S.story__img__2}/>
            </div>

            <div className={S.story__content}>
                <h3 className={`${S.heading_3} ${S.mb_sm}`}>satisfied couples</h3>
                <h2 className={`${S.heading_2} ${S.heading_2__dark} ${S.mb_md}`}>
                    &ldquo; we loved each of our moments &rdquo;
                </h2>
                <h1>Evangelos & Bianca</h1>
                <p className={S.story__text}>
                    We had the best time of our life by the beach.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
                    harum volupta!
                </p>
                <button className={S.btn}>find your own paradise</button>
            </div>
        </>
    )
}


export default Story
