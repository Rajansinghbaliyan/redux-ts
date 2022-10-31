import React, {ChangeEvent, ReactElement} from "react";

interface InputProps {
    input: string | number,
    type: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({input,type, handleChange}): ReactElement => {
    return <>
        <input type={type} value={input} onChange={handleChange}/>
    </>
}

export default Input;
