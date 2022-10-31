import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import Input from "./generics/Input";
import Button from "./generics/Button";
import Content from "./Content";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import useActions from "../hooks/useActions";


const Search: React.FC = (): ReactElement => {
    const [input, setInput] = useState("");
    const [size, setSize] = useState(0);

    const dispatch = useDispatch();
    const {searchRepositories} =  useActions(dispatch);

    const listData = useSelector((state: RootState) => state.serachRepositories);

    useEffect(() => {
        console.log(listData);
    }, [listData])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setInput(value);
    }

    const handleSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setSize(parseInt(value));
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setInput("");
        searchRepositories(input, size);
    }

    return <>
        <Input type={"text"} input={input} handleChange={handleChange}/>
        <br/>
        <Input type={"number"} input={size} handleChange={handleSizeChange}/>
        <br/>
        <Button text={"Search"} handleOnClick={handleClick}/>
        <Content text={input} listData={listData.data}/>
    </>
}

export default Search;
