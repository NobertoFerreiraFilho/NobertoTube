import React from "react";
import { StyledSearch } from "./search-styles";

 const Search = ({ valorDoFiltro, setValorDoFiltro }) => {

    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;

    return (
        <StyledSearch>
            <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
            <button>
                🔎
            </button>
        </StyledSearch>
    )
};

export default Search;