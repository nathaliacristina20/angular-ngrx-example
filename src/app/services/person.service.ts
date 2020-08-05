import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

interface GithubResponse {
  id: number;
  login: string;
  name: string;
}
@Injectable({
  providedIn: "root",
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getUser(user: string): Observable<GithubResponse> {
    return this.http
      .get<GithubResponse>(`https://api.github.com/users/${user}`)
      .pipe(
        map(
          (data: GithubResponse) => data,
          catchError((err) => of(err))
        )
      );
  }
}
