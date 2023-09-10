import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { AddData, DeleteData, EditData } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState(undefined);

  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();

  // const myProducts = useSelector((state) => state.myProducts);

  const [myProducts, setMyProducts] = useState([]);
  const getData = async () => {
    await axios
      .get("http://localhost:3000/products")
      .then((respons) => {
        setMyProducts(respons.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("process finished");
      });
  };

  const SaveData = async () => {
    if (title.trim() !== "" && description.trim() !== "" && url.trim() !== "") {
      if (!id) {
        await axios
          .post("http://localhost:3000/products", {
            title,
            description,
            url,
          })
          .then(() => {
            getData();
          });

        // dispatch(
        //   AddData({
        //     title,
        //     description,
        //     url,
        //   }),
        // );
      } else {
        await axios
          .put(`http://localhost:3000/products/${id}`, {
            title,
            description,
            url,
          })
          .then(() => {
            getData();
          });

        // dispatch(
        //   EditData({
        //     id,
        //     title,
        //     description,
        //     url,
        //   }),
        // );
      }
    }
    CancelFunc();
  };

  const CancelFunc = () => {
    setTitle("");
    setId(undefined);
    setDescription("");
    setUrl("");
  };
  const deleteFunction = async (deleteId) => {
    await axios
      .delete(`http://localhost:3000/products/${deleteId}`)
      .then(() => {
        getData();
      });
  };

  const setEditing = (id) => {
    let editedData = myProducts.find((p) => {
      return p.id === id;
    });
    setTitle(editedData.title);
    setId(editedData.id);
    setDescription(editedData.description);
    setUrl(editedData.url);
  };
  return (
    <div>
      <div className="container">
        <div className="row p-5 my-5 border">
          <div className="col-6">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Url</th>
                </tr>
              </thead>
              <tbody>
                {myProducts.map((product, index) => {
                  return (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.url}</td>
                      <td>
                        <Button
                          onClick={() => {
                            setEditing(product.id);
                          }}
                          variant="warning"
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => {
                            deleteFunction(product.id);
                            // dispatch(DeleteData(product.id));
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="col-6">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  type="Text"
                  placeholder="title"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                  type="Text"
                  placeholder="description"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Url</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  value={url}
                  type="Text"
                  placeholder="url"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Button
                  onClick={() => {
                    SaveData();
                  }}
                  variant="primary"
                >
                  Save
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
