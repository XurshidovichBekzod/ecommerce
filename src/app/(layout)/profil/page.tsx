"use client"
import { memo, useEffect, useState } from "react";
import { Card, Avatar, Spin, Typography, Tag, Divider, Button } from "antd";
import {
    UserOutlined,
    MailOutlined,
    HomeOutlined,
    CrownOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

interface UserData {
    id: number;
    createdAt: string;
    updatedAt: string;
    fname: string;
    lname: string | null;
    isActive: boolean;
    address: string | null;
    email: string;
    role: string;
}

const Profile = () => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/auth/me", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-white">
                <Spin size="large" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-gray-50">
                <Text type="danger" className="text-xl">
                    Failed to load profile
                </Text>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-white p-6">
            <div>
                user
            </div>
        </div>
    );
};

export default memo(Profile);