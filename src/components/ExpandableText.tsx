import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
    max?: number;
}

const ExpandableText = ({children, max= 300}: Props) => {
    const [isExpanded, setExpanded] = useState(false);

    if (children.length <= max ) return <Text>{children}</Text>

    if (!children) return null;
    
    return (
        <>
         <Text>
             {isExpanded ? children : children.substring(0, max) + '...'}
             <Button fontWeight="bold" size="xs" marginX={2} colorScheme='yellow' onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Show Less' : 'Show More'}</Button>
         </Text>
         
        </>
       
    )
}

export default ExpandableText;