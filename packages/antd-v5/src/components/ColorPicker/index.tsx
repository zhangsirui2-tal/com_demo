import { ColorPicker as AntdColorPicker } from 'antd-v5';
import { withTheme } from '../../withTheme';

const ColorPicker = withTheme(AntdColorPicker);

export default ColorPicker;
export type { ColorPickerProps } from 'antd-v5';
