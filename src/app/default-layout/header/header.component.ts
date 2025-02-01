import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  notifications: Array<NotificationI> = [];
  noOfNotifications: number | null = null;

  constructor() {
    this.onNotificationReceive();
  }

  public onNotificationIconClick(): void {}

  public onNotificationReceive(): void {
    this.notifications.push({
      id: 1,
      message: 'Welcome to the One Piece Dashboard!',
      read: false,
    });
    this.notifications.push({
      id: 2,
      message: 'You have successfully singed in!',
      read: false,
    });
    this.notifications.push({
      id: 3,
      message: 'Lets create your profile first',
      read: false,
    });

    this.noOfNotifications = this.notifications.length;
  }

  public onNotificationItemClick(notification: NotificationI): void {
    const notificationItem = this.notifications.find(
      (item) => item.id === notification.id
    );
    if (notificationItem) {
      notificationItem.read = true;
    }
  }
}

interface NotificationI {
  id: number;
  message: string;
  read: boolean;
}
