import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {

  constructor(
    private readonly router: Router,
  ) {
    this.verifyUser().then();
    this.routeSubscription = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {

        if (!this.routesWithoutNavbar.includes(route.url)) {
          if (!this.routesWithoutNavbar.includes(route.urlAfterRedirects))
            return this.canShowNavbar = true;
        } else {
          this.canShowNavbar = false;
        }
      });
  }

  public canShowNavbar: boolean = false;

  public routesWithoutNavbar: string[] = ['/login', '/new-feed-occurrence/0', '/new-feed-occurrence/1', '/new-feed-occurrence/2', '/register'];

  public routeSubscription: Subscription;

  public async ngOnDestroy(): Promise<void> {
    this.routeSubscription.unsubscribe();
  }

  public async verifyUser(): Promise<void> {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if (!loggedUser) {
      return void await this.router.navigateByUrl('/login');
    }
  }
}
