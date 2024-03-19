export interface IBoard {
  _id?: string;
  description: string;
  slug?: string;
  title: string;
  type: string;
  ownerIds: string[];
  memberIds: string[];
  columnsOrderIds: string[];
  createdAt: Date;
  updatedAt: Date;
  _destroy: boolean;
}
