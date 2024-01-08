using ZGMS_VALUE_HELP_SRV from './external/ZGMS_VALUE_HELP_SRV.cds';

service ZGMS_VALUE_HELP_SRVSampleService {
   
    entity Contract_TypeSet as projection on ZGMS_VALUE_HELP_SRV.Contract_TypeSet
    {        Spras, key Auart, Bezei     }    
;
   
    entity Dist_ChannelSet as projection on ZGMS_VALUE_HELP_SRV.Dist_ChannelSet
    {        key Vtweg     }    
;
   
    entity DivisionSet as projection on ZGMS_VALUE_HELP_SRV.DivisionSet
    {        key Spart     }    
;
   
    entity LocationSet as projection on ZGMS_VALUE_HELP_SRV.LocationSet
    {        key Pblnr, Name1     }    
;
   
    entity MaterialSet as projection on ZGMS_VALUE_HELP_SRV.MaterialSet
    {        key Matnr     }    
;
   
    entity PlantSet as projection on ZGMS_VALUE_HELP_SRV.PlantSet
    {        Matnr, key Werks     }    
;
   
    entity UOMSet as projection on ZGMS_VALUE_HELP_SRV.UOMSet
    {        key Msehi     }    
;
   
    entity TransportSet as projection on ZGMS_VALUE_HELP_SRV.TransportSet
    {        key Tsyst, Tsnam     }    
;
   
    entity Storage_LocSet as projection on ZGMS_VALUE_HELP_SRV.Storage_LocSet
    {        key Lgort     }    
;
   
    entity Sold_To_PartySet as projection on ZGMS_VALUE_HELP_SRV.Sold_To_PartySet
    {        key Kunnr     }    
;
   
    entity Ship_To_PartySet as projection on ZGMS_VALUE_HELP_SRV.Ship_To_PartySet
    {        key Kunnr     }    
;
   
    entity Sales_OrgSet as projection on ZGMS_VALUE_HELP_SRV.Sales_OrgSet
    {        key Vkorg     }    
;
   
    entity Sales_ContractSet as projection on ZGMS_VALUE_HELP_SRV.Sales_ContractSet
    {        key Vbeln     }    
;
}