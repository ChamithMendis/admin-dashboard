import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  notifications: Array<Object> = [];
  noOfNotifications: number | null = null;

  public onNotificationIconClick(): void {
    this.onNotificationReceive();
  }

  public onNotificationReceive(): void {
    this.notifications.push({
      message: 'This is a notification',
    });

    this.noOfNotifications = this.notifications.length;
  }
}
