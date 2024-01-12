import { Routes } from '@angular/router';
import { UserListComponent } from './users/feature/user-list/user-list.component';
import { SavedListComponent } from './saved/feature/saved-list/saved-list.component';

export const routes: Routes = [{ path: '', component: UserListComponent},
  { path: 'saved', component: SavedListComponent}
];
