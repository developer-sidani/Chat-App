import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { selectRoomId } from "../features/appSlice";
import { db } from "../firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useRef, useEffect } from "react";
const ChatContainer = styled.div`
  > h1 {
    display: flex;
    padding: 20px;
    color: var(--slack-color);
  }
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;
const ChatHeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
function Chat() {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);
  return (
    <ChatContainer>
      {roomDetails?.data().name ? (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderIcon />
              </h4>
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </ChatHeaderRight>
          </ChatHeader>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelId={roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      ) : (
        <h1>Please select a channel </h1>
      )}
    </ChatContainer>
  );
}

export default Chat;
