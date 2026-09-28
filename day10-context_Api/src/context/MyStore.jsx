import { createContext, useState } from "react";

export const Mystros = createContext();

export const ContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    const [cartItems, setCartItems] = useState([]);
    return (
        <Mystros.Provider
            value={{
                toggle,
                setToggle,
                cartItems,
                setCartItems
            }}
        >
            {children}
        </Mystros.Provider>
    )
}