import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import app from "./components/Firebase";
import { auth, db } from "./components/Firebase";
import {
  collection,
  addDoc,
  getDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import SavedData from "./components/SavedData";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";

// Sets active user to the current logged in user.
function App() {
  const [purchasePrice, setPurchasePrice] = useState();
  const [downPayment, setDownPayment] = useState();
  const [paymentPeriod, setPaymentPeriod] = useState();
  const [interestRate, setInterestRate] = useState();
  const [data, setData] = useState({});
  const [saved, setSaved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // For Login and Authentication
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [activeUser, setActiveUser] = useState({});
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [showSignUp, setShowSignUp] = useState(true);
  const [showLogIn, setShowLogIn] = useState(true);
  const [isActive, setIsActive] = useState();

  const navigate = useNavigate();
  // Related to Main Input, Calculation, Output and Saving
  // Related to Main Input, Calculation, Output and Saving
  // Related to Main Input, Calculation, Output and Saving
  const handlePurchaseChange = (e) => {
    e.preventDefault();
    setPurchasePrice(e.target.value);
  };
  const handleDownPaymentChange = (e) => {
    e.preventDefault();
    setDownPayment(e.target.value);
  };
  const handleInterestChange = (e) => {
    e.preventDefault();
    setInterestRate(e.target.value);
  };
  const handlePeriodChange = (e) => {
    e.preventDefault();
    setPaymentPeriod(e.target.value);
  };

  const getMortgage = () => {
    const p = purchasePrice - downPayment || 0;
    const r = interestRate / 100;
    const n = paymentPeriod;
    const monthlyPayments =
      Math.round(p * (r * Math.pow(r + 1, n))) / (Math.pow(r + 1, n) - 1);
    // console.log(p, r, n, monthlyPayments);
    const finalMonthly = monthlyPayments / 12 || 0;
    // console.log(finalMonthly.toFixed(2));
    const answer = {
      purchasePrice,
      downPayment,
      interestRate,
      principal: p,
      period: paymentPeriod,
      monthly: finalMonthly.toFixed(2),
    };
    if (purchasePrice == 0) {
      alert("Set Purchase Price");
    } else if (interestRate == 0) {
      alert("Set Interest Rate");
    } else if (downPayment == 0) {
      alert("Set Down Payment");
    } else if (paymentPeriod == null || paymentPeriod == undefined) {
      alert("Set payment period");
    } else {
      setData(answer);
      checkCurrentInputs();
    }
  };

  const handleClearAll = () => {
    setPurchasePrice("");
    setDownPayment("");
    setPaymentPeriod("");
    setInterestRate("");
  };

  const saveQuote = () => {
    if (!saved.includes(data)) {
      setSaved([...saved, data]);
      updateData(user);
      console.log("SaveQuote fired");
      console.log(saved);
    } else {
      alert("This quote has already been saved");
    }
  };

  const checkCurrentInputs = () => {
    // saved.includes(data) ? setIsActive("disabled") : setIsActive("");
  };

  const deleteEntry = (e) => {
    console.log(e.target.getAttribute("value"));
    saved.splice([e.target.getAttribute("value")], 1);
    updateData(user);
    console.log(saved);
  };

  const reloadEntry = (e) => {
    const entry = saved[e.target.getAttribute("value")];
    console.log(entry);

    setPurchasePrice(entry.purchasePrice);
    setPaymentPeriod(entry.paymentPeriod);
    setDownPayment(entry.downPayment);
    setInterestRate(entry.interestRate);
  };

  // //////////////////////////

  // Related to Registration and Login
  // Related to Registration and Login
  // Related to Registration and Login

  // Registers new users
  const register = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("Successful Register ", newUser);
      // console.log(newUser.user.uid);
      setActiveUser(newUser.user);
      // createCollectionandDoc(user);
      console.log(user);
      addDataWithId(newUser.user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  };

  // Login registered users.
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("Successful Login ", user);
      readDocument(user.user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  };

  // Logout signed in users.
  const logout = async () => {
    await signOut(auth);
    setSaved([]);
  };

  useEffect(() => {
    // Maintains sign in status of current user.
    onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      // console.log(auth);
      setUser(currentUser);
      readDocument(currentUser);
      checkCurrentInputs();
    });
  }, []);

  // ///////////////////////

  // Related to database.
  // Related to database.
  // Related to database.

  // Create document and Collection
  const createCollectionandDoc = async (a) => {
    try {
      const docRef = await addDoc(collection(db, `${a.uid}`), {
        data: { ...saved },
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  //   createCollectionandDoc();

  //   Read document
  // const readDocument = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // readDocument()

  // This will retrieve data for the selected user.
  const readDocument = async (a) => {
    try {
      const userdoc = doc(db, "users", `${a.uid}`);
      console.log(a.uid);
      console.log(a.saved);
      const docSnap = await getDoc(userdoc);

      if (docSnap.exists()) {
        const retreivedData = docSnap.data();
        setSaved([...retreivedData.saved]);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // creates reference to the relative collection.
  // creates reference to the relative collection.
  const usersCollectionRef = collection(db, "users2");
  // console.log(usersCollectionRef);

  // Add a new document with a specified ID, to collection "avengers"
  // Note: when you use setDoc to create a document you must specify an id for the document to create.
  const addDataWithId = async (a) => {
    try {
      await setDoc(doc(db, "users", `${a.uid}`), {
        saved: [...saved],
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  //   addDataWithId();

  // Add a new document with with auto generated ID, to collection "avengers"
  // Add a new document with with auto generated ID, to collection "avengers"

  const addDataWithAutoId = async () => {
    try {
      await addDoc(collection(db, "avengers"), {
        name: "China Trump",
        state: "Bomba",
        country: "Rasta",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //   addDataWithAutoId();

  // const updateData = async () => {
  //   try {
  //     const washingtonRef = doc(db, "cities", "DC");

  //     // Set the "capital" field of the city 'DC'
  //     await updateDoc(washingtonRef, {
  //       capital: true,
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // updateData();

  const updateData = async (a) => {
    try {
      const userdoc = doc(db, "users", `${a.uid}`);
      // console.log(a.uid);
      // console.log(a.saved);
      await updateDoc(userdoc, {
        saved: [...saved],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <NavBar
        user={user}
        logout={logout}
        showSignUp={showSignUp}
        setShowSignUp={setShowSignUp}
        setShowLogIn={setShowLogIn}
        showLogIn={showLogIn}
      />

      {/* <Register
        setRegisterPassword={setRegisterPassword}
        setRegisterEmail={setRegisterEmail}
        register={register}
        registerEmail={registerEmail}
        registerPassword={registerPassword}
      /> */}

      <Routes>
        <Route element={<ProtectedRoutes auth={auth} user={user} />}>
          <Route
            path="/register"
            element={
              <Register
                setRegisterPassword={setRegisterPassword}
                setRegisterEmail={setRegisterEmail}
                register={register}
                registerEmail={registerEmail}
                registerPassword={registerPassword}
                errorMessage={errorMessage}
                setShowSignUp={setShowSignUp}
              />
            }
          />

          <Route
            path="/login"
            element={
              <Login
                setLoginPassword={setLoginPassword}
                setLoginEmail={setLoginEmail}
                loginEmail={loginEmail}
                loginPassword={loginPassword}
                login={login}
                setShowLogIn={setShowLogIn}
                errorMessage={errorMessage}
              />
            }
          />
        </Route>

        <Route
          path="/"
          element={
            <Main
              handleClearAll={handleClearAll}
              purchasePrice={purchasePrice}
              handlePurchaseChange={handlePurchaseChange}
              handleDownPaymentChange={handleDownPaymentChange}
              handleInterestChange={handleInterestChange}
              handlePeriodChange={handlePeriodChange}
              getMortgage={getMortgage}
              saved={saved}
              downPayment={downPayment}
              paymentPeriod={paymentPeriod}
              data={data}
              saveQuote={saveQuote}
              setShowLogIn={setShowLogIn}
              setShowSignUp={setShowSignUp}
              user={user}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />
      </Routes>

      <div>
        {" "}
        {user && (
          <SavedData
            saved={saved}
            deleteEntry={deleteEntry}
            reloadEntry={reloadEntry}
          />
        )}
      </div>
      {/* Only shows if there is a logged in user. */}
    </>
  );
}

export default App;
