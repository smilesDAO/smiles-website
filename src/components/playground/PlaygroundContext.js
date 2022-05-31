// Following this example:
// => https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm
import React from 'react'

export const PlaygroundContext = React.createContext(null)

export default ({ children }) => {
  const [myVar, setMyVar] = React.useState(false);

  const store = {
    myVar: [myVar, setMyVar],
  };

  return <PlaygroundContext.Provider value={store}>{children}</PlaygroundContext.Provider>
}
