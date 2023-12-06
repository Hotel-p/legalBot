import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Greetings from "./components/InitialComponents/Greetings"
import DefaultProfile from "./components/InitialComponents/DefaultProfile"
import SignUp from "./components/InitialComponents/SignUp"
import Login from "./components/InitialComponents/Login"

import UserProfile from "./components/UserProfile/UserProfile"

import Chat from "./components/UserProfile/UserContents/Chat";
import Inbox from "./components/UserProfile/UserContents/Inbox";
import Saved from "./components/UserProfile/UserContents/Saved";
import Help from "./components/UserProfile/UserContents/Help";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Greetings />,
      children: [
        {
          index:true,
          element: <DefaultProfile />,
        },
        {
          path:"SignUp",
          element:<SignUp />
        },
        {
          path:"Login",
          element:<Login />
        }
      ],
    },
    {
      path: "/profile",
      element: <UserProfile />,
      children:[
        {
          index: true,
          element: <Chat />
        },
        {
          path:"Chat",
          element: <Chat />
        },
        {
          path:"Saved",
          element: <Saved />
        },
        {
          path:"Inbox",
          element: <Inbox />
        },
        {
          path:"Help",
          element: <Help />
        }
      ]
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default Router;