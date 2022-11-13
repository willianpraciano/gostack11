import { Repository } from 'typeorm';

import { postgresDataSource } from '@shared/infra/typeorm';
import { IUserTokensRepository } from '@modules/users/repositories/IUserTokensRepository';

import { UserToken } from '../entities/UserToken';

export class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = postgresDataSource.getRepository(UserToken);
  }

  public async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await this.ormRepository.findOneBy({ token });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}
