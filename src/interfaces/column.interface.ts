export interface IColumn {
  _id: string;
  boardId: string;
  title: string;
  cardOrderIds: string[];
  createAt: Date;
  updateAt: Date;
  _destroy: boolean;
}
