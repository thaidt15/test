import React, { useState, useEffect } from 'react';
import AppHeader from '../../../compornent/layout/Header'
import AppFooter from '../../../compornent/layout/Footer'
import AppSidebar from '../../../compornent/layout/Sidebar'
import UserService from '../../../api/UserAPI'
import { Link } from "react-router-dom";
import {
    Layout,
    Switch,
    Table,
    Image,
    Input,
    Breadcrumb
} from 'antd';

const { Content } = Layout;

const UserList = ({ onLogout }) => {
    const { Search } = Input;
    const [users, setUsers] = useState([]);


    const getAllUser = () => {
        UserService.getAllUser().then((response) => {
            const usersWithRoles = response.data.map(user => ({
                ...user,
                roleNames: Array.isArray(user.role) ? user.role : []
            }));
            setUsers(usersWithRoles);
        }).catch(error => {
            console.log(error);
        });
    }
   
    useEffect(() => {
        getAllUser();
    }, []);

    const columns = [
        { title: 'ID', dataIndex: 'userId', key: 'userId' },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
            render: (text, record) => <Link to={`/hod/user-details`}>{text}</Link>
        },
        {
            title: 'Role Number',
            dataIndex: 'rollNumber',
            key: 'rollNumber',
        },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        {
            title: 'Image',
            dataIndex: 'image', 
            key: 'image',
            render: (text) => <Image width={50} src={text} alt="User Avatar" />
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status, _, index) => (
                <Switch
                    checked={status === 'ACTIVE'}
                />
            )
        },
        {
            title: 'Role',
            dataIndex: 'roleNames',
            key: 'roleNames',
            render: (roleNames) => (
                <>
                    {roleNames.map((role, idx) => <div key={idx}>{role}</div>)}
                </>
            )
        },
        {
            title: 'Actions',
            key: 'actions',
           
        }
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppSidebar />
            <Layout>
            <AppHeader onLogout={onLogout} />
                <Breadcrumb
                    items={[
                        {
                            title: <Link to='../home'>Home</Link>
                        },

                        {
                            title: 'User Management',
                        },
                    ]}
                    style={{
                        marginLeft: 140, marginTop: 20
                    }}
                />
                <Content style={{ padding: '20px 140px' }}>
                    <h1>User Management</h1>

                    <Search
                        placeholder="Enter name or email to search..."
                        style={{ width: 300, marginBottom: 16 }}
                    />

                    <Table dataSource={users} columns={columns} rowKey="id" style={{ marginTop: '20px' }} />
                </Content>
                <AppFooter />
            </Layout>
        </Layout>
    );
};

export default UserList;