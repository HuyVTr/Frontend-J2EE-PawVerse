import { Navigate } from 'react-router-dom';

export default function ReturnsPage() {
  return <Navigate to="/about" replace />;
}
