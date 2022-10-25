import React from "react";
import axios from "axios";

import "./AddSpot.css";
import { useForm } from "react-hook-form";
const AddSpot = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      console.log(res);

      if (res.data.insertedId) {
        alert("New spot added successfully");
      } else {
        alert("FAiled");
      }
    });
  };
  return (
    <div>
      <h1>Add new service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddSpot;
