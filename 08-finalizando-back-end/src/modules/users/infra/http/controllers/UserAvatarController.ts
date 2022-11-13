import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { UpdateUserAvatarService } from '@modules/users/services/UpdateUserAvatarService';

export class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      //@ts-ignore
      avatarFilename: request.file.filename,
    });

    return response.json(instanceToInstance(user));
  }
}
