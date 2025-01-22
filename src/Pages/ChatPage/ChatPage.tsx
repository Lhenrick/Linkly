import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Message from "../../Components/Message/Message";
import OtherUserMessage from "../../Components/OtherUserMessage/OtherUserMessage";
import UserChat from "../../Components/UserChat/UserChat";
import "./ChatPage.css";

export default function ChatPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <aside className="container-dropdown">
            <UserChat />
            <UserChat />
            <UserChat />
          </aside>
          <section className="messages-container">
            <div className="userMessages">
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="otherUserMessages">
              <OtherUserMessage />
              <OtherUserMessage />
              <OtherUserMessage />
              <OtherUserMessage />
              <OtherUserMessage />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
