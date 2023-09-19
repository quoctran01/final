import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Toast } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import MenuBar from "../../Components/MenuBar/MenuBar";
import TipTap from "../../Components/TipTap/TipTap";
import { EditorContent, useEditor } from "@tiptap/react";
const CreateNew = () => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [imgProduct, setImgProduct] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: `
          <p>Nội dung bài viết</p>
        `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });
  const upLoadImage = (e) => {
    const formData = new FormData();
    formData.append("file", imgProduct);
    formData.append("upload_preset", "rahh7f3b");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload",
        formData
      )
      .then((res) => setUrlImg(res.data.url));
  };
  const createFeedback =()=>{
    const dataNew = {
      imageNew: urlImg,
      description: description,
    };
    if(description === "")
    return toast.success('Không để trống comment', {
      position: toast.POSITION.TOP_RIGHT
  });

    axios.post(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/new/createNew`,
      dataNew
      );
    window.location.reload()
  }
  return (
    <div>
      <ToastContainer />
      <Button variant="outline-success" onClick={handleShow}>Tạo bài viết</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo Thông Tin Mới</Modal.Title>
        </Modal.Header>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        ></Form.Group>
        <Modal.Footer>
          {/* <Form.Control
            type="text"
            placeholder="Tiêu Đề Bài Viết"
            autoFocus
            floating
          />
          <br></br> */}
          <Form.Control
            type="file"
            placeholder="Ảnh Bài Viết"
            autoFocus
            floating
            onChange={(event) => {
              setImgProduct(event.target.files[0]);
            }}
          />
          <br></br> <button type="submit" onClick={upLoadImage}>Gửi ảnh</button>
          <br></br>
          <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
          </div>
          <Button variant="secondary" onClick={handleClose}>Hủy</Button>
          <Button variant="success" onClick={createFeedback}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateNew;
