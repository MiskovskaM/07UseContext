import React, {useContext} from 'react';
import { StyleContext } from '../../providers/StyleProvider';

type HeadingProps = {
    content: string;
}
export const Heading: React.FC<HeadingProps> = ({content}) => {
     const {color: fgcolor} = useContext(StyleContext);
    return (
       <h1 style={{color: fgcolor}}> {content} </h1>
    );
}
export default Heading;