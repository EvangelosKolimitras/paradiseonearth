import React, { useState} from 'react'
import S from "./gallery.module.scss"
const Gallery = () => {
    const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

    return (
        <section className={S.gallery}>
            {
                images.map(image => {
                    return(
                        <figure key={images.indexOf(image)} className={`${S.gallery__item} ${S.gallery__item}${image}`}>
                            <img src={require(`./img/gal-${image}.jpeg`)} alt="Gallery image 1" className={S.gallery__img}/>
                        </figure>
                    )
                })
            }
        </section>
    )
}

export default Gallery

