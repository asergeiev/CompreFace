/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingPhotoService {
  constructor(private http: HttpClient) {}

  createImage(url: string): Observable<ImageBitmap> {
    return this.http
      .get(url, { responseType: 'blob' })
      .pipe(switchMap(async (blob: Blob) => (await createImageBitmap(blob)) as ImageBitmap));
  }

  loader(file: File): Observable<ImageBitmap> {
    const url: string = URL.createObjectURL(file);

    return this.createImage(url);
  }
}
