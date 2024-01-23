import { HStack, Image,Box } from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from 'react-router-dom';



const NavBar = () => {
    const navigate = useNavigate();
   
    return(
       <HStack padding='10px'>
           <Link to='/'>
               <Image src={logo} boxSize="60px" objectFit='cover'/>
            </Link>
           <SearchInput/>
           <ColorModeSwitch/>
       </HStack> 
    )
}

export default NavBar;