import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLogout } from 'hooks/mutations/auth';

const Home = lazy(() => import('pages/Home'));
const Onboarding = lazy(() => import('pages/Onboarding'));
const Page404 = lazy(() => import('pages/Error404'));

export function Authenticated() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" replace={true} />} />
      <Route exact path="/onboarding" element={<Onboarding />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/auth/logout" element={<Logout />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
}

const Logout = () => {
  useLogout();
};
