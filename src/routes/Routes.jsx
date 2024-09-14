import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Balance from '../pages/Balance/Balance';
import Expense from '../pages/Expense/Expense';
import Reminder from '../pages/Reminder/Reminder';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

export const router = createBrowserRouter([
  {
    path: "/",  // Root path to show login by default
    element: <Login />, 
  },
  {
    path: "", // This allows the child paths (like /home, /balance) to be without a prefix
    element: <MainLayout />,
    children: [
      {
        path: "home", // Will be accessible as /home
        element: <Home />,
      },
      {
        path: "balance", // Will be accessible as /balance
        element: <Balance />,
      },
      {
        path: "expense", // Will be accessible as /expense
        element: <Expense />,
      },
      {
        path: "reminder", // Will be accessible as /reminder
        element: <Reminder />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
