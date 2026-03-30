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
