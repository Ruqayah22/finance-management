import "./App.css";
import Bottombar from "./components/Bottombar";
import SearchAppBar from "./components/Navbar";
import backgroundImage from "./images/background.png";
import PersistentDrawerLeft from "./components/SidebarNavMenu";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SearchAppBar />

      <PersistentDrawerLeft />
      <main
        style={{
          minHeight: "63%",
        }}
      ></main>
      <Bottombar />
    </div>
  );
};

export default App;

////////////////////////////////////////////////////////////////
// import { Header } from "./components/Header";

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${backgroundImage})`,
//   },
// };

// {
//   /* style={styles.paperContainer} */
// }
// {
//   /* <Header /> */
// }
