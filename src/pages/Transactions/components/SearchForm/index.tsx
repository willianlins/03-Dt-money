import { MagnifyingGlass } from "phosphor-react";
import { SerachFormContainer } from "./style";

export function SearchForm(){
  return(
   <SerachFormContainer>
    <input type="text" placeholder="Buscar por transações" />

    <button type="submit">
      <MagnifyingGlass size={20}/>
      Buscar
    </button>
   </SerachFormContainer>
  )
}
