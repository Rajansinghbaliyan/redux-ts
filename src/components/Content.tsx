import React, {ReactElement} from "react";

interface ContentProps{
    text: string;
    listData: string[];
}


const Content: React.FC<ContentProps> = ({text,listData}): ReactElement => {
    return <>
        <h3>{`Result for ${text} :`}</h3>
        <ul>
            {listData.map(d => <li key={d}>{d}</li>)}
        </ul>
    </>
}


export default Content;
