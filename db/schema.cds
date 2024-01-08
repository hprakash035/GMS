namespace db;
 
entity ServiceCatalogue {
    key id : String(100);
    ServiceParameter : String(100) not null;
}