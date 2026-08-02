import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { masterApiEndpoint } from '@core/constants/master_api_endpoint';
import { IExpenseHead } from '../../interfaces/IAdmintMst';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../interfaces/ICommon';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private http = inject(HttpClient);
  private endpoint = masterApiEndpoint;

  addExpense(body:IExpenseHead):Observable<IApiResponse<IExpenseHead>>{
    return this.http.post<IApiResponse<IExpenseHead>>(this.endpoint.expensehead.add,body);
  }
  updateExpense(body:IExpenseHead):Observable<IApiResponse<IExpenseHead>>{
    return this.http.post<IApiResponse<IExpenseHead>>(this.endpoint.expensehead.update, body);
  }
   deleteExpense(Id:Number):Observable<IApiResponse<IExpenseHead>>{
   return this.http.post<IApiResponse<IExpenseHead>>(this.endpoint.expensehead.delete + Id, null); 
  }
  listExpense():Observable<IApiResponse<IExpenseHead | IExpenseHead[]>>{
    return this.http.get<IApiResponse<IExpenseHead | IExpenseHead[]>>(this.endpoint.expensehead.list);
  }
  
}
