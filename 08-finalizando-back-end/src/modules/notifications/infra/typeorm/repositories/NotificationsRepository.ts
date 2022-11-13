import { MongoRepository } from 'typeorm';

import { mongoDataSource } from '@shared/infra/typeorm';
import { INotificationsRepository } from '@modules/notifications/repositories/INotificationsRepository';
import { ICreateNotificationDTO } from '@modules/notifications/dtos/ICreateNotificationDTO';

import { Notification } from '../schemas/Notification';

export class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = mongoDataSource.getMongoRepository(Notification);
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      content,
      recipient_id,
    });

    await this.ormRepository.save(notification);

    return notification;
  }
}
