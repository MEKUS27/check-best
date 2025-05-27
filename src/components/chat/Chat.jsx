import { useState, useRef, useEffect } from "react";
import "./chat.scss";
import { FaImage } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!inputText && !image) return;

    const newMessage = {
      text: inputText,
      image: image,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat-header">Live Chat Admin</div>

      <div className="messages">
        {messages.map((msg, idx) => (
          <div className={`message ${msg.sender}`} key={idx}>
            {msg.text && <p>{msg.text}</p>}
            {msg.image && (
              <img
                src={msg.image}
                alt="uploaded"
                className="clickable-image"
                onClick={() => setPreviewImage(msg.image)}
              />
            )}
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area">
        {image && (
          <div className="image-preview">
            <img src={image} alt="preview" />
          </div>
        )}
        <label htmlFor="img-upload" className="icon-btn">
          <FaImage />
        </label>
        <input
          type="file"
          id="img-upload"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSend}>
          <GrSend />
        </button>
      </div>

      {/* Modal Preview */}
      {previewImage && (
        <div className="image-modal" onClick={() => setPreviewImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={previewImage} alt="Full Preview" />
            <button className="close-btn" onClick={() => setPreviewImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
