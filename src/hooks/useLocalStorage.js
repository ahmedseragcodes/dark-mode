import React, { useState } from "react";

const useLocalStorage= (key, initialValue) => {

const [storedValue, setStoredValue]=useState((initialValue)=>{

    if (initialValue==JSON.parse(localStorage.getItem("initialValue"))){
        return JSON.parse(localStorage.getItem("initialValue"));
    } else {
        return initialValue;
    }
})

    localStorage.setItem(key, JSON.stringify(initialValue));



}