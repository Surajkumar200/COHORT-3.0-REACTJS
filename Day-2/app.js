/*
react1 - react is a library of js used to create mordan web dev.. 
-spa
-function component 

reaact create  -> virtualDom - > lightWeight 

realDom  didn't undaerstand vD  
**** realdom understand vd by reactdom connection 


Recounciliation --> jab v app react me kuch v update karte ho to behind  me jo procces run hota hai use recouncilation khate hai.

it's have 2 phase 1> Reander phase  2>Commit phase

its a proccess to updating real dom 

reander Phase
1> Recouncilation
2> Creating new virtual Dom
3> Comparition b/w old vs new Virtual Dom
4> Diffing Algorithem
5> Change has been saved

commit Phase 
1> update the RDOM
2> Paint in Browuser
reset the UI
after real DOm updation , NW new DOm Created

1> Jitni bar change karogoge , utni bar wo new virualDOM create hogi
2> Fir vo old se compare hogi & RDOM update hoga and old Delete 

this circul har time chalega jab tak app kuch v change karoge

****** Recouncilation is a procces for doing updation in react

it's runs in 2 phases 1> render phase  2> commitphase

react -> 2015 tak -> recouncilation -> stack engine (Recouncilation engine ) floww karta tha

from 2016  -> use Fiber -> new Recouncilation engine  ->optimise

RDOM  -> VDOM -> fiber is VDOM




*/
let root = document.querySelector("#root")

const h1 = React.createElement("h1", null, "hello")

let reactRoot = ReactDOM.createRoot(root)

reactRoot.render(h1)

console.log(h1);