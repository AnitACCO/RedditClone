import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditCreateComponent } from './subreddit-create.component';

describe('SubredditCreateComponent', () => {
  let component: SubredditCreateComponent;
  let fixture: ComponentFixture<SubredditCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubredditCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubredditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
