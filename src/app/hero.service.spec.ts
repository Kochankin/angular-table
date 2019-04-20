import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { HeroService } from "./hero.service";

fdescribe("HeroService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    })
  );

  it("should be created", inject(
    [HeroService, HttpTestingController],
    (service: HeroService, backend: HttpTestingController) => {
      expect(service).toBeTruthy();
    }
  ));

  it("should be created", inject(
    [HeroService, HttpTestingController],
    (service: HeroService, backend: HttpTestingController) => {
      const mockHeroes = [
        { id: 11, name: "Mr. Nice" },
        { id: 12, name: "Narco" }
      ];
      expect(service).toBeTruthy();
      service
        .getHeroes()
        .subscribe(heroes => expect(heroes).toEqual(mockHeroes));

      backend.expectOne({ method: "GET", url: "api/heroes" }).flush(mockHeroes);
    }
  ));
});
