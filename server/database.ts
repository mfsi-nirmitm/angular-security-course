
import * as _ from 'lodash';
import {LESSONS} from "./database-data";
import { dbUser } from './db-user';
import { USERS } from './database-data';


class InMemoryDatabase {

    userCounter = 0;

    readAllLessons() {
        return _.values(LESSONS);
    }

    createUser(email:string, password:string) {

        this.userCounter++;

        const id = this.userCounter;

        const user: dbUser = {
            id,
            email,
            password
        };

        USERS[id] = user;

        return user;
    }

}

export const db = new InMemoryDatabase();