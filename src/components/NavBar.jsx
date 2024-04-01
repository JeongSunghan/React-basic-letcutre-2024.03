import React from "react";
import { Link } from "react-router-dom";


//네비게이션 바 설정
export default function Navbar() {
    return (
        <nav>
            {/* 홈으로 보냄 */}
            <Link to='/' style={{marginRight: '15px'}}>Home</Link>

            {/* 보더로 보냄 */}
            <Link to='/board'>Board</Link>                    
        </nav>
    );
}