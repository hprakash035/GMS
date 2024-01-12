using { db   } from '../db/schema';
using {initial_Config_Screen} from '../db/initial_configScreen';
using {gsaInitConfig} from '../db/gsaInitialConfig';
using {gtaInitConfig} from '../db/gtaInitialConfig';
using ZAPI_SALES_CONTRACT_SRV from './external/ZAPI_SALES_CONTRACT_SRV.cds';
using ZGMS_VALUE_HELP_SRV from './external/ZGMS_VALUE_HELP_SRV.cds';
  
service GMSBTP {
 
    entity ServiceCatalogue as projection on db.ServiceCatalogue;
    entity ServiceParameter as projection on initial_Config_Screen.ServiceParameter;
    entity gsaInitialConfiguration as projection on gsaInitConfig.gsaInitialConfiguration;
    entity gtaInitialConfiguration as projection on gtaInitConfig.gtaInitialConfiguration;
     entity A_SalesContract as projection on ZAPI_SALES_CONTRACT_SRV.A_SalesContract
    {        key SalesContract, SalesContractType, SalesOrganization, DistributionChannel, OrganizationDivision, SalesGroup, SalesOffice, SalesDistrict, SoldToParty, CreationDate, CreatedByUser, LastChangeDate, LastChangeDateTime, PurchaseOrderByCustomer, CustomerPurchaseOrderType, CustomerPurchaseOrderDate, SalesContractDate, TotalNetAmount, TransactionCurrency, SDDocumentReason, PricingDate, IncotermsClassification, IncotermsTransferLocation, IncotermsLocation1, IncotermsLocation2, IncotermsVersion, CustomerPaymentTerms, PaymentMethod, SalesContractValidityStartDate, SalesContractValidityEndDate, SalesContractValidityPerdUnit, SalesContractValidityPerdCat, SalesContractSignedDate, NmbrOfSalesContractValdtyPerd, SalesContractFollowUpAction, SlsContractFollowUpActionDate, ContractManualCompletion, ReferenceSDDocument, ReferenceSDDocumentCategory, OverallSDProcessStatus, TotalCreditCheckStatus, OverallSDDocumentRejectionSts     }    
;
    
    entity A_SalesContractItem as projection on ZAPI_SALES_CONTRACT_SRV.A_SalesContractItem
    {        key SalesContract, key SalesContractItem, HigherLevelItem, SalesContractItemCategory, SalesContractItemText, PurchaseOrderByCustomer, Material, MaterialByCustomer, PricingDate, RequestedQuantity, RequestedQuantityUnit, ItemGrossWeight, ItemNetWeight, ItemWeightUnit, ItemVolume, ItemVolumeUnit, OutlineAgreementTargetAmount, TransactionCurrency, NetAmount, MaterialGroup, MaterialPricingGroup, Batch, ProductionPlant, StorageLocation, ShippingPoint, IncotermsClassification, IncotermsTransferLocation, IncotermsLocation1, IncotermsLocation2, CustomerPaymentTerms, SalesDocumentRjcnReason, ItemBillingBlockReason, WBSElement, ProfitCenter, ReferenceSDDocument, ReferenceSDDocumentItem, SDProcessStatus, SalesContractValidityStartDate, SalesContractValidityEndDate, NmbrOfSalesContractValdtyPerd, SalesContractValidityPerdUnit, SalesContractValidityPerdCat, SalesContractSignedDate, SalesContractFollowUpAction, SlsContractFollowUpActionDate, RequirementSegment     }    
;
    
    entity A_SalesContractItemPartner as projection on ZAPI_SALES_CONTRACT_SRV.A_SalesContractItemPartner
    {        key SalesContract, key SalesContractItem, key PartnerFunction, Customer, Supplier, Personnel, ContactPerson     }    
;
    
    entity A_SalesContractItemPrcgElmnt as projection on ZAPI_SALES_CONTRACT_SRV.A_SalesContractItemPrcgElmnt
    {        key SalesContract, key SalesContractItem, key PricingProcedureStep, key PricingProcedureCounter, ConditionType, PricingDateTime, ConditionCalculationType, ConditionBaseValue, ConditionRateValue, ConditionCurrency, ConditionQuantity, ConditionQuantityUnit, ConditionCategory, ConditionIsForStatistics, PricingScaleType, IsRelevantForAccrual, CndnIsRelevantForInvoiceList, ConditionOrigin, IsGroupCondition, ConditionRecord, ConditionSequentialNumber, TaxCode, WithholdingTaxCode, CndnRoundingOffDiffAmount, ConditionAmount, TransactionCurrency, ConditionControl, ConditionInactiveReason, ConditionClass, PrcgProcedureCounterForHeader, FactorForConditionBasisValue, StructureCondition, PeriodFactorForCndnBasisValue, PricingScaleBasis, ConditionScaleBasisValue, ConditionScaleBasisUnit, ConditionScaleBasisCurrency, CndnIsRelevantForIntcoBilling, ConditionIsManuallyChanged, ConditionIsForConfiguration, VariantCondition     }    
;
    
    entity A_SalesContractPartner as projection on ZAPI_SALES_CONTRACT_SRV.A_SalesContractPartner
    {        key SalesContract, key PartnerFunction, Customer, Supplier, Personnel, ContactPerson     }    
;
    
    entity A_SalesContractPrcgElmnt as projection on ZAPI_SALES_CONTRACT_SRV.A_SalesContractPrcgElmnt
    {        key SalesContract, key PricingProcedureStep, key PricingProcedureCounter, ConditionType, PricingDateTime, ConditionCalculationType, ConditionBaseValue, ConditionRateValue, ConditionCurrency, ConditionQuantity, ConditionQuantityUnit, ConditionCategory, ConditionIsForStatistics, PricingScaleType, ConditionOrigin, IsGroupCondition, ConditionRecord, ConditionSequentialNumber, TaxCode, WithholdingTaxCode, CndnRoundingOffDiffAmount, ConditionAmount, TransactionCurrency, ConditionControl, ConditionInactiveReason, ConditionClass, PrcgProcedureCounterForHeader, FactorForConditionBasisValue, StructureCondition, PeriodFactorForCndnBasisValue, PricingScaleBasis, ConditionScaleBasisValue, ConditionScaleBasisUnit, ConditionScaleBasisCurrency, CndnIsRelevantForIntcoBilling, ConditionIsManuallyChanged, ConditionIsForConfiguration, VariantCondition     }    
;
   entity Contract_TypeSet as projection on ZGMS_VALUE_HELP_SRV.Contract_TypeSet
    {        Spras, key Auart, Bezei     }    
;
    
    entity Dist_ChannelSet as projection on ZGMS_VALUE_HELP_SRV.Dist_ChannelSet
    {        key Vtweg     }    
;
    
    entity DivisionSet as projection on ZGMS_VALUE_HELP_SRV.DivisionSet
    {        key Spart     }    
;
    
    entity LocationPointSet as projection on ZGMS_VALUE_HELP_SRV.LocationPointSet
    {        key Locid, Loctyp, Locnam     }    
;
    
    entity MaterialSet as projection on ZGMS_VALUE_HELP_SRV.MaterialSet
    {        key Matnr     }    
;
    
    entity LocationSet as projection on ZGMS_VALUE_HELP_SRV.LocationSet
    {        key Pblnr, Name1     }    
;
    
    entity PlantSet as projection on ZGMS_VALUE_HELP_SRV.PlantSet
    {        Matnr, key Werks     }    
;
    
    entity Sales_ContractSet as projection on ZGMS_VALUE_HELP_SRV.Sales_ContractSet
    {        key Vbeln     }    
;
    
    entity Sales_OrgSet as projection on ZGMS_VALUE_HELP_SRV.Sales_OrgSet
    {        key Vkorg     }    
;
    
    entity Ship_To_PartySet as projection on ZGMS_VALUE_HELP_SRV.Ship_To_PartySet
    {        key Kunnr     }    
;
    
    entity Sold_To_PartySet as projection on ZGMS_VALUE_HELP_SRV.Sold_To_PartySet
    {        key Kunnr     }    
;
    
    entity Storage_LocSet as projection on ZGMS_VALUE_HELP_SRV.Storage_LocSet
    {        key Lgort     }    
;
    
    entity TransportSet as projection on ZGMS_VALUE_HELP_SRV.TransportSet
    {        key Tsyst, Tsnam     }    
;
    
    entity UOMSet as projection on ZGMS_VALUE_HELP_SRV.UOMSet
    {        key Msehi     }    
;  
 
}
 