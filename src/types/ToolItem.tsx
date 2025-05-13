export interface ToolItem {
  id: string
  title: string
  description: string[]
  icon?: React.ReactNode
  route: string
  tags?: string[]
}