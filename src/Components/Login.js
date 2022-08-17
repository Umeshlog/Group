import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, NumberInput, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate()

  

const onSubmit = (data) =>{
    navigate('/dashboard')
}

  return (
    <div>
      <>
        <div className="arpit">
          <div className="container a">
            <div className="col-sm-6">
              <div
                className="container "
                style={{
                  width: "500px",
                  marginTop: "50px",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Login</h1>
                  <TextInput
                    style={{ fontWeight: "bold" }}
                    mt="sm"
                    label="Email"
                    placeholder="Email"
                    {...register("email", {
                      required: "plzz fill the email",
                      minLength: {
                        value: 4,
                        message: "plzz fill minimum 4 character",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }} className="error">
                      {errors.email.message}
                    </p>
                  )}

                  <TextInput
                    style={{ fontWeight: "bold" }}
                    mt="sm"
                    label="Password"
                    placeholder="Password"
                    {...register("password", {
                      required: "plzz fill the name",
                      minLength: {
                        value: 4,
                        message: "plzz fill minimum 4 character",
                      },
                    })}
                  />
                  {errors.password && (
                    <p style={{ color: "red" }} className="error">
                      {errors.password.message}
                    </p>
                  )}

                  <Button type="submit" mt="sm" className="mb-5">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Login;