import { User } from './user.model';
import { Account } from './account.model';
import { Profile } from './profile.model';

export class FullUser {
    user: User;
    profile: Profile;
    account: Account;
}
