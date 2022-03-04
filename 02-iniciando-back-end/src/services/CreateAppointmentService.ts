import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {

  //retorno de funçao async é sempre uma Promise
  public async execute({ date, provider_id}: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if(findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    //Cria a instância do Appointment mas não salva no banco de dados
    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    //Salva o Appointiment inicializado no Banco de Dados
    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
