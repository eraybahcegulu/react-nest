import { InfoCircleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Popover, Switch } from "antd";
import { ILogin } from "../types/types";
import useUser from "../hooks/useUser";
import { useState } from "react";

const Login = () => {
    const [isChecked, setChecked] = useState<boolean>(false);
    const { login } = useUser()

    const onFinishLogin = (values: ILogin) => {
        login(isChecked, values);
    };

    const onChange = () => {
        setChecked((prevState) => !prevState);
    };

    return (
        <div className="bg-slate-500 h-screen w-screen flex items-center justify-center">
            <div className='pb-20 pt-14 pr-20 pl-20 w-[400px] h-[375px] drop-shadow-2xl bg-indigo-100' style={{ borderRadius: '20px' }}>
                <Form
                    name="normal_login"
                    className="login-form flex flex-col gap-2"
                    onFinish={onFinishLogin}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="email"
                        rules={[{ type: 'email', required: true, message: 'Please input your email!' },
                        { max: 40, message: "Max. 40 characters." },
                        {
                            validator: (_, value) => {
                                return (/^[^<> ]*$/.test(value)) ? Promise.resolve() : Promise.reject(new Error("Invalid character detected."));
                            }
                        }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' },
                        { max: 40, message: "Max. 40 characters." },
                        {
                            validator: (_, value) => {
                                return (/^[^<> ]*$/.test(value)) ? Promise.resolve() : Promise.reject(new Error("Invalid character detected."));
                            }
                        }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <div className='flex flex-row gap-1'>
                        <Popover placement="left"
                            content={
                                <div className='flex flex-col gap-2 text-xs'>
                                    <strong> Registration required for Remember Me feature </strong>
                                    <span><strong>Enabled:</strong> Stay open until your session is terminated</span>
                                    <span><strong>Disabled:</strong> Stay open until your close the browser window </span>
                                </div>
                            }
                        >

                            <InfoCircleOutlined className='text-md hover:scale-125 transition-all' />
                        </Popover>
                        <span>Remember Me</span>
                        {
                            isChecked
                                ?
                                <span className='ml-0'>Enabled</span>
                                :
                                <span>Disabled</span>
                        }
                        <Switch className='ml-auto' defaultChecked={isChecked} onChange={onChange} />

                    </div>

                    <div className='flex flex-row gap-2 mt-4'>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button hover:scale-105 transition duration-700">
                                Log in
                            </Button>
                        </Form.Item>

                    </div>

                </Form>
            </div>

        </div>
    )
}

export default Login