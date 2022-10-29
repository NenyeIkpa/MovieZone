// import { createContext, useState } from "react";

// const [unicornTypes, setUnicornTypes] = useState(undefined);

// ReferenceDataContext = createContext({ unicornTypes, setUnicornTypes });

// const ReferenceDataContextProvider = ({ children }) => {
//   return (
//     <ReferenceDataContext.Provider value={{ unicornTypes, setUnicornTypes }}>
//       {...children}
//     </ReferenceDataContext.Provider>
//   );
// };

// export { ReferenceDataContext, ReferenceDataContextProvider };

import { createContext, useState } from 'react';

const MovieDataContext = createContext();

const MovieDataContextProvider = ({ children }) => {
    const[movieList, setMovieList] = useState("");
    return (
        <MovieDataContext.Provider value={{ movieList, setMovieList}}>
            {children}
        </MovieDataContext.Provider>
    )
}

export { MovieDataContext, MovieDataContextProvider};