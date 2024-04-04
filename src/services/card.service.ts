import { Service } from 'typedi'

//constant
import { HTTP_STATUS } from '@/constants'

//exception
import { HttpException } from '@/exceptions/httpException'

//interface
import { ICard } from '@/interfaces'
import { ObjectId } from 'mongodb'
import { GET_DB } from '@/configs'
import { cardModel, columnModel } from '@/models'

@Service()
export class CardService {
  public async getCards(): Promise<ICard[]> {
    try {
      return []
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async getCardsByColumnId(id: string): Promise<ICard[]> {
    try {
      const cards = await GET_DB()
        .collection(cardModel.CARD_COLLECTION_NAME)
        .find({ columnId: new ObjectId(id) })
        .toArray()
      return cards
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async getCard(): Promise<ICard> {
    try {
      return null
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async createCard(data: ICard): Promise<ICard> {
    try {
      const newCard = {
        ...data,
        boardId: new ObjectId(data.boardId),
        columnId: new ObjectId(data.columnId),
        cover: '',
        description: '',
        memberIds: [],
        commentIds: [],
        attackmentsIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        _destroy: false
      }
      const createdCard = await GET_DB().collection(cardModel.CARD_COLLECTION_NAME).insertOne(newCard)
      const card = await GET_DB().collection(cardModel.CARD_COLLECTION_NAME).findOne({ _id: createdCard.insertedId })
      await GET_DB()
        .collection(columnModel.COLUMN_COLLECTION_NAME)
        .findOneAndUpdate({ _id: card.columnId }, { $push: { cardOrderIds: card._id } }, { returnDocument: 'after' })

      return card
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async updateCard(): Promise<ICard> {
    try {
      return null
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async deleteCard(): Promise<any> {
    try {
      return null
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }
}
