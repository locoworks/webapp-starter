import { RouterProvider } from "react-router-dom";

import routers from "./routes";

export default function App() {
  return (
    <>
      <header className="bg-yellow-300 text-center p-5">Header</header>

      <body>
        <RouterProvider router={routers} />
      </body>

      <header className="bg-green-300 text-center p-5">Footer</header>
    </>
  );
}
