import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <>
    <FormContainer>
      <div className="content-wrapper">
        <form>
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          {/*Password input*/}
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          {/*2 column grid layout for inline styling */}
         
          {/* Submit button*/}
          <button type="button" class="btn btn-primary btn-block mb-4">
           Register
          </button>

          {/*  Register button*/}
          <div class="text-center">
            <p>
              Already a member?<Link to="/"> Login</Link>
            </p>
           
          </div>
        </form>
      </div>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items:center;
background-color: #4e5e7a;

form{
    display: display: inline-block;
    flex-drection: column;
    gap: 2rem;
    background-color: #b8c3d4;
    padding: 3rem 5rem;
    width: 30rem;
    border-radius: 1.5rem;

    button{
      width: 100%;
      margin: 1%;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.2rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      color: white;
    }

}
`;

export default Login;
