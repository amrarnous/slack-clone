import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./app/components/Header";
import Sidebar from "./app/components/Sidebar";
import styled from "styled-components";
import Chat from "./app/components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Login";
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
            alt=""
          />
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
const AppLoading = styled.div`
  background: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const AppLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 24px;
  }
`;
