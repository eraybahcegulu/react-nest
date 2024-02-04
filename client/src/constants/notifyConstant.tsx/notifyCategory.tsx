import { message } from 'antd';

const failedServer = (data: string) => {
    message.open({
        type: 'error',
        content: data,
        duration: 3,
    }
    );
}

export {
    failedServer,

};