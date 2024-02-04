import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { getCategories } from '../redux-toolkit/categorySlice';

const useCompanySlice = () => {
    const dispatch = useDispatch<AppDispatch>();

    const fetchCategories = (token: string) => {
        dispatch(getCategories(token));
    };
    
    return { fetchCategories };
};

export default useCompanySlice;