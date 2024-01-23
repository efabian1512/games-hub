import { HStack, Image,Box, useOutsideClick } from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from "react";



const NavBar = () => {
    const ref = useRef<HTMLImageElement>(null);
    const navigate = useNavigate();

    return(
       <HStack padding='10px'>
           <img width='60px' height='60px' style={{cursor: 'pointer'}} src={logo} onClick={()=> navigate('/')}/>
           <SearchInput/>
           <ColorModeSwitch/>
       </HStack> 
    )
}

export default NavBar;