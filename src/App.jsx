import { NavBar, Actions, Header, Causes } from "./components";
import { Footer } from "./containers";

function App() {
  return (
    <div className="px-14">
      <NavBar />
      <Header />
      <Actions />
      <Causes />
      <Footer />
    </div>
  );
}

export default App;
