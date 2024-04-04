import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
@Injectable()
export class ManipulateApiService {
  constructor(private httpService: HttpService) {}

  fetchData(results: number, page: number) {
    const url = `https://randomuser.me/api?results=${results}&page=${page}`;

    return this.httpService.get(url).pipe(
      map((response: any) => {
        const results = response.data.results.map((user) => ({
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
          email: user.email,
          age: user.dob.age,
          phone: user.phone,
          cell: user.cell,
          picture: [
            user.picture.large,
            user.picture.medium,
            user.picture.thumbnail,
          ],
        }));

        return results;
      }),
    );
  }
}
