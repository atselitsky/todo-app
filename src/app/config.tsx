import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { RouterPathType } from "./types";

// FIXME: const Example = lazy(() => import("./tasks-list"));


export const PATHS: RouterPathType[] = [
    { name: "Home", path: "/", element: <div>Hello world!</div> },
    { name: "Settings", path: "/settings", element: <div>this is settings!</div> },
    { name: "About", path: "/about", element: <div>this is about!</div> },
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: PATHS.map(({ path, element }) => ({ path, element }))
    },
]);