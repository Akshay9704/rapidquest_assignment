import Profile from "./components/profile";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Strategy from "./components/strategy";

function App() {
  return (
    <>
    <div className="flex md:flex-row flex-col">
      <Sidebar/>
      <Profile/>
      <Main/>
      <Strategy/>
    </div>
    </>
  );
}

export default App;
