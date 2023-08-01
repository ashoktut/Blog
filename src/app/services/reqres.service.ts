import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  private url = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  // returns an Observable, a data stream that will be activated when someone has subscribed to it.
  // There is a library, RxJs, that provides a series of very useful operators to manipulate the flow of data from an Observable before it is sent to subscribers.
  // One of them is the pipe operator, which allows us to pass the data through different operators that are chained together to manipulate the output.
  // Another operator is catchError, which fires when the output of an Observable fails.
  // Using the pipe operator to chain the output through other operators, in this case catchError
  // When the Observable fails, catchError will catch that failure and send the error to the function we define within the operator – in this case, a handleError
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  // function incharge of making the get request to obtain information from a user based on their id
  getUser( id: number ): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

// This method receives two parameters, the operation that failed and optionally a result that will be returned instead of the expected output.
// Working with remote data, our service will be ready to deal with the problems that may arise
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // To do: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  // Update user
  updateUser(user: User): any {
    return this.http.put(this.url, user, this.httpOptions).pipe(
      catchError(this.handleError<User>('updateUser'))
    );
  }

  // Add user
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions).pipe(
      catchError(this.handleError<User>('addUser'))
    );
  }

  // Delete User method in charge of the elimination
  deleteUser(user: User): Observable<User> {
    const url = `${this.url}/${user.id}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      catchError(this.handleError<User>('deleteUser id=${user.id}'))
    );
  }
}
