import { createBrowserRouter } from "react-router-dom";
import MyBoardEdit from "../components/MyBoardEdit/MyBoardEdit";
import ViewPost from "../components/NoticeBoard/ViewPost/ViewPost";
import Profile from "../components/ProfileEdit/ProfileEdit";
import NavLayout from "../components/layouts/NavLayout";
import FreeBoard from "../pages/FreeBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import NoticeBoard from "../pages/NoticeBoard";
import NoticeboardModify from "../pages/NoticeboardModify";
import StudyBoard from "../pages/StudyBoard";
import StudyWrite from "../pages/StudyWrite";
import StudyViewPost from "../components/StudyBoard/ViewPost/StudyViewPost";

const Router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <ViewPost /> },
      { path: "/posts/:tableName/:id/edit", element: <MyBoardEdit /> },
      { path: "/job/:id", element: <NoticeboardModify /> },
      { path: "/studyboard", element: <StudyBoard /> },
      { path: "/study/write", element: <StudyWrite /> },
      { path: "/study/:id", element: <StudyViewPost /> },
      { path: "/freeboard", element: <FreeBoard /> },
      { path: "/noticeboard", element: <NoticeBoard /> }
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/mypage/:id", element: <Profile /> }
]);

export default Router;
