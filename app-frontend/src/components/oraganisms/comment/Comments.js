import React, { useState } from "react";
import { StyledComment, StyledCommentSection } from "./comment.styles";
import ProfileImage from "../../atoms/profileImg/ProfileImage";
import Button from "../../atoms/button/Button";
import { comments } from "./randcomments";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const CreateComment = ({ action }) => {
  const [clickState, setClickState] = useState(false);
  return (
    <div className="create-comment">
      <ProfileImage />
      <form>
        <input
          type="text"
          placeholder={action}
          onClick={() => setClickState(true)}
        />
        {clickState && (
          <div className="button">
            <Button
              text="Cancel"
              variance="text"
              onClick={() => setClickState((prev) => !prev)}
              sx={{ fontSize: "1rem", fontWeight: "500", padding: "0.5rem" }}
            />
            <Button
              text="Comment"
              variance="contained"
              sx={{
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem",
              }}
            />
          </div>
        )}
      </form>
    </div>
  );
};

const Comment = (props) => {
  const [viewReplies, setViewReplies] = useState(false);
  return (
    <StyledComment>
      <>
        {props.parentId && (
          <>
            <ProfileImage />
            <div className="other-info">
              <div className="name">
                <span className="name">@{props.name}</span>
                <span className="time">{props.time}</span>
              </div>
              <div className="content">{props.content}</div>
              <div className="likes-dislikes">
                <div className="likes">
                  <span>{props.likes}</span>
                  <AiOutlineLike />
                </div>
                <div className="dislikes">
                  <span>{props.dislikes}</span>
                  <AiOutlineDislike />
                </div>
              </div>
              {props.replyId && <Button text="Replies" />}
            </div>
          </>
        )}
      </>

      <>
        {props.parentId === props.replyId && viewReplies && (
          <Comment {...props} />
        )}
      </>
    </StyledComment>
  );
};

const Comments = ({ currentId }) => {
  return (
    <StyledCommentSection>
      <CreateComment action="Add a comment" />
      {comments.map(({ id, replyId, ...props }) => {
        return <Comment {...props} key={id} />;
      })}
    </StyledCommentSection>
  );
};

export default Comments;
