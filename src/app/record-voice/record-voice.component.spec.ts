import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordVoiceComponent } from './record-voice.component';

describe('RecordVoiceComponent', () => {
  let component: RecordVoiceComponent;
  let fixture: ComponentFixture<RecordVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordVoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
