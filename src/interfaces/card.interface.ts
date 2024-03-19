export interface IAttackment {
  _id: string;
  fileName: string;
  fileType: string;
  fileURL: string;
  createdAt: Date;
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
  createdAt: Date;
  updatedAt: Date;
  _destroy: boolean;
}
