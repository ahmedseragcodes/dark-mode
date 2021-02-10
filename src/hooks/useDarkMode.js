import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode=()=>{
    
    const [darkMode, setDarkMode]=useLocalStorage("modeStatus", false);

    return [darkMode, setDarkMode];

}