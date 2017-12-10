import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes : Routes = [
	{ path: 'members', component: FamilyMembersComponent },
	{ path: 'member/:id', component: MemberDetailsComponent }
];

@NgModule({
  exports: [
  	RouterModule
  ],
  imports: [
  	RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
