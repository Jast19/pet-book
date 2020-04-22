import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageDetailComponent } from "./image-details.component";
import { ActivatedRoute } from '@angular/router';

describe("ImageDetailsComponent", () => {
  let component: ImageDetailComponent;
  //let fixture: ComponentFixture<ImageDetailComponent>;

  let fixture;
  const mockActivatedRoute = {
    snapshot: {
      params: {
        id: '1'
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      declarations: [component],
    });
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    fixture.detectChanges();
  }));

  it('Tries to route to a page', async(() => {
    let testEl = fixture.debugElement.query('#img-container');
    expect(testEl.nativeElement.textContent).toEqual('aMockId');
  }));

});
