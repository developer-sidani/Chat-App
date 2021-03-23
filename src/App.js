import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import Login from "./components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
