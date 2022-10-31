import React, {ChangeEvent, ReactElement} from "react";

interface InputProps {
    input: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({input, handleChange}): ReactElement => {
    return <>
        <input type={"text"} value={input} onChange={handleChange}/>
    </>
}

export default Input;
