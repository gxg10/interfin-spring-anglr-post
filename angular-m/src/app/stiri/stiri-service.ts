import { Stire } from "../home/home.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const stiriUrl = 'http://localhost:8080/stiri';


export class StiriService {

    private stiri: Stire[] = [];

    constructor(private http: HttpClient) {}

    getStireById(id: number): Observable<any> {
        return this.http.get(`${stiriUrl}${id}`);
    }

}
