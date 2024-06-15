import { createBrowserRouter } from "react-router-dom";
import ViewFreePost from "../components/FreeBoard/ViewFreePost/ViewFreePost";
import MyBoardEdit from "../components/MyBoardEdit/MyBoardEdit";
import ViewPost from "../components/NoticeBoard/ViewPost/ViewPost";
import Profile from "../components/ProfileEdit/ProfileEdit";
import StudyViewPost from "../components/StudyBoard/ViewPost/StudyViewPost";
import NavLayout from "../components/layouts/NavLayout";
import FreeBoard from "../pages/FreeBoard";
import FreeBoardModify from "../pages/FreeBoardModify";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import NoticeBoard from "../pages/NoticeBoard";
import NoticeboardModify from "../pages/NoticeboardModify";
import PasswordResetPage from "../pages/PasswordResetPage";
import PasswordResetRequestPage from "../pages/PasswordResetRequestPage";
import StudyBoard from "../pages/StudyBoard";
import StudyWrite from "../pages/StudyWrite";

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
      { path: "/free/:id", element: <FreeBoardModify /> },
      { path: "/study", element: <></> },
      { path: "/freeboard", element: <FreeBoard /> },
      { path: "/freepost/:id", element: <ViewFreePost /> },
      { path: "/noticeboard", element: <NoticeBoard /> }
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/mypage/:id", element: <Profile /> },
  { path: "/passwordreset", element: <PasswordResetPage /> },
  { path: "/passwordreset/:access_token", element: <PasswordResetPage /> },
  { path: "/passwordresetrequest", element: <PasswordResetRequestPage /> }
]);

export default Router;
