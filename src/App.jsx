import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import StatsCards from "./components/Stat";
import FriendsDash from "./components/FriendsDash";
import FriendDetails from "./components/FriendDetails";
import Timeline from "./components/Timeline";
import FriendshipAnalytics from "./components/FriendAna";
import NotFound from "./components/NotFound";

import friendsData from "./data/friends.json";

function HomePage() {
  return (
    <>
      <Banner />
      <StatsCards />
      <FriendsDash friends={friendsData} />
    </>
  );
}

function App() {

  const [activityLogs, setActivityLogs] = useState([]);

  const [notificationState, setNotificationState] = useState({
    show: false,
    message: "",
  });

  const recordInteraction = (type, friendName) => {
    const newLog = {
      id: Date.now(),
      type,
      with: friendName,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      icon: type === "Call" ? "📞" : type === "Text" ? "💬" : "📧",
    };


    setActivityLogs((prev) => [newLog, ...prev]);

    setNotificationState({
      show: true,
      message: `${type} with ${friendName} logged!`,
    });

    setTimeout(() => {
      setNotificationState({ show: false, message: "" });
    }, 5000);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] relative overflow-x-hidden">
        <Navbar />

        {/* Notification */}
        {notificationState.show && (
          <div className="fixed top-5 right-5 z-[150] pointer-events-none">
            <div className="bg-[#1a4a3e] text-white p-5 rounded-2xl shadow-2xl min-w-[320px]">
              <p className="font-bold">Action Logged</p>
              <p className="text-white/80 text-sm">{notificationState.message}</p>
            </div>
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/friend/:id"
              element={
                <FriendDetails
                  friends={friendsData}
                  onAction={recordInteraction}
                />
              }
            />

            <Route
              path="/timeline"
              element={<Timeline events={activityLogs} />}
            />

            <Route
              path="/stats"
              element={<FriendshipAnalytics events={activityLogs} />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;