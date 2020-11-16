type ChatId = string;

export class ChatEntity {
  constructor(private readonly _id: ChatId) {}

  public get id(): string {
    return this._id;
  }
}
