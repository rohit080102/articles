class CommonConstant {
  constructor() { }
  public TOKEN: string = 'customerToken';
  public USER_DATA: string = 'userData';
  public HEADER_MENU: string = 'headerMenu';
  public SESSION_ID: string = 'sessionId';
  public IS_USER_LOGGED_IN: string = 'isUserLoggedIn';
  public IS_USER_LOG_OUT: string = 'isUserLogOut';
  public WISHLIST: string = 'wishlist';
  public ORDER_DETAILS = 'orderDetails';

  public authCheckURLS: string[] = ['/cart', '/checkout', '/wish-list', '/account', '/i/'];

}

export let common = new CommonConstant();
