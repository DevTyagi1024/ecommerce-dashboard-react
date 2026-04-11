import { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';
import '../styles/loader.scss';

export const Loader = () => {
  const { isLoading } = useContext(LoadingContext);

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};
