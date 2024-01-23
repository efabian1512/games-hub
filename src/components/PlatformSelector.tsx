import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlaforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';


const PlatformSelector = () => {
    const {data , error } = usePlaforms();

     const { setPlatformId, platformId } = useGameQueryStore(s => ({setPlatformId: s.setPlatformId, platformId: s.gameQuery.platformId}));
    const platform = usePlatform(platformId);
   
    
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>} >{platform?.name || 'Platforms'}</MenuButton>
            <MenuList>
              {data?.results.map(platform => <MenuItem onClick={()=> setPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)} 
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;