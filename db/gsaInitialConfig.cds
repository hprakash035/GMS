namespace gsaInitConfig;

entity gsaInitialConfiguration{
   key  ServiceParameter_ID : String(100);
    Service_Parameters : String(100) not null ;
    Initial_page: Boolean;
    Item_page:Boolean;
}

