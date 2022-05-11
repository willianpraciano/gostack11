import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointments', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointments = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    const appointment = await createAppointments.execute({
      date: new Date(),
      provider_id: '123234546',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123234546');
  });

  it('not should be able to create two appointment on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointments = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2022, 4, 10, 11);

    await createAppointments.execute({
      date: appointmentDate,
      provider_id: '123234546',
    });

    expect(
      createAppointments.execute({
        date: appointmentDate,
        provider_id: '123234546',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
