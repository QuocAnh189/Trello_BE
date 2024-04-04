export interface IInvitation {
  _id?: string
  inviterId: string
  inviteeId: string
  type: string
  boardInvitation: any
  createdAt: Date
  updatedAt: Date
  _destroy: boolean
}
