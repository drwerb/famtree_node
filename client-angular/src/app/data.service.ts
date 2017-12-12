import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Member } from './models/Member';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

    private membersUrl = '/api/members';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
  	return this.http.get<Member[]>(this.membersUrl).pipe();
  }

  deleteMember(member: Member): Observable<Member> {
  	let deleteUrl = `${this.membersUrl}/id=${member.id}`;
  	return this.http.delete<Member>(deleteUrl, httpOptions).pipe();
  }

  getMember(id: number): Observable<Member> {
    let getMemberUrl = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(getMemberUrl).pipe();
  }

}
