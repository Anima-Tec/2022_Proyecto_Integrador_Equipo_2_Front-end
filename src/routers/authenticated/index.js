import { Routes, Route } from 'react-router-dom';
import App from '_app';

export default function Authorized() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}
