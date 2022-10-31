import React, {ChangeEvent, ReactElement, useState} from "react";
import Input from "./generics/Input";
import Button from "./generics/Button";

const Search:React.FC = () : ReactElement => {
    const [input, setInput] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setInput(value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setInput("");
    }

    return <>
    <Input input={input} handleChange={handleChange}/>
        <Button text={"Search"} handleOnClick={handleClick}/>
    </>
}

export default Search;
