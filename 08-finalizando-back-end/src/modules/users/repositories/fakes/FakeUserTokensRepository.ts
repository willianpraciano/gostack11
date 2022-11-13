import { v4 as uuid } from 'uuid';

import { IUserTokensRepository } from '@modules/users/repositories/IUserTokensRepository';

import { UserToken } from '../../infra/typeorm/entities/UserToken';

export class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await this.userTokens.find(
      findToken => findToken.token === token,
    );

    return userToken || null;
  }
}
