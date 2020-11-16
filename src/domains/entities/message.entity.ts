export class MessageEntity {
  constructor(private readonly _text: string) {}

  static of(text: string) {
    return new MessageEntity(text);
  }

  get text(): string {
    return this._text;
  }
}
