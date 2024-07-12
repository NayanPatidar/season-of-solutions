"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { db } from "@/lib/firebase/init";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = ({ className }: { className?: string }) => {
  const { user, signInWithGooglePopup } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    member1Name: "",
    member1ID: "",
    member2Name: "",
    member2ID: "",
    member1College: "",
    member1Degree: "",
    member2College: "",
    member2Degree: "",
    member1Contact: "",
    member1Email: "",
    member2Contact: "",
    member2Email: "",
    projectTheme: "",
    projectDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (activeTab < 3) {
      switch (activeTab) {
        case 0:
          if (
            formData.member1Name != "" &&
            formData.member1ID != "" &&
            formData.member2Name != "" &&
            formData.member2ID != ""
          ) {
            setErrorMsg("");
            setActiveTab((prev) => prev + 1);
          } else {
            setErrorMsg("Fill in all the details!");
          }
          break;

        case 1:
          if (
            formData.member1College != "" &&
            formData.member1Degree != "" &&
            formData.member2College != "" &&
            formData.member2Degree != ""
          ) {
            setErrorMsg("");
            setActiveTab((prev) => prev + 1);
          } else {
            setErrorMsg("Fill in all the details!");
          }
          break;

        case 2:
          const contactNumber = /^\d{10}$/;

          if (
            formData.member1Contact !== "" &&
            formData.member1Email !== "" &&
            formData.member2Contact !== "" &&
            formData.member2Email !== "" &&
            contactNumber.test(formData.member1Contact) &&
            contactNumber.test(formData.member2Contact)
          ) {
            setErrorMsg("");
            setActiveTab((prev) => prev + 1);
          } else {
            setErrorMsg("Fill in all the details with valid contact numbers!");
          }
          break;
      }
    } else {
      if (formData.projectTheme != "" && formData.projectDescription != "") {
        setErrorMsg("");
        if (user) {
          handleSubmit();
          notify();
          clearFormData();
          setTimeout(() => {
            setActiveTab(0);
          }, 2000);
        } else {
          signInWithGooglePopup();
        }
      } else {
        setErrorMsg("Fill in all the details!");
      }
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    let email = user?.email;
    try {
      const docRef = await setDoc(doc(db, "formData", `${email}`), formData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const notify = () => {
    toast.success("Successfully Registered !");
  };

  const clearFormData = () => {
    setFormData({
      member1Name: "",
      member1ID: "",
      member2Name: "",
      member2ID: "",
      member1College: "",
      member1Degree: "",
      member2College: "",
      member2Degree: "",
      member1Contact: "",
      member1Email: "",
      member2Contact: "",
      member2Email: "",
      projectTheme: "",
      projectDescription: "",
    });
  };
  // notify();
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-md mx-auto max-w-2xl w-full",
        className
      )}
    >
      <ToastContainer position="bottom-right" />

      <div className="relative mb-6">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full border-2",
                  activeTab >= index
                    ? "bg-brown-800 text-white border-brown-800"
                    : "bg-gray-200 text-gray-600 border-gray-400"
                )}
              >
                {step}
              </div>
              {index < 3 && (
                <div
                  className={cn(
                    "flex-1 h-1",
                    activeTab > index ? "bg-brown-800" : "bg-gray-200"
                  )}
                  style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} // Added spacing
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center">
          {/* <div className="w-full border-t-2 border-brown-800" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} /> Added spacing */}
        </div>
      </div>
      <div>
        {activeTab === 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brown-800">
              Registration details
            </h2>
            <h4 className="text-slate-500">
              Please fill your information so we know you registered for the
              event.
            </h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Member Name 1
                </label>
                <input
                  type="text"
                  name="member1Name"
                  value={formData.member1Name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  ID/Registration Number
                </label>
                <input
                  type="text"
                  name="member1ID"
                  value={formData.member1ID}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="ID/Registration"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Member Name 2
                </label>
                <input
                  type="text"
                  name="member2Name"
                  value={formData.member2Name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Your Teammate Name"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  ID/Registration Number
                </label>
                <input
                  type="text"
                  name="member2ID"
                  value={formData.member2ID}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="ID/Registration"
                />
              </div>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brown-800">
              Registration details
            </h2>
            <h4 className="text-slate-500">
              Please fill your information so we know you registered for the
              event.
            </h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  College Name of Member 1
                </label>
                <input
                  type="text"
                  name="member1College"
                  value={formData.member1College}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="College Name"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Degree / Dept / Year
                </label>
                <input
                  type="text"
                  name="member1Degree"
                  value={formData.member1Degree}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Degree / Dept / Year"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  College Name of Member 2
                </label>
                <input
                  type="text"
                  name="member2College"
                  value={formData.member2College}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="College Name"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Degree / Dept / Year
                </label>
                <input
                  type="text"
                  name="member2Degree"
                  value={formData.member2Degree}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Degree / Dept / Year"
                />
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brown-800">
              Registration details
            </h2>
            <h4 className="text-slate-500">
              Please fill your information so we know you registered for the
              event.
            </h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Contact Number of Member 1
                </label>
                <input
                  type="tel"
                  name="member1Contact"
                  value={formData.member1Contact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Contact Number"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Email Address of Member 1
                </label>
                <input
                  type="email"
                  name="member1Email"
                  value={formData.member1Email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Contact Number of Member 2
                </label>
                <input
                  type="tel"
                  name="member2Contact"
                  value={formData.member2Contact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Contact Number"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Email Address of Member 2
                </label>
                <input
                  type="email"
                  name="member2Email"
                  value={formData.member2Email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brown-800">
              Project Details
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Theme / Domain of Project
                </label>
                <input
                  type="text"
                  name="projectTheme"
                  value={formData.projectTheme}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Project Theme / Domain"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-brown-800">
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  placeholder="Project Description"
                  rows={4}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {errorMsg && (
        <div className="text-red-600 text-center mt-4">{errorMsg}</div>
      )}

      <div className="flex justify-end gap-5 mt-6">
        <button
          type="button"
          onClick={handlePrevious}
          className={cn(
            "px-4 py-2 rounded-lg",
            activeTab > 0
              ? "bg-brown-800 text-white"
              : "bg-gray-200 text-gray-600 cursor-not-allowed"
          )}
          disabled={activeTab === 0}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 bg-brown-800 text-white rounded-lg"
        >
          {activeTab === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
