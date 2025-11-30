//@ts-nocheck
'use client'

import images from "./constant/image"
import Main from "./Components/Main"

export default function Home() {

const name = "Super";
const count = 30;

return (
 <Main name= {name} count ={count} images={images}/>
);
 
}
