declare namespace APIDcCompanySelect {
  interface CompanyItem {
    oaId: number
    isHaveOA: boolean
    oaName: null
    organizationRelationshipId: string
    groupName: string
    organizationCategoryName: string
    organizationCategorySort: number
    positionId: string
    relationshipList: RelationshipItem[]
    orgUserList: any[]
    relationshipOrganizationCategoryCodes: string[]
    isNeedUpdateCode: boolean
    currentAreaRelationId: string
    currentAreaId: string
    currentAreaCode: string
    currentAreaName: string
    currentAreaOAId: number
    currentAreaRsipCode: string
    regionalCompanyId: string
    regionalCompanyRShipId: string
    regionalCompanyName: string
    regionalCompanyCode: string
    regionalCompanyRShipCode: string
    isCommonlyUsed: boolean
    id: string
    organizationId: string
    groupId: string
    organizationCategoryId: string
    code: string
    name: string
    remark: string
    level: number
    sort: number
    isUsing: boolean
    parentOrganizationId: null | string
    parentCode: string
    parentName: string
    parentOrganizationRelationshipId: null | string
    bankName: null
    bankAccount: null
    relationShipCode: string
  }
  interface RelationshipItem {
    organizationCategoryCode: string
    organizationName: string
    parentOrganizationName: string
    parentOrganizationRelationshipId: string
    organizationCategoryName: string
    id: string
    organizationRelationshipId: string
    organizationId: string
    organizationCategoryId: string
  }
}
