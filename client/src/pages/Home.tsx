import { Spin } from 'antd';
import useUserContext from '../hooks/useUserContext';

export const Home = () => {
    const { user, loading } = useUserContext();

    return (
        <div>
            {
                loading
                    ?
                    <Spin size="large" />
                    :
                    user?.email
            }
        </div>
    );
};
