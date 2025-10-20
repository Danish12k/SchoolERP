import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiEndpoint } from '@core/constants/apiendpoint';
import { IExpenseHead } from '../interfaces/IAdmintMst';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/ICommon';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private http = inject(HttpClient);
  private endpoint = apiEndpoint;

  addExpense(body:IExpenseHead):Observable<IApiResponse<IExpenseHead>>{
    return this.http.post<IApiResponse<IExpenseHead>>(this.endpoint.expensehead.add,body);
  }
  updateExpense(body:IExpenseHead):Observable<IApiResponse<IExpenseHead>>{
    return this.http.post<IApiResponse<IExpenseHead>>(this.endpoint.expensehead.update, body);
  }
   deleteExpense(Id:Number):Observable<IApiResponse<IExpenseHead>>{
   return this.http.post<IApiResponse<IExpenseHead>>(this.endpoint.expensehead.delete + Id, null); 
  }
  listExpense():Observable<IApiResponse<IExpenseHead>>{
    return this.http.get<IApiResponse<IExpenseHead>>(this.endpoint.expensehead.list);
  }
  
}
