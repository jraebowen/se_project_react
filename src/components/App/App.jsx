//react imports
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//css import
import "./App.css";
//components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import ProtectedRoute from "../ProtectedRoute";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
//utils/api
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { location, apiKey } from "../../utils/constants";
import { getItems, addItem, deleteItem, updateProfile } from "../../utils/api";
import * as auth from "../../utils/auth";
import { setToken, getToken } from "../../utils/token";
//contexts
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  //weather-related states
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    location: "",
  });

  //login states
  const [currentUser, setCurrentUser] = useState({
    email: "",
    name: "",
    avatar: "",
    _id: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //card rendering states
  const [clothingItems, setClothingItems] = useState([]);

  //modal open/close states
  const [selectedCard, setSelectedCard] = useState({});

  const [activeModal, setActiveModal] = useState("");

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const token = localStorage.getItem("jwt");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleCardClick = (card) => {
    setActiveModal("item-modal");
    setSelectedCard(card);
  };

  const handleAddCard = () => {
    setActiveModal("add-garment");
  };

  const handleAddNewUserModal = () => {
    setActiveModal("add-user");
  };

  const handleLoginModal = () => {
    setActiveModal("login-modal");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit-profile-modal");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeModal, handleModalClose]);

  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      if (
        e.target.classList.contains("modal") ||
        e.target.classList.contains("item-modal") ||
        e.target.classList.contains("delete-modal")
      ) {
        handleModalClose();
      }
    };
    if (activeModal) {
      window.addEventListener("mousedown", handleClickOutsideModal);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [activeModal, handleModalClose]);

  //weather api
  useEffect(() => {
    getWeather(location, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.error("Failed to fetch weather data:", err);
      });
  }, []);

  //render cards from api
  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => {
        console.error("Failed to load cards: ", err);
      });
  }, []);

  //add new cards
  const handleAddItemSubmit = (data) => {
    if (!token) {
      return;
    }
    addItem(data, token)
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        handleModalClose();
      })
      .catch((err) => {
        console.error("Failed to add new item: ", err);
      });
  };

  //add new user
  const handleRegistration = (newUser) => {
    auth
      .signUp(newUser.name, newUser.avatar, newUser.email, newUser.password)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .then(() => {
        handleModalClose();
      })
      .catch((err) => {
        console.error("Registration unsuccessful", err);
      });
  };

  //login functionality
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .signIn(email, password)
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          return auth.getUserInfo(res.token);
        } else {
          throw new Error("No token returned");
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleModalClose();
      })
      .catch((err) => {
        console.error("Failed to log in", err);
      });
  };

  //checking token
  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    auth.getUserInfo(jwt).then(({ email, name, avatar, _id }) => {
      setIsLoggedIn(true);
      setCurrentUser({ email, name, avatar, _id });
    });
  }, []);

  //delete card functions
  const openConfirmationModal = (card) => {
    setActiveModal("delete-modal");
    setSelectedCard(card);
  };

  const handleCardDelete = (card) => {
    if (!token) {
      return;
    }
    deleteItem({ itemId: card._id }, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== card._id)
        );
      })
      .then(() => {
        handleModalClose();
      })
      .catch((err) => {
        console.error("Failed to delete card: ", err);
      });
  };

  const handleUpdateProfile = (data) => {
    if (!token) {
      return;
    }
    updateProfile(data, token)
      .then((data) => {
        setCurrentUser({
          name: data.name,
          avatar: data.avatar,
          email: data.email,
        });
      })
      .then(() => {
        handleModalClose();
      })
      .catch((err) => {
        console.error("Could not update profile: ", err);
      });
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              weatherData={weatherData}
              onAddCard={handleAddCard}
              toggleMobileMenu={toggleMobileMenu}
              isMobileMenuOpened={isMobileMenuOpened}
              isLoggedIn={isLoggedIn}
              onSignUp={handleAddNewUserModal}
              onLogIn={handleLoginModal}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleCardClick={handleCardClick}
                      onAddCard={handleAddCard}
                      clothingItems={clothingItems}
                      onEditProfile={handleEditProfileModal}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={handleModalClose}
            onAddItem={handleAddItemSubmit}
          />
          <RegisterModal
            isOpen={activeModal === "add-user"}
            onClose={handleModalClose}
            handleRegistration={handleRegistration}
            onLogIn={handleLoginModal}
          />
          <LoginModal
            isOpen={activeModal === "login-modal"}
            onClose={handleModalClose}
            handleLogin={handleLogin}
            onSignUp={handleAddNewUserModal}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile-modal"}
            onClose={handleModalClose}
            onUpdateProfile={handleUpdateProfile}
          />
          <ItemModal
            activeModal={activeModal}
            selectedCard={selectedCard}
            onClose={handleModalClose}
            onDeleteClick={openConfirmationModal}
          />
          <DeleteModal
            activeModal={activeModal}
            onClose={handleModalClose}
            onCardDelete={handleCardDelete}
            selectedCard={selectedCard}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
