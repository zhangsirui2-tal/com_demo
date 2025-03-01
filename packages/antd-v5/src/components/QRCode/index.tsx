import { QRCode as AntdQRCode } from 'antd-v5';
import { withTheme } from '../../withTheme';

const QRCode = withTheme(AntdQRCode);

export default QRCode;
export type { QRCodeProps } from 'antd-v5';
