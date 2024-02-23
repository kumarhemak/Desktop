import { ChatItem } from "../ChatItem";

const ChatList = ({ data }) => {
  if (data.length === 0) {
    return <div className="chat--status-text">No people Found</div>;
  }
  return (
    <div className="chat--list">
      {data.map((item) => {
        return <ChatItem key={item.cell} data={item}></ChatItem>;
      })}
    </div>
  );
};

export { ChatList };
