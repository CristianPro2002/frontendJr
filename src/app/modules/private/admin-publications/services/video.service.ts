import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generalEnvironments } from 'src/assets/environments/general-environments';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private worships  = generalEnvironments.API.MultimediaApi.worships;

  constructor(private http: HttpClient) { }

  registerVideo(data: any):Observable<any> {
    const body = {
      title: data.title,
      description: data.description,
      url: data.url
    }

    return this.http.post(`${this.worships}`, body)
  }

  getVideos():Observable<any> {
    return this.http.get(`${this.worships}`)
  }

  deleteVideo(id: number):Observable<any> {
    return this.http.delete(`${this.worships}${id}`)
  }

  editVideo(data: any):Observable<any> {
    const body = {
      title: data.title,
      description: data.description,
      url: data.url
    }

    return this.http.put(`${this.worships}${data.id}`, body)
  }
}
