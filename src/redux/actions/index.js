import { Types } from "../types";

export const AddData = (data) => {
  return {
    type: Types.ADD_DATA,
    payload: {
      ...data,
      id: Math.floor(Math.random() * new Date()),
    },
  };
};

export const DeleteData = (id) => {
  return {
    type: Types.DELETE_DATA,
    payload: {
      id: id,
    },
  };
};

export const EditData = (data) => {
  return {
    type: Types.EDIT_DATA,
    payload: {
      ...data,
    },
  };
};
