import React, {InputHTMLAttributes} from "react";
import styled from "styled-components";
import showPasswordSvg from "../images/show_password.svg";
import hidePasswordSvg from "../images/hide_password.svg";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export const PasswordInput = ({ src, ...rest}: PasswordInputProps) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <div>
            <Input
                type={showPassword ? "text" : "password"}
                {...rest}
            />
            <ShowPassword
                alt={showPassword ? "Hide password" : "Show password"}
                src={showPassword ? hidePasswordSvg : showPasswordSvg}
                onClick={() => setShowPassword(prevState => !prevState)}
            />
        </div>
    )
}

const Input = styled.input`
  display: block;
  flex: 1;
  width: 100%;
  height: 54px;
  padding: 0 20px;

  font-weight: 300;
  font-size: 16px;

  color: var(--white-color);
  background-color: var(--rgba-grey-color);
  border: 1px solid var(--light-grey-color);
  border-radius: 4px;

  &::placeholder {
    color: var(--rgba-white-color);
  }
`

const ShowPassword = styled.img`
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: 21px;
  width: 28px;
  height: 28px;
  object-fit: contain;
  
  transition: filter 0.3s ease-in-out;
  
  &:hover {
    filter: invert(84%) sepia(20%) saturate(1100%) hue-rotate(165deg)
    brightness(88%) contrast(83%);
  }
`