import { Suspense } from "react";

import Main from "./components/Main";
import Loader from "./components/Loader";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
}
