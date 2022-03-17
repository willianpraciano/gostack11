import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppoitmentsRepository {
  //create(): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
