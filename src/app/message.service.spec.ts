import { inject } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

// fdescribe('MessageService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: MessageService = TestBed.get(MessageService);
//     expect(service).toBeTruthy();
//   });
// });

describe("MessageService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [MessageService] })
  );

  it("should be created", inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it("should add message", inject([MessageService], (service: MessageService) => {
    service.add('hero');
    expect(service.messages).toEqual(['hero']);
  }));

  it("should clear messages", inject([MessageService], (service: MessageService) => {
    service.messages = ['hero'];
    service.clear();
    expect(service.messages).toEqual([]);
  }));
});