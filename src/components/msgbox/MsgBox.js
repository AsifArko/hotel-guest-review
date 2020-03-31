import React from "react";
import Message from "../message/Message";
import Review from "../review/Review";
import Listing from "../listing/Listing";
import "./MsgBox.css";

const MsgBox = props => {
  const { msg, serial } = props;
  const { message, review, reviewMsg, sent, listing, id } = msg;

  return (
    <div
      style={{
        transform:
          serial % 2 === 0 ? `translate(7%, -10%)` : `translate(-107%, -10%)`,
        color: sent ? "#00000082" : "black"
      }}
      className={`msg-box ${sent && "msg-sent"}`}
    >
      <Message message={message} />
      <Review review={review} reviewMsg={reviewMsg} />
      <Listing
        listing={listing}
        sent={sent}
        message={message}
        review={review}
        reviewMsg={reviewMsg}
        id={id}
      />
    </div>
  );
};

export default MsgBox;
