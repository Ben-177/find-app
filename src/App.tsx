import Splash from "./Pages/Splash"
import { Route, Routes } from "react-router-dom"
import Onboarding from "./Pages/Onboarding"
import Login from "./Pages/Login"

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )

  //   <div className="flex min-h-screen items-center justify-center bg-navy">
  //     <h1 className="text-4xl font-bold text-white">
  //       FIND <span className="text-brand">.</span>
  //     </h1>
  //   </div>
  // )
}
