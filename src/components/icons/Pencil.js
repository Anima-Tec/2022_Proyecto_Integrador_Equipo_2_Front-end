import { theme } from 'config/theme';
import PropTypes from 'prop-types';

const { colors } = theme;

export function Pencil({ color = 'icon-black', ...rest }) {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      {...rest}
    >
      <path
        d="M2.72814 18.3115C4.10855 14.9149 7.54605 10.3067 10.4135 8.02698L12.1623 6.63626C12.3841 6.47795 12.6059 6.33738 12.8538 6.24128C12.8529 6.40087 12.8607 6.57824 12.8863 6.74684C12.9792 7.49214 13.311 8.18561 13.8996 8.78305C14.497 9.38941 15.2284 9.74829 15.979 9.85017C16.1556 9.86005 16.3323 9.87881 16.5091 9.8621C16.4103 10.1364 16.2586 10.3926 16.0718 10.6043L14.6833 12.3429C12.387 15.1934 7.7369 18.6065 4.34472 19.9434C3.82225 20.1354 3.31938 19.9906 3.00315 19.6607C2.66926 19.3308 2.51311 18.8245 2.72814 18.3115Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8543 6.24128C12.8599 5.26604 13.2364 4.33728 13.9385 3.63205C14.4807 3.09436 15.2163 2.72624 16.0917 2.61605L18.2669 2.38926C19.4517 2.26313 20.4621 3.27972 20.3138 4.48466L20.0627 6.66427C19.8394 8.60466 18.2152 9.83651 16.5007 9.86204C16.3239 9.86989 16.1384 9.85995 15.9706 9.85011C15.22 9.74823 14.4886 9.39822 13.8912 8.783C13.3026 8.18556 12.9708 7.49208 12.8779 6.74679C12.87 6.57828 12.8533 6.40973 12.8543 6.24128Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47142 9.01456C9.45811 11.3285 11.3206 13.2189 13.627 13.2323"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Pencil.propTypes = {
  color: PropTypes.string
};
