import "./Message.css";

export default function Message() {
  return (
    <div className="message-container">
      <div className="message-container__card">
        <img
          className="user-picture"
          src="./Img/kisaki.jpg"
          alt="User profile picture"
        />
        <div className="Message-content">
          <p>Message</p>
        </div>
      </div>
    </div>
  );
}
