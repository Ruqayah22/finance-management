import "./App.css";
// import { Header } from "./components/Header";
import Footer from "./components/Footer";
import SearchAppBar from "./components/Header";
import backgroundImage from "./images/background.png";

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${backgroundImage})`,
//   },
// };

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
      {/* style={styles.paperContainer} */}
      {/* <Header /> */}
      <SearchAppBar />
      <Footer />
    </div>
  );
};

export default App;
