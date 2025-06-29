import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [text, setText] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", text)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col  border-2 h-1/3 w-1/4 items-center rounded-lg">
        <h2 className="pt-6 font-bold text-2xl tracking-tighter">Login Page</h2>
        <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email">
              <strong>Email: </strong>
            </label>
            <Input
              type="email"
              name="email"
              kk
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setText({ ...text, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              <strong>Password: </strong>
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setText({ ...text, password: e.target.value })}
            />
          </div>
          <Button className="border">submit</Button>
          <div className="text-sm font-medium flex gap-2 items-center">
            <Checkbox id="tick" />
            <label htmlFor="password">Agree with terms and conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
