import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import Login from "./components/Login";
import logo from "./components/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";
import Error from './components/Error'
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={logo} alt="" />
          <Spinner name="ball-spin-fade-loader" color="black" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <Header />
                <AppBody>
                  <Sidebar />
                  <Chat />
                </AppBody>
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
