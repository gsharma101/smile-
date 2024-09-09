import { NavBar, Actions, Header, Causes } from "./components";
import { Footer, Banner } from "./containers";

function App() {
  return (
    <div className="px-14">
      <NavBar />
      <Header />
      <Banner/>
      <Actions />
      <Causes />
      <Footer />
    </div>
  );
}

export default App;
