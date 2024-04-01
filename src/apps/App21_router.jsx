import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Board from "../pages/Board";
import Root from "../pages/Root";
import BoardDetail from "../pages/BoardDetail";

// 웹 애플리케이션의 라우팅 구조를 설정, object 형태로 옵션 넣기
const router = createBrowserRouter([
  //웹사이트의 루트 경로 ('/')에 접근했을 때 <Root /> 컴포넌트를 렌더링하도록 설정
  {
    // 배열은 루트 경로의 하위 경로들을 정의
    path: '/',
    element: <Root />,
    children: [

      //index: true는 루트 경로(/)에 대한 기본 페이지를 의미
      { index: true, element: <Home /> },

      //board 경로에 대한 설정
      { path: '/board', element: <Board /> },
      { path: '/board/:bid', element: <BoardDetail /> },
    ]
  }
]);

function App() {

  return (
    // router객체를 애플리케이션에 적용
    // RouterProvider에 router 객체를 전달,정의한 라우팅 구조에 따라 애플리케이션이 URL의 변화에 반응
    <RouterProvider router={router} />
  );
}

export default App;