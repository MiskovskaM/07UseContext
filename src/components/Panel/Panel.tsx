import React, {PropsWithChildren} from 'react';

type PanelProps = {
}

export const Panel: React.FC<PropsWithChildren<PanelProps>> = ({children}) => {

    return (
       <div> {children} </div>
    );
}
export default Panel;