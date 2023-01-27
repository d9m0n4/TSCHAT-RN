import {AntDesign, } from '@expo/vector-icons'
import {FC} from "react";

interface ITabBarIcon {
    name: keyof typeof AntDesign.glyphMap,
    color?: string
}

const TabBarIcon:FC<ITabBarIcon> = ({name, color='#828282'}) => {
    return (
        <AntDesign size={24} name={name} color={color}/>
    );
};

export default TabBarIcon;
