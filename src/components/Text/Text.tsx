import React, {useContext} from 'react';
import {StyleContext} from "../../providers/StyleProvider" ;

type TextProps = {
    content: string;
}
export const Text: React.FC<TextProps> = ({content}) => {
    
    const bgcolor = "pink";
    const {color: fgcolor} = useContext(StyleContext);


    return (
        <>
           <p style={{color: fgcolor, backgroundColor: bgcolor }}> {content} </p>
       </>
    );
}
export default Text;