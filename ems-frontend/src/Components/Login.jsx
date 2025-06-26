import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col  border-2 h-1/3 w-1/4 items-center rounded-lg">
        <h2 className="pt-6 font-bold">Login Page</h2>
        <form className="flex flex-col gap-4 mt-10">
          <div className="flex flex-col">
            <label htmlFor="email">
              <strong>Email: </strong>
            </label>
            <Input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
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
            />
          </div>
          <Button className="border">submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
