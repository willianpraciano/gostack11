import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequestDTO {
  provider_id: string;
  month: number;
  year: number;
}

type IRepsonse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
export default class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
  }: IRequestDTO): Promise<IRepsonse> {
    const appointments =
      await this.appointmentsRepository.findAllInMonthFromProvider({
        provider_id,
        year,
        month,
      });

    console.log(appointments);
    return [{ day: 1, available: false }];
  }
}
