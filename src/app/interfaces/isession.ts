<<<<<<< HEAD
export interface ISession {
    sessionId: number;
    sessionName: string;
    description: string;
    yearFrom: string;
    yearTo: string;
}

export interface SessionResponse {
    success: boolean;
    message: string;
    data: ISession[];
    totalRecord: number;
}
=======
export * from '../pages/admin/interfaces/isession';
>>>>>>> d232b93b353da02f32dddfd9ba4ee96f6b41d576
