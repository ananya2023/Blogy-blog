import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import makeStyles from "./style";
import { Context } from "../../context/Context";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SinglePost() {
  const classes = makeStyles();
  const location = useLocation();
  const [post, setPost] = useState("");
  const [postScreen, setPostScreen] = useState({});
  // const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [commentBy, setCommentBy] = useState("");
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);
  const file = "/image/";

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(
        `/api/v3/posts/${path}`
      );
      setPost(data.doc);
      setPostScreen(data.doc);
      setTitle(data.doc.title);
      setDescription(data.doc.title);
      setComments(data.doc.comments);
    };
    fetchPost();
  }, [path]);

  // const deleteHandler = async () => {
  //   try {
  //     await axios.delete(
  //       `http://localhost:4000/api/v3/posts/${postScreen._id}`,
  //       {
  //         data: { username: user.data.username },
  //         headers: {
  //           authorization: `Bearer ${user.token}`
  //         }
  //       },
  //     );
  //     window.location.replace('http://localhost:3000/');
  //   } catch (error) { }
  // };

  // const updateHandler = async () => {
  //   try {
  //     await axios.put(`http://localhost:4000/api/v3/posts/${postScreen._id}`, {
  //       username: user.data.username,
  //       title,
  //       description,
  //       Headers: {
  //         authorization: `Bearer ${user.token}`
  //       }
  //     });
  //     setUpdate(false);
  //     window.location.reload();
  //   } catch (error) { }
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (comment === "" || commentBy === "") return;
    try {
      const result = await axios.post(`/api/v3/posts/`, {
        post_id: post._id,
        comment: comment,
        name: commentBy,
      });
      console.log(result);
      setUpdate(false);
      window.location.reload();
      console.log("came here");
    } catch (error) {
      console.log("came here into error");
      console.log(error);
    }
  };
  return (
    <div className={classes.singlePost}>
      <div className={classes.singPostWrapper}>
        {update ? (
          <input
            type="text"
            value={title}
            autoFocus
            className={classes.singlePostTitleEdit}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className={classes.singlePostTitle}>{postScreen.title}</h1>
        )}
        <div className={classes.singlePostInfo}>
          <span>
            Author:
            <b className={classes.singlePostAuthor}>
              <Link
                to={`/?user=${postScreen.username}`}
                className={classes.Link}
              >
                {postScreen.username}
              </Link>
            </b>
          </span>
          <span>{new Date(postScreen.createdAt).toDateString()}</span>
        </div>
        <div className={classes.singlePostImageWrapper}>
          <img
            className={classes.singlePostImage}
            src={file + postScreen.image}
            alt=""
          />
        </div>
        {postScreen.username === user?.data.username && (
          <ul className={classes.editPost}>
            <li>
              <EditIcon color="action" onClick={() => setUpdate(true)} />
            </li>
            <li>
              {/* <DeleteIcon color="error" onClick={deleteHandler} /> */}
            </li>
          </ul>
        )}
        {update ? (
          <textarea
            className={classes.singlePostDescpEdit}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className={classes.singlePostDescp}>{postScreen.description}</p>
        )}
        {update && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              background: "#20bf6b",
            }}
            // onClick={updateHandler}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        )}
      </div>
      <h1>comments</h1>
      {comments.map((comment) => (
        <>
          <br />
          <div>Name : {comment.name}</div>
          <div>Comment : {comment.comment}</div>
          <br />
        </>
      ))}
      <form className={classes.writePostForm}>
        <div className={classes.writeFormGroup}></div>
        <input
          className={classes.commentinput}
          placeholder="Your Name"
          name="name"
          onChange={(e) => setCommentBy(e.target.value)}
        />

        <input
          className={classes.commentinput}
          placeholder="Enter your thoughts "
          type="text"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className={classes.commentbutton}
        >
          comment
        </button>
      </form>
    </div>
  );
}

export default SinglePost;
