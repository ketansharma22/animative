import React from "react";
import '../styling/Move.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Move = () => {

gsap.registerPlugin(useGSAP);
const container = useRef();
useGSAP((context,contextSafe)=>{
    window.addEventListener('wheel',function(dets){
        if (dets.deltaY>0){
            gsap.to('#marquw',{
                transform:"translateX(-200%)",
                repeat:-1,
                duration:6,
                ease:"none"
            })
            gsap.to('#marquw img',{
                rotate:180
            })
        }
        else{
            gsap.to('#marquw',{
                transform:"translateX(0%)",
                repeat:-1,
                duration:6,
                ease:"none"
            })
            gsap.to('#marquw img',{
                rotate:0
            })
        }
    })
})
    

  return <div id="move">
    <div id="marquw" > 
        <h1>HI I AM KETAN SHARMA, #DEVELOPER</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
    </div>
    <div id="marquw">
        <h1>HI I AM KETAN SHARMA, #DEVELOPER</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
    </div>
    <div id="marquw">
        <h1>HI I AM KETAN SHARMA, #DEVELOPER</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
    </div>
    <div id="marquw">
        <h1>HI I AM KETAN SHARMA, #DEVELOPER</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
    </div>

  </div>;
};

export default Move;
