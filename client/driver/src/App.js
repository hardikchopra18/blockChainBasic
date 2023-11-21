import { useEffect } from "react";
import { ethers } from "ethers";

function App() {
  const myfunc = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(ethers.utils.formatEther(await provider.getBalance("0x914431062563c3C17C1f7A99fA521a9541F08211")));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    myfunc();
  }, []);

  return <div className="App">Hello baby</div>;
}

export default App;
