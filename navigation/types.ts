import {NavigatorScreenParams} from '@react-navigation/native'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends TypeRootStackParamList {}
    }
}

export type TypeRootStackParamList = {
    Home: NavigatorScreenParams<TypeRootTabParamList> | undefined,
    Auth: undefined,
    NotFound: undefined,

}

export type TypeRootTabParamList = {
    Profile: undefined,
    Dialogs: undefined,
    Settings: undefined,
}