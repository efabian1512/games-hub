import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlaforms from '../hooks/usePlatforms';
import { Platform } from '../types/types';

interface Props {
    onSelectPlatform: (selectedPlatform: Platform) => void;
    selectedPlatformId?: number;
}
const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data , error } = usePlaforms();

    const platform = usePlatform(selectedPlatformId);
    
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>} >{platform?.name || 'Platforms'}</MenuButton>
            <MenuList>
              {data?.results.map(platform => <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)} 
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;