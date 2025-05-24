import Navbar from "./components/Navbar";
import Keyboard from "./components/Keyboard";
import useStore from "./store/store.js";

function App() {
  const { name, email, image } = useStore();
  return (
    <>
      <Navbar />
      <Keyboard />
      {name && (
        <div className="flex justify-center">
          <div className="flex shadow-md shadow-slate-800 p-5 rounded-3xl box">
            <img className="rounded-full mr-4" src={image} />
            <div className="flex flex-col gap-5 font-bold">
              <h1>{`Welcome, ${name}`}</h1>
              <p>{`${email}: verified`}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
