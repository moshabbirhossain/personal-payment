import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Balance from '../pages/Balance/Balance';
import Expense from '../pages/Expense/Expense';
import Reminder from '../pages/Reminder/Reminder';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/balance",
            element: <Balance/>,
        },
        {
            path: "/expense",
            element: <Expense/>,
        },
        {
            path: "/reminder",
            element: <Reminder/>,
        },
      ],
    },
  ]);