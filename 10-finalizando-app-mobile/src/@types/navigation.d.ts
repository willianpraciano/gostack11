export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [pageName: string]: undefined;
      CreateAppointment: { providerId: string };
      AppointmentCreated: { date: number };
    }
  }
}
