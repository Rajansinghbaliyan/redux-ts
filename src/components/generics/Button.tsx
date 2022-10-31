import React, {ReactElement} from "react";

interface ButtonProps{
    text: string;
    handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({text,handleOnClick}): ReactElement => {
    return <button onClick={handleOnClick}>{text}</button>
}

export default Button;
