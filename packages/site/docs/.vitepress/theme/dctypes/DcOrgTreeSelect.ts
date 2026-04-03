declare namespace DcOrgTreeSelect {
  interface DcOrgTreeSelectOrgItem {
    id: string | null
    mark: string | null
    text: string | null
    parentid: string | null
    sort: string | null
    leaf: boolean
    url: string | null
    qtip: string | null
    expanded: boolean
    iconCls: string
    checked: string | null
    unorderevalue: string | null
    unorderevaluelist: string[] | null
    AttachData: DcOrgTreeSelectOrgItemAttachData | null | {}
    children: DcOrgTreeSelectOrgItem[]
  }

  interface DcOrgTreeSelectOrgItemAttachData {
    OAId: number
    IsHaveOA: boolean
    OAName: object
    OrganizationRelationshipId: string
    GroupName: string
    OrganizationCategoryName: string
    OrganizationCategorySort: number
    PositionId: string
    RelationshipList: {
      OrganizationCategoryCode: string
      OrganizationName: string
      ParentOrganizationName: string
      ParentOrganizationRelationshipId: string
      OrganizationCategoryName: string
      Id: string
      OrganizationRelationshipId: string
      OrganizationId: string
      OrganizationCategoryId: string
    }[]
    OrgUserList: undefined[]
    RelationshipOrganizationCategoryCodes: string[]
    IsNeedUpdateCode: boolean
    CurrentAreaRelationId: string
    CurrentAreaId: string
    CurrentAreaCode: string
    CurrentAreaName: string
    CurrentAreaOAId: number
    CurrentAreaRsipCode: string
    RegionalCompanyId: string
    RegionalCompanyRShipId: string
    RegionalCompanyName: string
    RegionalCompanyCode: string
    RegionalCompanyRShipCode: string
    IsCommonlyUsed: boolean
    Id: string
    OrganizationId: string
    GroupId: string
    OrganizationCategoryId: string
    Code: string
    Name: string
    Remark: string
    Level: number
    Sort: number
    IsUsing: boolean
    ParentOrganizationId: object
    ParentCode: string
    ParentName: string
    ParentOrganizationRelationshipId: object
    BankName: object
    BankAccount: object
    RelationShipCode: string
  }
}
