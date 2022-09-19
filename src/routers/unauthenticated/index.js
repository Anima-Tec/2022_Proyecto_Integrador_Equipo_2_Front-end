import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Index = lazy(() => import('pages/index'));
const Login = lazy(() => import('pages/Login'));
const IndexRegister = lazy(() => import('pages/Signup/index'));
const DonatorRegister = lazy(() => import('pages/Signup/[signupType]/donator'));
const CenterRegister = lazy(() => import('pages/Signup/[signupType]/center'));
const Page404 = lazy(() => import('pages/Error404'));

export function Unauthenticated() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/auth/login" element={<Login />} />
      <Route exact path="/auth/signup" element={<IndexRegister />} />
      <Route exact path="/auth/signup/donator" element={<DonatorRegister />} />
      <Route exact path="/auth/signup/center" element={<CenterRegister />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
}
