export interface CompetitionFormBlock {
  fieldGroupName: string
  gravityForm: number
}

export const competitionFormBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_CompetitionForm {
    fieldGroupName
    gravityForm
  }`
}
