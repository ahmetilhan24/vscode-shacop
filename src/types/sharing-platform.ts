export default interface ISharingPlatform {
  url: (msg?: string, user?: string) => string;
  name: string;
  icon?: string;
}
