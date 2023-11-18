import { createContext, useState  } from "react";

export const Mycontext = createContext();

export function ThemeProvider({children}){
    const [CardItem,setCardItem]  = useState([]);
    const [count,setcount] = useState(0);
    return (
    <Mycontext.Provider value={{setCardItem,CardItem,setcount,count}}>
        {children}
    </Mycontext.Provider>
    )
}

