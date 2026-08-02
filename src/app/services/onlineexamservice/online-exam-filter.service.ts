import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../interfaces/ICommon';
import { IClass } from '../../interfaces/IClassmaster';
import { ICollege } from '../../interfaces/ICollege';
import { IExam, IExamListQuery } from '../../interfaces/IExam';
import { SessionResponse } from '../../interfaces/isession';
import { ISubject } from '../../interfaces/ISubjectMst';
import { ExamSetupService } from '../examservice/exam-setup.service';
import { CollegeService } from '../masterservice/college.service';
import { SessionService } from '../masterservice/session.service';
import { SubjectmasterService } from '../masterservice/subjectmaster.service';

@Injectable({
  providedIn: 'root',
})
export class OnlineExamFilterService {
  private readonly sessionService = inject(SessionService);
  private readonly collegeService = inject(CollegeService);
  private readonly subjectService = inject(SubjectmasterService);
  private readonly examSetupService = inject(ExamSetupService);

  getSessions(): Observable<SessionResponse> {
    return this.sessionService.getSessionList();
  }

  getColleges(): Observable<IApiResponse<ICollege>> {
    return this.collegeService.getCollegeList();
  }

  getClasses(sessionId: number, collegeId: number): Observable<IApiResponse<IClass>> {
    return this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId);
  }

  getExams(query: IExamListQuery): Observable<IApiResponse<IExam[] | IExam>> {
    return this.examSetupService.listExams(query);
  }

  getClassSubjects(classId: number): Observable<IApiResponse<ISubject[] | ISubject>> {
    return this.subjectService.listClassSubjects(classId);
  }
}
