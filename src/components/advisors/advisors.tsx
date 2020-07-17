import React, {useEffect, useState} from "react";
import S from "./advisors.module.scss"
import axios from 'axios';
type AdvisorsImageInterface = { id:number, name:string, email:string, avatar: string }[]

const Advisors = () => {

    useEffect(()=>{
        axios.get("https://randomuser.me/api?results=3",{method:"get"})
            .then(U => {
            let users=[];
            for(let user of  U.data.results){
                users.push({
                    id:user.id.value === null || user.id.value.includes("NaN") ?  Math.floor(Math.random() * 1000) : user.id.value ,
                    name:`${user.name.first} ${user.name.last}`,
                    email: user.email,
                    avatar: user.picture.large
                })
            }
            setAdvisors(users)
        })
    },[])


    const SELLERS:AdvisorsImageInterface = []

    const [advisors, setAdvisors] = useState(SELLERS)

    return (
    <div className={S.advisors}>

        <div className={S.heading_3}>Top {advisors.length} advisors</div>
        <div className={S.sellers__list}>
            {
                advisors.map(advisor => (
                    <div key={advisor.id}>
                        <img src={advisor.avatar} alt={`Seller ${advisor.name}`} className={S.advisors__img}/>
                        <div className={S.advisors__details}>
                            <div className={`${S.heading_4} ${S.heading_4_light}`}>
                                {advisor.name}
                            </div>
                            <p className={S.advisors__email}>
                                {advisor.email}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Advisors;

