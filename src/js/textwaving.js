import gsap from "gsap";
import { textAnimation } from "./textanimation";

const tl = gsap.timeline({defaults:{duration:.75, }});
export const textWaving = (spanOne, spanTwo, spanThree, spanFour) => {
    textAnimation(spanOne);
    textAnimation(spanTwo);
    textAnimation(spanThree);
    textAnimation(spanFour);
    gsap.to('.letter', {display:'inline-block'});
    gsap.fromTo('.letter', {y:'100%', opacity:0}, {y:0,  opacity:1, delay:2, stagger:.05,ease:'back.out(3)', yoyo:true, repeat:-1, repeatDelay:2})
}

export const colorize = (line, placeholder,color) => {
    gsap.to(line,{stroke:color, duration:.75});
    gsap.to(placeholder, {color:color, duration:.75},"<50%");
}

export const validSubmissionPlaceholder = (placeholder) => {
    tl.to(placeholder,
        {
            y:0, 
            scale:1,
            duration:.7,
            fontWeight:300,
            ease:"power3.easeOut"
        });
}