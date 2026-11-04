import React from 'react'
import { useState } from 'react';
import {
  FiUser,
  FiLock,
  FiBell,
  FiGlobe,
  FiSave,
} from "react-icons/fi";

const SettingsHansdle = () => {
    const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@motomini.com",
    phone: "+91 98765 43210",
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const menu = [
    {
      id: "profile",
      label: "Profile",
      icon: <FiUser size={17} />,
    },
    {
      id: "security",
      label: "Security",
      icon: <FiLock size={17} />,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <FiBell size={17} />,
    },
    {
      id: "general",
      label: "General",
      icon: <FiGlobe size={17} />,
    },
  ];
  return (
     <div className="min-h-screen bg-black px-8 py-8 text-white">

      {/* ================= HEADER ================= */}

      <div>
        <p className="text-[10px] tracking-[0.3em] text-gray-600">
          ADMIN PANEL
        </p>

        <h1 className="mt-1 font-heading text-3xl tracking-widest text-[#D3AF37]">
          SETTINGS
        </h1>

        <p className="mt-2 text-xs text-gray-600">
          Manage your admin account and application settings
        </p>
      </div>


      {/* ================= SETTINGS ================= */}

      <div className="mt-8 grid grid-cols-[220px_1fr] border border-[#29230d]">

        {/* ================= LEFT MENU ================= */}

        <aside className="border-r border-[#29230d] bg-[#080808]">

          {menu.map((item) => (

            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center gap-3 border-b border-[#1c1c1c] px-5 py-4 text-left text-sm transition ${
                activeTab === item.id
                  ? "border-l-2 border-l-[#D3AF37] bg-[#1c1a12] text-[#D3AF37]"
                  : "text-gray-600 hover:bg-[#111] hover:text-gray-300"
              }`}
            >
              {item.icon}

              <span>
                {item.label}
              </span>

            </button>

          ))}

        </aside>


        {/* ================= RIGHT CONTENT ================= */}

        <section className="bg-black p-8">


          {/* ================= PROFILE ================= */}

          {activeTab === "profile" && (

            <div className="max-w-2xl">

              <div className="border-b border-[#29230d] pb-5">

                <h2 className="text-lg font-semibold text-white">
                  Admin Profile
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Update your administrator account information.
                </p>

              </div>


              {/* Avatar */}

              <div className="mt-7 flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D3AF37] text-lg font-bold text-black">
                  AD
                </div>

                <div>

                  <p className="text-sm font-medium text-white">
                    Administrator
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Admin account
                  </p>

                </div>

              </div>


              {/* Form */}

              <div className="mt-8 space-y-5">

                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    NAME
                  </label>

                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        name: e.target.value,
                      })
                    }
                    className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#D3AF37]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        email: e.target.value,
                      })
                    }
                    className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#D3AF37]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    PHONE
                  </label>

                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        phone: e.target.value,
                      })
                    }
                    className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#D3AF37]"
                  />

                </div>


                <button className="mt-3 flex items-center gap-2 bg-[#D3AF37] px-5 py-3 text-xs font-semibold tracking-wider text-black hover:bg-[#b99725]">

                  <FiSave size={15} />

                  SAVE CHANGES

                </button>

              </div>

            </div>

          )}


          {/* ================= SECURITY ================= */}

          {activeTab === "security" && (

            <div className="max-w-2xl">

              <div className="border-b border-[#29230d] pb-5">

                <h2 className="text-lg font-semibold text-white">
                  Security
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Change your admin account password.
                </p>

              </div>


              <div className="mt-8 space-y-5">

                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    CURRENT PASSWORD
                  </label>

                  <input
                    type="password"
                    value={password.current}
                    onChange={(e) =>
                      setPassword({
                        ...password,
                        current: e.target.value,
                      })
                    }
                    className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#D3AF37]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    NEW PASSWORD
                  </label>

                  <input
                    type="password"
                    value={password.newPassword}
                    onChange={(e) =>
                      setPassword({
                        ...password,
                        newPassword: e.target.value,
                      })
                    }
                    className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#D3AF37]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    CONFIRM PASSWORD
                  </label>

                  <input
                    type="password"
                    value={password.confirm}
                    onChange={(e) =>
                      setPassword({
                        ...password,
                        confirm: e.target.value,
                      })
                    }
                    className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#D3AF37]"
                  />

                </div>


                <button className="mt-3 flex items-center gap-2 bg-[#D3AF37] px-5 py-3 text-xs font-semibold tracking-wider text-black hover:bg-[#b99725]">

                  <FiLock size={15} />

                  UPDATE PASSWORD

                </button>

              </div>

            </div>

          )}


          {/* ================= NOTIFICATIONS ================= */}

          {activeTab === "notifications" && (

            <div className="max-w-2xl">

              <div className="border-b border-[#29230d] pb-5">

                <h2 className="text-lg font-semibold text-white">
                  Notifications
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Choose which notifications you want to receive.
                </p>

              </div>


              <div className="mt-7 space-y-3">

                <Notification
                  title="New Orders"
                  description="Get notified when a new order is placed."
                />

                <Notification
                  title="Low Stock"
                  description="Get notified when a product stock is low."
                />

                <Notification
                  title="New Users"
                  description="Get notified when a new customer registers."
                />

                <Notification
                  title="Payment Updates"
                  description="Get notified about payment changes."
                />

              </div>

            </div>

          )}


          {/* ================= GENERAL ================= */}

          {activeTab === "general" && (

            <div className="max-w-2xl">

              <div className="border-b border-[#29230d] pb-5">

                <h2 className="text-lg font-semibold text-white">
                  General Settings
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Configure basic MotoMini application settings.
                </p>

              </div>


              <div className="mt-8 space-y-5">

                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    STORE NAME
                  </label>

                  <input
                    type="text"
                    defaultValue="MotoMini"
                    className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#D3AF37]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    CURRENCY
                  </label>

                  <select className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-gray-400 outline-none focus:border-[#D3AF37]">

                    <option>Indian Rupee (₹)</option>
                    <option>US Dollar ($)</option>
                    <option>Saudi Riyal (﷼)</option>

                  </select>

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    LANGUAGE
                  </label>

                  <select className="w-full border border-[#29230d] bg-[#080808] px-4 py-3 text-sm text-gray-400 outline-none focus:border-[#D3AF37]">

                    <option>English</option>

                  </select>

                </div>


                <button className="mt-3 flex items-center gap-2 bg-[#D3AF37] px-5 py-3 text-xs font-semibold tracking-wider text-black hover:bg-[#b99725]">

                  <FiSave size={15} />

                  SAVE SETTINGS

                </button>

              </div>

            </div>

          )}

        </section>

      </div>

    </div>
  );
};


const Notification = ({ title, description }) => {
  return (
    <div className="flex items-center justify-between border border-[#29230d] bg-[#080808] p-5">

      <div>

        <p className="text-sm text-gray-300">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-700">
          {description}
        </p>

      </div>

      <button className="relative h-5 w-10 rounded-full bg-[#D3AF37]">

        <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-black" />

      </button>

    </div>
  )
}

export default SettingsHansdle
