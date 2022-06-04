import { injectable, inject } from 'tsyringe';
import { getDate, getDaysInMonth } from 'date-fns';

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

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));

    const eachDayArray = Array.from(
      {
        length: numberOfDaysInMonth,
      },
      (_, index) => index + 1,
    );

    const availability = eachDayArray.map(day => {
      const appointmentsInDay = appointments.filter(appointment => {
        return getDate(appointment.date) === day;
      });

      /**
       * Como os agendamentos são das 8 ás 17h, então só pode haver no máximo 10.
       *
       * Se tiver menos de 10 agendamentos, quer dizer que há ao menos um
       * horário disponível.
       *
       */
      return {
        day,
        available: appointmentsInDay.length < 10,
      };
    });

    return availability;
  }
}
