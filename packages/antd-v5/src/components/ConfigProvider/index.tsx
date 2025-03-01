import { ConfigProvider as AntdConfigProvider } from 'antd-v5';
import { withTheme } from '../../withTheme';

const ConfigProvider = withTheme(AntdConfigProvider);

export default ConfigProvider;
export type { ConfigProviderProps } from 'antd-v5';
