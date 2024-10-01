import gsap from "gsap";
import { textAnimation } from "./textanimation";

export const textWaving = (spanOne, spanTwo, spanThree, spanFour) => {
    textAnimation(spanOne);
    textAnimation(spanTwo);
    textAnimation(spanThree);
    textAnimation(spanFour);
    gsap.to('.letter', {display:'inline-block'});
    gsap.fromTo('.letter', {y:'100%', opacity:0}, {y:0,  opacity:1, delay:2, stagger:.05,ease:'back.out(3)', yoyo:true, repeat:-1, repeatDelay:2})
}