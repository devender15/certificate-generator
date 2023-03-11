import React, { useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { UserContext } from "../contexts/User";
import { Homepage, Contact, Create } from ".";

export default function Home() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userContext?.setIsLoggedIn(true);
      } else {
        userContext?.setIsLoggedIn(false);
        navigate("/login");
      }
    });
  }, []);


  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/create/*" element={<Create />} />
    </Routes>
  );
}
