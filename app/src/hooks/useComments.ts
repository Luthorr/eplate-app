import { useState } from 'react';

export const useComments = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleFilterVisibility = (): void => {
    setShowFilters((prevState) => !prevState);
  };

  return { showFilters, handleFilterVisibility };
};

export default useComments;
