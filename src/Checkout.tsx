import React, { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  background-color:  #2c3e50;;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  font-size: 14px;
`;

const Success = styled.p`
  color: green;
  font-size: 16px;
`;

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !address) {
      setError("All fields are required.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);

    // You can log or send the data here
    console.log({ name, email, address });
  };

  return (
    <Wrapper>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>

        <Label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>

        <Label>
          Address:
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Label>

        {error && <Error>{error}</Error>}
        {submitted && <Success>Form submitted successfully!</Success>}

        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
}
