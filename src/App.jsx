import { NavBar, Actions, Header } from "./components";
import { Footer, Banner, Causes } from "./containers";

function App() {
  return (
    <div className="px-14">
      <NavBar />
      <Header />
      <Banner />
      <Causes />
      <Actions />
      <Footer />
    </div>
  );
}

export default App;
