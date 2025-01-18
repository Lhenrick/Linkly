import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Message from "../../Components/Message/Message";
import "./ChatPage.css";

export default function ChatPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <aside className="container-dropdown">
            <p>User 1</p>
            <p>User 2</p>
            <p>User 3</p>
            <p>User 4</p>
            <p>User 5</p>
          </aside>
        </div>
        <Message />
      </main>
      <Footer />
    </>
  );
}
