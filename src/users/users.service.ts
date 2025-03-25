import { Injectable } from '@nestjs/common';

@Injectable()

export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            number: '1234567890',
        },
        {
            id: 2,
            name: 'Jane Doe',
            number: '9876543210',
        }
    ]
    getUsers() {
        return this.users;
    }
}
