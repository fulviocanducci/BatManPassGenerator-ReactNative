import { Home } from "./src/screens";

import { PassProvider } from "./src/contexts";

export default function App() {
  return (
    <PassProvider>
      <Home />
    </PassProvider>
  );
}
