export function getQuery(name: string): string {
  switch (name) {
    case 'USER':
      return `${process.env.RABBIT_MQ_USER_QUEUE}`;
    case 'AUTH':
      return `${process.env.RABBIT_MQ_AUTH_QUEUE}`;
    case 'WALLET':
      return `${process.env.RABBIT_MQ_WALLET_QUEUE}`;
    case 'BUDGET':
      return `${process.env.RABBIT_MQ__QUEUE}`;
    default:
      break;
  }
}
