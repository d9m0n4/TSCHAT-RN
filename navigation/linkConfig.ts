import {LinkingOptions} from "@react-navigation/native";
import {TypeRootStackParamList} from "./types";

export const linking: LinkingOptions<TypeRootStackParamList> = {
    prefixes: ['/'],
    config: {
        initialRouteName: 'Home', // button prev on screen
        screens: {
            Home: {
                path: '/',
                screens: {
                    Dialogs: {

                        screens: {
                            DialogsScreen: 'dialogs',
                        }
                    },
                    Profile:{
                        screens: {
                            ProfileScreen: 'profile'
                        }
                    },
                    Settings: {
                        screens: {
                            SettingsScreen: 'settings'
                        }
                    }
                }
            },
            Auth: {
                screens: {
                    AuthScreen: 'auth'
                }
            },
            NotFound: '*'
        }
    }
}