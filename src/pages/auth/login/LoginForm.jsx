import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updateUser,
  updateToken,
  authenticate,
} from "../../../store/authSlice";
import CountryDropdown from "../../../components/ui/CountryDropdown";
import InputField3 from "../../../components/ui/InputField3";
import PasswordInput from "../../../components/ui/PasswordInput";
import GlobalButton from "../../../components/ui/GlobalButton";
import WebAppService from "../../../services/WebAppService";
import RandoLogo from "../../../svgs/RandoLogo";
import { validatePasswords } from "../../../utils/validation";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Perform validation as user types
    if (name === "confirm_password") {
      const errorMessage = validatePasswords(
        formData.password,
        value,
        setErrors
      );
      if (errorMessage === "") {
        setSuccessMessage("Passwords match!");
      } else {
        setSuccessMessage("");
      }
    } else {
      setErrors({ ...errors, [name]: "" });
      setSuccessMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const loginResponse = await WebAppService.login(formData);
      const { data } = loginResponse;

      dispatch(
        updateUser({
          email: data.email,
          username: data.username,
          role: data.role,
          created_at: data.created_at,
          updated_at: data.updated_at,
          id: data.id,
          isNew: true,
        })
      );
      dispatch(updateToken(data.token));
      localStorage.setItem("authToken", data.token);
      dispatch(authenticate());

      setFormData({
        username: "",
        password: "",
      });

      // Navigate to dashboard or desired route after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // Handle error state or display error message to user
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full px-[20px] sm:px-[40px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
      <div className="w-full flex flex-col items-center justify-start md:justify-center">
        <div className="hidden lg:block text-white-2 absolute top-[5%] lg:top-[10%] right-[40px] md:right-[50px] lg:right-[90px] xl:right-[120px]">
          <CountryDropdown />
        </div>

        <div className="px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px] absolute top-[5%] flex lg:hidden flex-row items-center w-full justify-between">
          <Link className="text-white-1 w-[100px] md:w-[150px]" to={"/"}>
            <RandoLogo />
          </Link>

          <div className="text-white-2 ">
            <CountryDropdown />
          </div>
        </div>

        <div className="w-full h-full text-white-1 flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-1 md:gap-2">
            <h3 className="text-2xl md:text-4xl font-medium">Welcome</h3>
            <p className="text-lg lg:text-2xl font-light">
              Sign in to your Rando account
            </p>
          </div>
          <div>
            <form
              className="w-full flex flex-col gap-4 md:gap-8"
              onSubmit={handleSubmit}
            >
              <InputField3
                placeholder="Input username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <PasswordInput
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="mt-4">
                <GlobalButton
                  className={`flex items-center justify-center`}
                  type="submit"
                  variant="secondary"
                  state={isSubmitting ? "loading" : "default"}
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </GlobalButton>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 mt-[24px] md:mt-[44px]">
            <p className="text-lg lg:text-2xl font-light">
              Don’t have an account?{" "}
              <Link to="/auth/signup" className="text-teal-1">
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Links for terms, privacy policy, data agreement */}
        <div className="text-white-1 flex flex-row gap-3 absolute bottom-[5%] md:bottom-[4%] font-light">
          <Link className="font-light text-sm hover:text-teal-1 underline-offset-2 hover:underline">
            Terms of use
          </Link>
          <Link className="font-light text-sm hover:text-teal-1 underline-offset-2 hover:underline">
            Privacy policy
          </Link>
          <Link className="font-light text-sm hover:text-teal-1 underline-offset-2 hover:underline">
            Data agreement
          </Link>
        </div>
      </div>
    </div>
  );
};
