import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { UpdateUserAvatarService } from '@modules/users/services/UpdateUserAvatarService';

type File = Express.Multer.File;

export class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const file = request?.file as File;

    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id,
      avatarFilename: file.filename,
    });

    return response.json(instanceToInstance(user));
  }
}
