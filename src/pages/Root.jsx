import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

//기본적인 레이아웃 설정
export default function Root() {
    // 웹 애플리케이션의 기본 레이아웃을 정의하는 Root 컴포넌트이며,
    //상단에는 네비게이션 바가 위치, 그 아래에는 현재 URL에 따라 달라지는 페이지의 내용이 렌더링한다.
    return (
        <div style={{ margin: '20px' }}>

            {/* 네비게이션 바 */}
            <Navbar />

            {/* 라우트의 자식 라우트가 렌더링될 위치를 정의 */}
            <Outlet />

        </div>
    );
}