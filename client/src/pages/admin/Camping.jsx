import Forminputs from "@/components/form/Forminputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import React from "react";
import { useForm } from "react-hook-form";

const Camping = () => {
  const { register, handleSubmit } = useForm();

  const jukkruSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create camping</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(jukkruSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Forminputs
              register={register}
              name="title"
              type="text"
              placeholder="Input Your Title"
            />
            <Forminputs
              register={register}
              name="price"
              type="number"
              placeholder="Input Your Price"
            />
            <TextAreaInput
              register={register}
              name="description"
              type="text"
              placeholder="Input Your Description"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Camping;
