import { Alert, Space, Spin, Table } from 'antd';
import useUserContext from '../hooks/useUserContext';
import useCategory from '../hooks/useCategory'

export const Home = () => {
    const { user, loading } = useUserContext();
    const { categories, categoriesStatus } = useCategory()

    const columns = [
        {
            title: 'Category ID',
            dataIndex: 'id',
        },
        {
            title: 'Category Name',
            dataIndex: 'title',
        },

        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div>
                {
                    loading
                        ?
                        <Spin size="large" />
                        :
                        user?.email
                }
            </div>

            <div>
                {categoriesStatus === 'loading' && (
                    <div className="text-center">
                        <Spin size="large" />
                    </div>
                )}

                {categoriesStatus === 'succeeded' && categories.length === 0 && (
                    <Alert message="Company not found" type="warning" />
                )}

                {categoriesStatus === 'failed' && (
                    <Alert message="Server Error" type="error" />
                )}

                {categoriesStatus === 'succeeded' && categories.length > 0 && (
                    <Table rowKey="id" dataSource={categories} columns={columns} />
                )}
            </div>
        </>

    );
};
