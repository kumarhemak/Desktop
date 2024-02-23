import "./chat-item.css";

const ChatItem = ({ data }) => {
  return (
    <div className="chat--item">
      <img
        src={require("../ChatItem/flower.jpeg")}
        alt="Flower"
        className="chat--item__left"
      />
      <div className="chat--item__right">
        <div>
          {data.name.first} {data.name.last}
        </div>
        <div>{data.cell}</div>
      </div>
    </div>
  );
};

export { ChatItem };
