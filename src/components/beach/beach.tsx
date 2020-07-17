import React, {useState} from "react";
import S from "./beach.module.scss"
import sprite from './img/sprite.svg'

type NumOrStr = string | number

type BeachType = {
    id:number
    image: string
    title: string
    like: { icon : string}
    description: {
        location : {icon: string, value : NumOrStr}
        capacity : {icon: string, value : NumOrStr}
        area     : {icon: string, value : NumOrStr}
        price    : {icon: string, value : NumOrStr}
    }
}[];

const Beach = () => {

    const BEACHES:BeachType = [
        {
            id: (Math.random() * Date.now()) / Date.now(),
            image: "1",
            title: "Playa Paraiso",
            like: {
                icon: "heart-full"
            },
            description : {
                location: {
                    icon : "map-pin",
                    value: "Maledives"
                },
                capacity: {
                    icon : "profile-male",
                    value: 8
                },
                area: {
                    icon : "expand",
                    value: 1100
                },
                price: {
                    icon : "key",
                    value: 3_800_000
                }
            }
        },
        {
            id: (Math.random() * Date.now()) / Date.now(),
            image: "2",
            title: "Varadero Beach",
            like: {
                icon: "heart-full"
            },
            description : {
                location: {
                    icon : "map-pin",
                    value: "Cuba"
                },
                capacity: {
                    icon : "profile-male",
                    value: 3
                },
                area: {
                    icon : "expand",
                    value: 1100
                },
                price: {
                    icon : "key",
                    value: 3_800_000
                }
            }
        },
        {
            id: (Math.random() * Date.now()) / Date.now(),
            image: "3",
            title: "Playa Los Flamencos",
            like: {
                icon: "heart-full"
            },
            description : {
                location: {
                    icon : "map-pin",
                    value: "Rio"
                },
                capacity: {
                    icon : "profile-male",
                    value: 8
                },
                area: {
                    icon : "expand",
                    value: 1100
                },
                price: {
                    icon : "key",
                    value: 63_800_000
                }
            }
        },
        {
            id: (Math.random() * Date.now()) / Date.now(),
            image: "4",
            title: "Playa Pilar",
            like: {
                icon: "heart-full"
            },
            description : {
                location: {
                    icon : "map-pin",
                    value: "Ithika"
                },
                capacity: {
                    icon : "profile-male",
                    value: 8
                },
                area: {
                    icon : "expand",
                    value: 1100
                },
                price: {
                    icon : "key",
                    value: 1_800_000
                }
            }
        },
        {
            id: (Math.random() * Date.now()) / Date.now(),
            image: "5",
            title: "Cayo Las Brujas",
            like: {
                icon: "heart-full"
            },
            description : {
                location: {
                    icon : "map-pin",
                    value: "Santa Monica"
                },
                capacity: {
                    icon : "profile-male",
                    value: 8
                },
                area: {
                    icon : "expand",
                    value: 1100
                },
                price: {
                    icon : "key",
                    value: 8_800_000
                }
            }
        },
        {
            id: (Math.random() * Date.now()) / Date.now(),
            image: "6",
            title: "Cayo Santa Maria",
            like: {
                icon: "heart-full"
            },
            description : {
                location: {
                    icon : "map-pin",
                    value: "Volos"
                },
                capacity: {
                    icon : "profile-male",
                    value: 8
                },
                area: {
                    icon : "expand",
                    value: 1100
                },
                price: {
                    icon : "key",
                    value: 5_800_000
                }
            }
        },
    ]


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [beaches, setBeaches] = useState(BEACHES)

    return (
        <section className={S.beaches}>
            {
                beaches.map(beach => {
                    return(
                        <div key={beach.id} className={S.beach}>
                            <img src={require(`./img/image-${beach.image}.jpg`)} alt="Image 1" className={S.beach__img}/>
                            <svg className={S.beach__like}>
                                <use href={`${sprite}#icon-${beach.like.icon}`}/>
                            </svg>

                            <h5 className={S.beach__name}>
                                {beach.title}
                            </h5>
                            <div className={S.beach__location}>
                                <svg>
                                    <use href={`${sprite}#icon-${beach.description.location.icon}`} />
                                </svg>
                                <p>{beach.description.location.value}</p>
                            </div>
                            {/*<div className={S.beach__rooms}>*/}
                            {/*    <svg>*/}
                            {/*        s<use href={`${sprite}#icon-${beach.description.capacity.icon}`} />*/}
                            {/*    </svg>*/}
                            {/*    <p>{beach.description.capacity.value} rooms</p>*/}
                            {/*</div>*/}
                            {/*<div className={S.beach__area}>*/}
                            {/*    <svg>*/}
                            {/*        <use href={`${sprite}#icon-${beach.description.area.icon}`} />*/}
                            {/*    </svg>*/}
                            {/*    <p>{beach.description.area.value} m<sup>2</sup></p>*/}
                            {/*</div>*/}
                            {/*<div className={S.beach__price}>*/}
                            {/*    <svg>*/}
                            {/*        <use href={`${sprite}#icon-${beach.description.price.icon}`} />*/}
                            {/*    </svg>*/}
                            {/*    <p>{beach.description.price.value}</p>*/}
                            {/*</div>*/}
                            <button className={`${S.btn} ${S.beach__btn}`}>
                                Contact seller
                            </button>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Beach
