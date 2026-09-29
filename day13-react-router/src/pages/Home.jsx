import { Outlet, useNavigate } from "react-router"


const Home = () => {
   let navigate =  useNavigate()
  
  return (
      <div>
         <h1>Home</h1>
          <button onClick={() => navigate("/details")}>deta</button>
          <Outlet/>
         
    </div>
  )
}

export default Home