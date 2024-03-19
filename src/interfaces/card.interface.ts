export interface IAttackment {
  _id: string;
  fileName: string;
  fileType: string;
  fileURL: string;
  createAt: Date;
}

export interface ICard {
  _id?: string;
  boardId: string;
  columnId: string;
  title: string;
  cover: string;
  description: string;
  memberIds: string[];
  commentIds: string[];
  attackmentsIds: IAttackment[];
  createAt: Date;
  updateAt: Date;
  _destroy: boolean;
}
