"use client";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
interface Message {
  role: "user" | "model";
  text: string;
}

function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  // Hotel context information

  const hotelContext: string = `Anda adalah agen dukungan pelanggan AI untuk sebuah hotel, tersedia 24/7 untuk membantu tamu. peran anda adalah memberikan informasi tentang fasilitas tempat penginapan dan tempat penyewaan tempat, dan membantu pertanyaan terkait pemesanan. Bersikaplah sopan, ringkas, dan membantu. setiap mengetik pertama kali jawab dengan memperkenalkan kamu bahwa kamu seorang agen dukungan pelanggan chatbot untuk sebuah aplikasi tempat penyedia tempat tempat untuk menginap dan menyewa per hari atau per bulan atau perthaun yang bernama staylio, 
Di bawah ini adalah  terdapat list tempat yang ada di aplikasi ini yang berkategory hotel, apartemen, kontrakan, villa, kostan, rumah,
dengan sentuhan lebih spesifik dan menarik:
terdapat list tempat yang ada di aplikasi ini yang berkategory hotel, apartemen, kontrakan, villa, kostan, rumah,

Pengguna: "Saya mencari hotel di Bali dengan pemandangan pantai."
Chatbot: "Tentu! Beberapa rekomendasi hotel di Bali dengan pemandangan pantai yang indah antara lain: The Nusa Dua Beach Resort, Seminyak Sunset Villa, dan Senggigi Beach Resort. "
  
jika pelanggan ingin menyudahi atau mengetik trimakasih kamu menjawab oke terimakasih dan beri selamat menikmati 
Jika Anda tidak tahu jawaban atas pertanyaan tertentu, beri tahu tamu dengan sopan bahwa Anda akan menghubungkan mereka dengan perwakilan manusia untuk bantuan lebih lanjut. Selalu pastikan tamu merasa dihargai dan didukung.`;

  async function sendMessage() {
    if (input.trim() === "") return;

    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    if (!process.env.NEXT_PUBLIC_API_KEY) {
      throw new Error(
        "NEXT_PUBLIC_API_KEY is not defined. Please check your environment variables."
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const handleResponse = (response: string) => {
      // Remove all occurrences of "*"
      return response.replace(/\*/g, "");
    };

    const chatHistory = messages.map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    }));

    const adjustedHistory =
      chatHistory.length > 0
        ? chatHistory
        : [{ role: "user", parts: [{ text: hotelContext }] }];

    const chat = model.startChat({
      history: adjustedHistory,
    });

    try {
      const result = await chat.sendMessage(input);
      const cleanedResponse = handleResponse(result.response.text());
      setMessages([
        ...messages,
        { role: "user", text: input },
        { role: "model", text: cleanedResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div className="bg-gray-200 h-full overflow-y-auto">
        <div className="flex flex-col text-gray-600 font-extrabold bg-orange-400 p-8 shadow-md rounded-b-3xl mx-14">
          Staylio Chat-Bot
          <p className="text-xs text-black font-normal">
            You can interaction with Ai-bot staylio, help you anitithing you wnat
          </p>
        </div>
        <div className="flex flex-col h-screen ">
           {" "}
          <div className="flex-grow p-8 lg:px-72">
            <div className="flex-grow p-4  rounded-2xl shadow-xl mb-8 ">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex mb-4 ${
                    message.role === "user" ? "justify-end " : "justify-start"
                  }`}
                >
                  <div
                    className={`p-4  ax-w-xs  lg:max-w-lg lg:mx-10 ${
                      message.role === "user"
                        ? "bg-orange-400 text-white shadow-lg rounded-br-3xl rounded-l-3xl"
                        : "bg-gray-100 shadow-lg  rounded-bl-3xl rounded-r-3xl"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex p-4  bg-gray-00 border-t rounded-xl shadow-xl gap-2  border-gray-300">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-grow p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 shadow-sm focus:ring-orange-500"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg--500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
