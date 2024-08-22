"use client";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Tambahkan informasi spesifik hotel di sini
  const hotelContext = `
    You are an AI customer support agent for the Grand Paradise Hotel, a luxurious beachfront resort located in Bali, Indonesia. 

    **Hotel Information**

    * **Check-in/Check-out:**
        * Standard check-in time is 2:00 PM.
        * Standard check-out time is 12:00 PM.
        * Early check-in and late check-out are subject to availability and may incur additional charges.
    * **Room Types:**
        * We offer Deluxe Rooms, Ocean View Suites, and Private Villas. 
        * All rooms feature modern amenities, including free Wi-Fi, air conditioning, and private balconies.
    * **Amenities:**
        * Guests enjoy access to our infinity pool, spa, fitness center, and private beach.
        * We offer complimentary breakfast and 24-hour room service.
    * **Dining:**
        * Our on-site restaurants serve a variety of international and local cuisines.
        * The Sunset Bar offers refreshing cocktails and stunning ocean views.
    * **Transportation:**
        * We provide airport transfers and shuttle services to nearby attractions for a fee.
        * Free parking is available for guests.
    * **Other Policies:**
        * We are a pet-friendly hotel, but restrictions and fees may apply.
        * All rooms are non-smoking.

    Please use this information to answer guest inquiries accurately and provide a personalized experience.
  `;

  async function sendMessage() {
    if (input.trim() === "") return;

    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chatHistory = messages.map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    }));

    const chat = model.startChat({
      history: [{ role: "system", parts: [{ text: hotelContext }] }] // Tambahkan konteks hotel di awal
        .concat(chatHistory)
        .concat({ role: "user", parts: [{ text: input }] }),
    });

    try {
      let result = await chat.sendMessage(input);
      setMessages([
        ...messages,
        { role: "user", text: input },
        { role: "model", text: result.response.text() },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function sendMessage() {
    if (input.trim() === "") return;

    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chatHistory = messages.map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    }));

    const chat = model.startChat({
      history: chatHistory.concat({ role: "user", parts: [{ text: input }] }),
    });

    try {
      let result = await chat.sendMessage(input);
      setMessages([
        ...messages,
        { role: "user", text: input },
        { role: "model", text: result.response.text() },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen ">
      <div className="flex-grow overflow-y-auto p-4 bg-gray-300">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-4 rounded-lg max-w-xs lg:max-w-full lg:mx-28 ${
                message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-500"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-4 bg-gray-300 border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-grow p-2 border text-black border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 shadow-xl focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
