export interface IComment {
  _id: string
  boardId: string
  title: string
  cardOrderIds: string[]
  createdAt: Date
  updatedAt: Date
  _destroy: boolean
}
