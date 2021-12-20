import Config from "react-native-config";
import betaConfig from './beta.config';
import devConfig from './dev.config';

const Configs = {
    'beta' : betaConfig,
    'dev' : devConfig,
}

const configApp = Configs[Config.APP_NAME];
export default configApp;


