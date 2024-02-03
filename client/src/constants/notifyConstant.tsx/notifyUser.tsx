import { message } from 'antd';

const failedServer = (data: string) => {
    message.open({
        type: 'error',
        content: data,
        duration: 3,
    }
    );
}

const failedGetUserInfo = (data: string) =>
    message.open({
        type: 'error',
        content: data,
        duration: 3,
    });

const invalidLogin = (data: string) =>
    message.open({
        type: 'error',
        content: data,
        duration: 3,
    });

export {
    failedGetUserInfo,
    failedServer,
    invalidLogin
};