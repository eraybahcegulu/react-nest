

import { RootState } from '../store';
import { useSelector } from 'react-redux';

const useCategory = () => {
    const categories = useSelector((state: RootState) => state.categories.data);
    const categoriesStatus = useSelector((state: RootState) => state.categories.status);

    return { categories, categoriesStatus }
}

export default useCategory