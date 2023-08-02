import React, { useEffect, useState } from "react";
import ComA from "../ComA/ComA";
export const MyContext = React.createContext()
const App = () => {
    let [slider,setSlider]=useState(null);
    let[error,setError]=useState(null);
let [loading,setLoading]=useState(true)
const fetchSlider = async ()=>{
    try {
        let data = await fetch("http://localhost:3030/slider");
        let res =await data.json();
        setSlider(res)
        setError(null)
        setLoading(false)
    } catch (error) {
        setError(error.messages)
        setLoading(true)
    }
};
useEffect(()=>{
    console.log("heloo-world!");
    fetchSlider()
},[])
    return (
        <>
            <MyContext.Provider value={{slider,error,loading}}>

                <ComA />

            </MyContext.Provider>
        </>

    );
}

export default App;