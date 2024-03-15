import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../home'
import { PlanPage } from '../plans'

export const RimacAppRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="plans" element={<PlanPage />} />
      <Route path="/*" element={<Navigate to="home" />} />
    </Routes>
  )
}
