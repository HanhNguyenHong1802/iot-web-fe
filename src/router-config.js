import { lazy } from "react";

const HomePage = lazy(() => import("./screens/HomePage"))


export const AuthenRouter = [


]

export const NotAuthenRouter = [
    { path: "/", Component: HomePage }
]