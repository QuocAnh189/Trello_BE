export interface IBoard {
  _id?: string;
  description: string;
  title: string;
  type: string;
  ownerIds: string[];
  memberIds: string[];
  columnsOrderIds: string[];
  createAt: Date;
  updateAt: Date;
  _destroy: boolean;
}
