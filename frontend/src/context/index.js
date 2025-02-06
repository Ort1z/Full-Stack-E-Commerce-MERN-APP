import { createContext } from "react";

/**
 * Creates a Context object with a default value of null.
 * This Context object can be used to share data across the component tree
 * without having to pass props down manually at every level.
 * 
 * @type {React.Context<null>}
 */
const Context = createContext(null)

export default Context