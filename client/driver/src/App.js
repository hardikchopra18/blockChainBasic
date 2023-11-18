import { useEffect } from "react";
import { ethers}  from "ethers";
function App() {
   const myfunc=async()=>{
    try{
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      
      console.log(signer);
    }catch(e){
      console.log(e);
    }
   }
 
  useEffect( ()=>{
  myfunc();
  },[]);
  
  return (
    <div className="App">
      Hello baby
    </div>
  );
}

export default App;
