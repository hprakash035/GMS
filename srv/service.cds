using { db   } from '../db/schema';
using {initial_Config_Screen} from '../db/initial_configScreen';
using {gsaInitConfig} from '../db/gsaInitialConfig';
using {gtaInitConfig} from '../db/gtaInitialConfig';
  
service GMSBTP {
 
    entity ServiceCatalogue as projection on db.ServiceCatalogue;
    entity ServiceParameter as projection on initial_Config_Screen.ServiceParameter;
    entity gsaInitialConfiguration as projection on gsaInitConfig.gsaInitialConfiguration;
    entity gtaInitialConfiguration as projection on gtaInitConfig.gtaInitialConfiguration;
    
 
}
 