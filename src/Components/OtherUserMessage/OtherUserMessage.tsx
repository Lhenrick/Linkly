import "./OtherUserMessage.css";

export default function OtherUserMessage() {
  return (
    <div className="otherMessage-container">
      <div className="otherMessage-container__card">
        <img
          className="otherUser__picture"
          src="./Img/kisaki.jpg"
          alt="User profile picture"
        />
        <div className="otherMessage__content">
          <p>Other Message</p>
        </div>
      </div>
    </div>
  );
}
