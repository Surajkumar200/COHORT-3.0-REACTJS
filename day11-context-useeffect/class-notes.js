/* 
*contextapi
just a hiher order fun componet

there are two things 
1>consumer -> createContext()
2>provider -> Contextprovider = ({children}) => {
    return (
    <consumer.provider>
    {children}
    </consumer.provider>
    )}

*/


/*

*USEEffect Hook

use for handling side effects
jo side effcts ko control karta hai 

*component life cycle
1>Mountaing phase -> reduce
2>updating phase -> update ho raha hai
3>unmounting phase - >   render tree se remove ho rah hai 

*useeffect(() => {
    },[])  we know that simple but 

    unmounting is really is the return 

    *useeffect(() => {
   clg("mounting phase ")
    
    *unmounting  or 
    *use when your coponet leaks some memory 
    *and if you want to track any updated
    return () => {
    clg("unmounting phase")
        }

    },[dependencey]) 


*/