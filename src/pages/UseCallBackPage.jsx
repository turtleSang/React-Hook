import UseCallBack from "../components/UseCallBack";
import UseCallBackProblem from "../components/UseCallBackProblem";

const UseCallBackPage = () => {
  return (
    <>
      <h1>useCallBack Page</h1>
      <h2>Proplem render when change state</h2>
      <UseCallBackProblem />
      <h2>Using useCallback</h2>
      <UseCallBack />
    </>
  );
};

export default UseCallBackPage;
