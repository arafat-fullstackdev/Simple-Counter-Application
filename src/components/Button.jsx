// eslint-disable-next-line react/prop-types
import { Button as ReactstrapButton } from "reactstrap";

export default function Button({ children, type, handler }) {
    const color =
        type === "danger" ? "danger" : "primary";
  

    return(
        <ReactstrapButton color={color} onClick={handler}>
            {children}
        </ReactstrapButton>
    );
} 

