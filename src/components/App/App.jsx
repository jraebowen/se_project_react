//react imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
//utils/api
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { location, apiKey } from "../../utils/constants";
import { getItems, addItem, deleteItem } from "../../utils/api";
//contexts
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  //weather-related states
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    location: "",
  });

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //card rendering states
  const [clothingItems, setClothingItems] = useState([]);

  //modal open/close states
  const [selectedCard, setSelectedCard] = useState({});

  const [activeModal, setActiveModal] = useState("");

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

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

  const handleAddNewUser = () => {
    setActiveModal("add-user");
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
    addItem(data)
      .then((data) => {
        setClothingItems((prevItems) => [data, ...prevItems]);
      })
      .then(() => {
        handleModalClose();
      })
      .catch((err) => {
        console.error("Failed to add new item: ", err);
      });
  };

  //add new user
  const handleUserRegister = (newUser) => {
    auth
      .register(newUser.email, newUser.name, newUser.password, newUser.avatar)
      .then(() => {
        Navigate("./login");
      })
      .catch((err) => {
        console.error("Registration unsuccessful", err);
      });
  };

  //delete card functions
  const openConfirmationModal = (card) => {
    setActiveModal("delete-modal");
    setSelectedCard(card);
  };

  const handleCardDelete = (card) => {
    deleteItem({ itemId: card._id })
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

  return (
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
                <Profile
                  handleCardClick={handleCardClick}
                  onAddCard={handleAddCard}
                  clothingItems={clothingItems}
                />
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
          handleRegistration={handleUserRegister}
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
  );
}

export default App;
