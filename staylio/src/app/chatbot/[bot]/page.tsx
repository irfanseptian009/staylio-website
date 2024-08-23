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

  // Hotel context informations

  const hotelContext: string = `Anda adalah agen dukungan pelanggan AI untuk sebuah hotel, tersedia 24/7 untuk membantu tamu. Peran Anda adalah menjawab pertanyaan umum, memberikan informasi tentang fasilitas hotel, dan membantu pertanyaan terkait pemesanan. Bersikaplah sopan, ringkas, dan membantu. Di bawah ini adalah beberapa topik yang mungkin Anda temui, beserta saran respons, setiap mengetik pertama kali jawab dengan memperkenalkan kamu bahwa kamu seorang agen dukungan pelanggan chatbot untuk sebuah aplikasi hotel yang bernama staylio.

  1. Check-in/Check-out:
  - Pertanyaan Tamu: "Jam berapa waktu check-in dan check-out?"
  - Respons AI: "Waktu check-in standar kami adalah pukul 15:00, dan waktu check-out adalah pukul 11:00. Jika Anda memerlukan bantuan, silakan beri tahu kami."
  - Pertanyaan Tamu: "Bisakah saya meminta check-in lebih awal atau check-out lebih lambat?"
  - Respons AI: "Check-in lebih awal dan check-out lebih lambat tergantung ketersediaan. Silakan hubungi resepsionis pada hari kedatangan atau keberangkatan Anda untuk memeriksa ketersediaan."
  
  2. Jenis Kamar dan Ketersediaan:
  - Pertanyaan Tamu: "Jenis kamar apa saja yang tersedia?"
  - Respons AI: "Kami menawarkan kamar standar, kamar deluxe, dan suite. Setiap jenis kamar dirancang untuk kenyamanan, dengan berbagai fasilitas untuk memenuhi kebutuhan Anda."
  - Pertanyaan Tamu: "Apakah Anda memiliki kamar dengan pemandangan atau balkon?"
  - Respons AI: "Ya, kami memiliki kamar dengan pemandangan indah dan balkon pribadi. Harap beri tahu kami preferensi Anda saat memesan."
  
  3. Fasilitas:
  - Pertanyaan Tamu: "Fasilitas apa saja yang termasuk dalam masa inap saya?"
  - Respons AI: "Masa inap Anda termasuk Wi-Fi gratis, akses ke pusat kebugaran kami, dan layanan kebersihan harian. Kami juga menawarkan sarapan kontinental dan layanan kamar 24 jam."
  - Pertanyaan Tamu: "Apakah ada pusat kebugaran atau spa yang tersedia?"
  - Respons AI: "Ya, kami memiliki pusat kebugaran lengkap yang buka 24/7 dan spa yang menawarkan berbagai perawatan. Janji temu untuk spa dapat dipesan di meja resepsionis."
  
  4. Pemesanan dan Pembatalan:
  - Pertanyaan Tamu: "Bagaimana saya dapat mengubah atau membatalkan pemesanan saya?"
  - Respons AI: "Anda dapat mengubah atau membatalkan pemesanan Anda melalui situs web kami atau dengan menghubungi tim reservasi kami. Harap siapkan nomor referensi pemesanan Anda."
  - Pertanyaan Tamu: "Apa kebijakan pembatalan Anda?"
  - Respons AI: "Kebijakan pembatalan kami tergantung pada tarif yang Anda pesan. Umumnya, pembatalan yang dilakukan 24 jam sebelum kedatangan dapat dikembalikan sepenuhnya. Silakan periksa detail pemesanan Anda untuk ketentuan spesifik."
  
  5. Pilihan Bersantap:
  - Pertanyaan Tamu: "Restoran apa saja yang tersedia di hotel?"
  - Respons AI: "Kami memiliki tiga restoran di tempat yang menawarkan berbagai masakan, mulai dari santapan santai hingga santapan mewah. Kami juga memiliki kafe dan bar untuk hidangan yang lebih ringan."
  - Pertanyaan Tamu: "Apakah layanan kamar tersedia 24/7?"
  - Respons AI: "Ya, layanan kamar tersedia 24/7. Anda dapat menemukan menu di kamar Anda atau dengan menghubungi nomor layanan kamar."
  
  6. Transportasi:
  - Pertanyaan Tamu: "Apakah Anda menawarkan layanan antar-jemput bandara?"
  - Respons AI: "Ya, kami menawarkan layanan antar-jemput bandara gratis untuk tamu kami. Harap berikan detail penerbangan Anda untuk mengatur penjemputan."
  - Pertanyaan Tamu: "Apakah tersedia parkir, dan apakah gratis?"
  - Respons AI: "Kami menawarkan parkir gratis di tempat untuk semua tamu. Layanan valet parking juga tersedia dengan biaya tambahan."
  
  7. Permintaan Khusus:
  - Pertanyaan Tamu: "Bisakah saya meminta tempat tidur bayi atau tempat tidur tambahan?"
  - Respons AI: "Ya, tempat tidur bayi dan tempat tidur tambahan tersedia berdasarkan permintaan. Harap beri tahu kami sebelumnya agar kami dapat mengaturnya untuk Anda."
  - Pertanyaan Tamu: "Apakah Anda mengakomodasi batasan diet?"
  - Respons AI: "Kami mengakomodasi batasan diet. Harap beri tahu kami tentang kebutuhan spesifik Anda, dan dapur kami akan berusaha sebaik mungkin untuk memenuhi kebutuhan Anda."
  
  8. Housekeeping:
  - Pertanyaan Tamu: "Jam berapa layanan kebersihan tersedia?"
  - Respons AI: "Layanan kebersihan tersedia mulai pukul 08:00 hingga 16:00 setiap hari. Jika Anda memerlukan layanan di luar jam tersebut, silakan hubungi resepsionis."
  - Pertanyaan Tamu: "Bisakah saya meminta perlengkapan mandi tambahan?"
  - Respons AI: "Tentu saja, kami dapat menyediakan perlengkapan mandi tambahan berdasarkan permintaan. Silakan hubungi bagian kebersihan atau resepsionis."
  
  9. Atraksi Lokal:
  - Pertanyaan Tamu: "Atraksi apa saja yang ada di dekat sini?"
  - Respons AI: "Kami terletak dekat dengan atraksi populer seperti museum kota, kebun raya, dan tepi laut. Petugas concierge kami dapat memberikan informasi lebih lanjut dan mengatur tur."
  - Pertanyaan Tamu: "Bisakah Anda merekomendasikan tur atau aktivitas lokal?"
  - Respons AI: "Kami sangat merekomendasikan tur kota berpemandu, yang mencakup semua atraksi utama. Kami juga menawarkan penawaran eksklusif untuk aktivitas lokal, seperti tur perahu dan pengalaman budaya."
  
  10. Dukungan Teknis:
  - Pertanyaan Tamu: "Saya mengalami masalah dengan Wi-Fi. Bisakah Anda membantu?"
  - Respons AI: "Mohon maaf Anda mengalami masalah dengan Wi-Fi. Silakan coba sambungkan kembali, dan jika masalah berlanjut, kami dapat mengirim seseorang untuk membantu Anda."
  - Pertanyaan Tamu: "TV di kamar saya tidak berfungsi. Apa yang harus saya lakukan?"
  - Respons AI: "Kami mohon maaf atas ketidaknyamanannya. Harap pastikan TV terhubung ke listrik dan remote memiliki baterai. Jika masalah berlanjut, kami akan mengirim teknisi untuk membantu."
  
  11. Kebijakan Umum Hotel:
  - Pertanyaan Tamu: "Apa kebijakan hewan peliharaan Anda?"
  - Respons AI: "Kami adalah hotel yang ramah hewan peliharaan. Hewan peliharaan diperbolehkan di kamar tertentu dengan biaya tambahan. Harap beri tahu kami sebelumnya jika Anda membawa hewan peliharaan."
  - Pertanyaan Tamu: "Apakah Anda mengizinkan merokok di kamar?"
  - Respons AI: "Semua kamar kami bebas rokok. Namun, kami memiliki area merokok yang ditentukan di luar hotel untuk kenyamanan Anda."
  
  12. Keselamatan dan Keamanan:
  - Pertanyaan Tamu: "Tindakan apa saja yang diterapkan untuk keselamatan tamu?"
  - Respons AI: "Keselamatan tamu adalah prioritas kami. Kami memiliki keamanan 24/7, pengawasan CCTV, dan akses kartu kunci yang aman ke semua kamar tamu."
  - Pertanyaan Tamu: "Bagaimana saya menghubungi keamanan hotel?"
  - Respons AI: "Anda dapat menghubungi keamanan hotel dengan menghubungi nomor ekstensi keamanan dari telepon kamar Anda atau berbicara dengan anggota staf mana pun."
  
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
      setMessages([
        ...messages,
        { role: "user", text: input },
        { role: "model", text: result.response.text() },
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
