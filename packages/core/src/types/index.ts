import { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import React, {
  ChangeEvent,
  CSSProperties,
  MouseEvent,
  ReactElement,
  ReactNode,
  SetStateAction,
  Dispatch,
  ReactNodeArray,
  JSXElementConstructor,
} from "react";
import { StyleSheet } from "jss";

/**
 *
 *
 *  JSS Provider types
 *
 */

export interface SpecificityPluginProps {
  repeat?: number;
  selector?: string;
}

export type JssStyleSheet = StyleSheet & {
  options: {
    increaseSpecificity: boolean;
  };
};

/**
 *
 * Theme Specific Types
 *
 */
export interface ThemeProviderProps {
  children: any;
  withReset?: boolean;
  theme?: Partial<DefaultTheme>;
}

export interface PurpleMap {
  light: string;
  lightBase: string;
  base: string;
  dark: string;
  transparent: string;
}

export interface GreenMap {
  light: string;
  base: string;
}

export interface GreyMap {
  light: string;
  lightBase: string;
  base: string;
  dark: string;
  medium: string;
}

export interface RedMap {
  light: string;
  base: string;
}

export interface DefaultThemeColors {
  primary: PurpleMap;
  secondary: GreyMap;
  green: GreenMap;
  purple: PurpleMap;
  black: string;
  white: string;
  success: string;
  grey: GreyMap;
  red: RedMap;
  error: string;
}

export interface FontFamilies {
  body: string;
  headline: string;
}

export interface FontProperties {
  fontFamily: string;
  fontWeight: number | string;
  fontStyle?: string;
  fontSize: number | string;
  lineHeight: string;
  letterSpacing: string;
  textTransform?: string;
  color: string;
}

export interface FontStyles {
  title: FontProperties;
  heading2: FontProperties;
  heading3: FontProperties;
  heading4: FontProperties;
  heading5: FontProperties;
  heading6: FontProperties;
  body: FontProperties;
  body2: FontProperties;
}

export interface ResponsiveFonts {
  desktop: FontStyles;
  mobile: FontStyles;
}

export interface DefaultTypography {
  fontFamilies: FontFamilies;
  fontStyles: ResponsiveFonts;
}
export type CreateShadow = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
  i: number,
  j: number,
  k: number,
  l: number
) => string;

export type DefaultSpacing = {
  base: number;
};

export type DefaultShadows = Array<string>;

export interface DefaultZIndex {
  overlay: number;
}

export interface DefaultGradients {
  main: string;
  hover: string;
  disabled: string;
}

export type MediaQuery = (minWidth: number) => string;

export interface Breakpoints {
  small: number;
  medium: number;
  large: number;
}

export type DefaultTheme = {
  borderRadius: number;
  breakpoints: Breakpoints;
  mediaQuery: MediaQuery;
  colors: Partial<DefaultThemeColors>;
  gradients: Partial<DefaultGradients>;
  shadows: DefaultShadows;
  spacing: DefaultSpacing;
  typography: Partial<DefaultTypography>;
  zIndex: DefaultZIndex;
};

/**
 *
 * Button Component
 *
 */

export type ButtonVariant = "fit" | "full";

export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  variant?: ButtonVariant;
  onClick?: (e?: React.MouseEvent) => unknown;
  element?: keyof JSX.IntrinsicElements;
  to?: string;
  href?: string;
  className?: string;
  useSubmit?: boolean;
  submitText?: string;
  color?: "primary" | "secondary" | "light";
}

/**
 *
 * Typography Component
 *
 */

export interface TypographyProps {
  children: ReactNode;
  variant?:
    | "title"
    | "body"
    | "body2"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "span";
  className?: string;
  element?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: CSSProperties;
  color?: string;
  useUnescape?: boolean;
}

export type TypographyElementMap = Record<string, keyof JSX.IntrinsicElements>;

/**
 *
 * Fab (Floating Action Button) Component
 *
 */

export interface FabProps {
  className?: string;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  icon: any;
  title: string;
  size?: "small" | "large";
  onClick: (e: MouseEvent) => unknown;
  disabled?: boolean;
  disablePopOver?: boolean;
  color?: string;
  iconColor?: string;
}

/**
 *
 * Table Component
 *
 */
export interface HeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric?: boolean;
  width?: number | undefined;
}

export type TableData = Record<any, any>;

export type TableOrder = "asc" | "desc";
export interface DataTableProps {
  headCells: HeadCell[];
  rows: Array<Record<string | number, any>>;
  defaultSortColumn: string;
  tableTitle: string;
  actionToolbar: (props: any) => ReactElement;
}

export interface EnhancedTableProps {
  classes: ReturnType<any>;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: TableOrder;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
  tableTitle: string;
  actionToolbar: (props: any) => ReactElement;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}

/**
 *
 * Icon Component
 *
 */
export interface IconBaseProps {
  children: ReactElement;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 *
 * StatusIcon Component
 *
 */

export type PickStatus =
  | "graded_true"
  | "graded_false"
  | "disqualified"
  | "closed"
  | "pending";

export interface StatusIconProps {
  status: PickStatus;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export interface BaseFormikFields {
  id: string;
  name: string;
  field: FieldInputProps<any>;
  form: Record<any, any>;
}

export type BaseFormikHandleChange = (e: ChangeEvent) => unknown;

export interface BaseFormikFieldsWithHandleChange extends BaseFormikFields {
  handleChange: BaseFormikHandleChange;
}

/**
 *
 * TextInput Component
 *
 */
export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface TextInputProps extends BaseFormikFieldsWithHandleChange {
  className?: string;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  placeholder?: string;
  label?: string;
  type?: InputType;
}

/**
 *
 * Label Component
 *
 */
export interface LabelProps {
  htmlFor: string;
  children: string | ReactNode;
  className?: string;
  style?: React.CSSProperties;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
}

/**
 *
 * TextArea Component
 *
 */
export interface TextAreaProps extends BaseFormikFieldsWithHandleChange {
  className?: string;
  style?: React.CSSProperties;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  label?: string;
}

/**
 *
 * Select Component
 *
 */ export interface SelectItem {
  label: string;
  value: string;
}

export type BaseFormikSetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => unknown;

export interface SelectProps extends BaseFormikFields {
  className?: string;
  items: SelectItem[];
  label: string;
  placeholder?: string;
  style?: React.CSSProperties;
}

export interface DropdownStyleProps {
  isOpen: boolean;
}

/**
 *
 * NestedInput Component
 *
 */
export interface NestedInputProps extends BaseFormikFieldsWithHandleChange {
  buttonText: string;
  placeholder: string;
  label?: string;
  usePhoneNumber?: boolean;
  useVerificationCode?: boolean;
  disabled?: boolean;
  useSubmit?: boolean;
  onClick?: () => void;
}

/**
 *
 * MultiSelect Component
 *
 */
export interface MultiSelectProps extends BaseFormikFields {
  items: SelectItem[];
  label: string;
}

/**
 *
 * Individual Icon Component
 *
 */
export interface IconProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 *
 * Chip Component
 *
 */
export interface ChipProps {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => unknown;
  color?: "default" | "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  label: string;
  element?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
  href?: string;
  to?: string;
}

/**
 *
 * Paper Component
 *
 */
export interface PaperProps {
  padding?: number;
  children: unknown;
  style?: React.CSSProperties;
  className?: string;
  withLogo?: boolean;
}

/**
 *
 * FormError Component
 *
 */
export interface FormErrorProps {
  errors: FormikErrors<unknown>;
  touched: FormikTouched<unknown>;
  name: string;
}

/**
 *
 * Loader Component
 *
 */
export interface LoaderProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  text?: string;
}

/**
 *
 * Picker Button
 *
 */
export interface PickerButtonProps {
  className?: string;
  displayText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  showResult?: boolean;
  result: number | null;
  isPick?: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

/**
 *
 * Progress Button
 *
 */

export interface LinkObject {
  pathname: string;
  state: Record<string, unknown>;
}

export interface ProgressButtonProps {
  status:
    | "Available Now"
    | "Not Enough Points"
    | "Already Redeemed"
    | "Ready to Redeem";
  prizeEnv?: boolean;
  cost: number;
  fanPoints: number;
  href?: string;
  onClick?: (e?: React.MouseEvent) => unknown;
  to?: LinkObject | string;
  useSubmit?: boolean;
  className?: string;
}

/**
 * Hero Component
 *
 */
export interface Eyebrow {
  name: string;
  description: string;
}
export interface HeroProps {
  eyebrow?: Eyebrow;
  title: React.ReactText;
  description: React.ReactText;
  image_src: string;
  image_alt: string;
  chip?: string;
  crumbs?: Array<Path>;
}

/**
 * Card Component
 *
 */
export interface CardProps {
  image: string;
  eyebrow: Eyebrow;
  heading: string;
  description: string;
  buttonProps: ProgressButtonProps;
}

/**
 * Dropdown Component
 *
 */
export interface DropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactElement | Array<React.ReactElement>;
  className?: string;
  color?: "default" | "primary" | "secondary";
  disabled?: boolean;
}

/**
 * HorizontalRule Component
 *
 */
export interface HorizontalRuleProps {
  showBolt?: boolean;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

/**
 * FeedCard Component
 */
export interface PublisherIconProps {
  publisher_logo_url: string | null;
  size?: "small" | "large";
}
export interface Picks {
  label: string;
  value: string;
}
export interface FeedCardProps {
  image: string;
  publisherIcon: string;
  publisherName: string;
  publishedAt: string;
  title: string;
  timeLeft: Date;
  pickCount: number;
  picks?: Picks[];
  buttonProps?: ButtonProps;
  expanded: boolean;
}

export interface BoltProps {
  fill: string;
}

/**
 * Countdown Props
 */
export interface CountdownProps {
  close_at: Date;
  has_fan_pick: number;
}

export interface SliderProps {
  children?: ReactNodeArray;
}

export interface CheckBoxProps {
  checked?: boolean;
  onChange: (internal: boolean) => void;
}

// Breadcrumbs

export interface Path {
  name: string;
  path: string;
}

export interface BreadcrumbsProps {
  crumbs: Array<Path>;
  className?: string;
}
