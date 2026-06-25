// Destructuring  -> Array ,obj . functions
// scopes
// functions -> return , parameters, rest operator , arrgument
// Dom -. it is a briged b/w html and js ,
// tree like structure -> dom Cssom = Rendertree



// real dom == layout phase -> paint -> composal

// ******* REACT ******* //
// it's a frontend library of js which runs on a SPA(single page apllication)

// history - FB ->2011 (FaxJS)
//    - luange -> 2013(reactJs)
//             -> 2015 (officialy luanched)

// react -> light waigth of a real dom

/*
changing realDom  is exprnsive 
REalDom -> copy > fax -> 2013 -> reactjs -> open source library
FB News feed -> 2013
insta >
frontend dominating all over world -> 2015

REALDOM     vs     VirtualDom 
render tree     lightweight copy of realDom
react -> copy of RealDom -> virtualDOM

 */




// let h1 = React.createElement("h1", {}, "hello")


// console.log(React);

let rh1 = React.createElement("div", { className: "box" }, [
    React.createElement("h3", null, "heloo"),
    React.createElement("h1", null, "heloo")
]
);
let root = document.querySelector("#root")
let  reactRoot = ReactDOM.createRoot(root)

reactRoot.render(rh1)
// document.body.append(rh1)
// console.log(rh1);