import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function ChampDetail(){
    const {id} = useParams();
    const [champion, setChampion] = useState(null);

    useEffect(() =>{
        fetch(`http://ddragon.leagueoflegends.com/cdn/13.18.1/data/ko_KR/champion/${id}.json`)
        .then(response =>response.json())
        .then(data => setChampion(data.data[id]));
    },[id]);
    
    if(!champion){
        return <div>loading...</div>
    }
    return(
        <>
            
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt="{champion.name}" style={{width:'200px', height:'auto'}}/>
            <h2>캐릭명 : {champion.name}({champion.id})</h2>
        
            <>캐릭 종류 :{champion.title}</>
            <p><b>타입 :</b>{champion.partype}</p>
            <p> <b>캐릭 설명 :</b> {champion.lore}</p>
{/* 스킨, 스킨 명, 스킬 Q,W,E,R */}
        </>
    );
}

export default ChampDetail;