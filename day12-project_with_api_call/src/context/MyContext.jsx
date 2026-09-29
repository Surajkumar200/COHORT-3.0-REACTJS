import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isCardOpen, setIsCardOpen] = useState(true)
  const [cardProduct, setCardProduct] = useState([]);
  const [addproduct, setAddProduct] = useState([])
  


    
    return (
      <MyContext.Provider
        value={{
          isCardOpen,
          setIsCardOpen,
          cardProduct,
          setCardProduct,
          addproduct,
          setAddProduct,
        }}
      >
        {children}
      </MyContext.Provider>
    );
}