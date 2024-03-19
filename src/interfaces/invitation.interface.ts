export interface IIvitation {
  _id?: string;
  inviterId: string;
  inviteeId: string;
  type: string;
  boardInvitation: any;
  createAt: Date;
  updateAt: Date;
  _destroy: boolean;
}
