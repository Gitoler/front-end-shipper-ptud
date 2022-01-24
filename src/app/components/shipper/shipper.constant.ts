declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
const ROUTES: RouteInfo[] = [
  {
    path: '/manage/shipper/profile',
    title: 'Thông tin cá nhân',
    icon: 'account_circle',
    class: '',
  },
  {
    path: '/manage/shipper/verify',
    title: 'Xác thực người dùng',
    icon: 'verified_user',
    class: '',
  },
  {
    path: '/manage/shipper/receiver',
    title: 'Tiếp nhận đơn hàng',
    icon: 'card_travel',
    class: '',
  },
  {
    path: '/manage/shipper/shipping',
    title: 'Vận đơn',
    icon: 'local_shipping',
    class: '',
  },
  {
    path: '/manage/shipper/income',
    title: 'Danh sách đơn hàng',
    icon: 'paid',
    class: '',
  },
  {
    path: '/manage/shipper/password',
    title: 'Thay đổi mật khẩu',
    icon: 'key',
    class: '',
  },
];

export { ROUTES };
