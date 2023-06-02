import { RouterProvider } from "react-router-dom";

import routers from "./routes";

export default function App() {
  return (
    <>
      <header>Wiredup Header</header>

      <body>
        <RouterProvider router={routers} />
      </body>

      <header>Wiredup Footer</header>
    </>
  );
}
