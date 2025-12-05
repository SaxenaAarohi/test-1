'use client'
import { useEffect, useState } from "react";
import Main from "./Components/Main";

export default function Home() {

const [images, setImages] = useState([]);

useEffect(() => {
  async function fetchData() {
    const response = await fetch('/api/images');
    const data = await response.json();
    setImages(data);
  }
  fetchData();
},[]);

const name = "Super";
const count = 30;

return (
 <Main name= {name} count ={count} images={images} />
);
 
}
