import PropTypes from 'prop-types'
import { useHover } from 'hooks/useHover'
import { x } from '@xstyled/styled-components'

export function Logo({ color, ...rest }) {
  const [hoverRef, isHovered] = useHover()

  return (
    <x.svg
      ref={hoverRef}
      width="550"
      height="550"
      viewBox="0 0 550 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <x.circle cx="275" cy="275" r="275" fill={isHovered ? 'white' : 'blue'} transition transitionDuration={300} />
      <g filter="url(#filter0_d_403_709)">
        <x.path
          d="M405.318 250.481C403.645 247.031 399.174 244.367 392.483 243.333C396.156 239.883 400.48 235.709 402.114 233.68C406.49 228.233 404.605 223.648 401.381 221.173C398.203 218.734 392.768 217.594 386.804 218.755C385.126 216.609 382.118 213.821 377.339 212.909C371.879 211.874 365.835 213.586 359.353 217.976C358.713 217.185 357.938 216.456 356.936 215.861C352.207 213.054 344.714 213.389 339.128 216.654C334.666 219.263 329.875 222.437 325.243 225.506C321.45 228.021 317.622 230.536 313.979 232.753C313.717 231.461 313.205 230.132 312.426 228.762C304.619 215.033 276.834 218.39 261.906 220.193L259.422 220.49C253.086 221.233 247.221 220.72 239.794 220.075C231.496 219.353 222.089 218.533 209.099 219.189C188.83 220.21 173.315 229.915 167.601 243.784C155.963 248.509 146.588 256.451 146.177 256.802C144.574 258.173 144.613 260.36 146.266 261.693C147.076 262.346 148.123 262.669 149.168 262.669C150.257 262.669 151.344 262.318 152.16 261.617C152.232 261.558 157.833 256.816 165.386 252.776C165.231 254.392 165.153 256.029 165.24 257.709C165.343 259.616 167.229 261.162 169.59 261.006C171.89 260.921 173.671 259.307 173.569 257.398C172.638 240.081 187.455 227.206 209.603 226.09C221.912 225.473 230.953 226.256 238.925 226.952C246.604 227.621 253.237 228.201 260.586 227.336L263.106 227.034C274.986 225.6 299.713 222.613 304.886 231.713C306.423 234.412 305.695 235.698 305.456 236.12C303.448 239.666 293.883 241.712 288.168 242.935C286.669 243.255 285.295 243.551 284.131 243.837C281.371 244.514 276.159 245.574 270.124 246.799C257.223 249.419 239.555 253.006 230.572 256C228.436 256.712 227.399 258.727 228.258 260.497C228.911 261.846 230.475 262.666 232.128 262.666C232.646 262.666 233.171 262.587 233.681 262.416C242.115 259.606 259.452 256.085 272.11 253.514C274.244 253.08 276.267 252.67 278.134 252.286C293.13 252.747 308.325 255.752 319.453 257.961C326.458 259.354 331.515 260.357 334.629 260.357C341.884 260.357 345.277 259.379 364.095 253.958L369.524 252.395C388.089 247.059 396.586 251.009 397.578 253.059C398.013 253.953 396.15 254.746 395.57 254.968C385.843 258.678 347.216 272.952 335.956 275.002C332.861 275.562 326.203 275.992 318.499 276.489C313.698 276.798 308.419 277.137 303.075 277.565C299.716 277.835 296.334 278.153 293.034 278.464C283.818 279.329 275.112 280.144 269.985 279.621C197.312 272.142 172.067 291.27 161.285 299.439C160.556 299.992 159.893 300.496 159.279 300.939C157.544 302.193 157.368 304.378 158.88 305.815C159.705 306.598 160.86 307 162.021 307C162.994 307 163.969 306.719 164.762 306.148C165.417 305.675 166.128 305.137 166.907 304.547C176.844 297.019 200.102 279.402 268.964 286.483C275.065 287.115 284.252 286.245 293.974 285.335C297.234 285.028 300.569 284.715 303.882 284.449C309.169 284.025 314.396 283.689 319.147 283.385C327.49 282.848 334.082 282.423 337.742 281.759C351.793 279.203 398.587 261.432 399.053 261.252C405.747 258.699 407.022 254.001 405.317 250.482L405.318 250.481ZM375.428 219.643C376.97 219.925 378.157 220.747 379.009 221.586C378.362 221.942 377.713 222.319 377.069 222.739C375.501 223.76 373.833 224.903 372.032 226.14C360.39 234.13 344.466 245.031 315.802 250.147C314.84 249.96 313.887 249.775 312.887 249.589C326.967 244.47 349.26 235.413 361.856 225.365C367.246 221.059 372.06 219.028 375.428 219.643L375.428 219.643ZM330.443 230.913C334.98 227.908 339.671 224.8 343.931 222.308C346.896 220.572 350.48 220.533 352.09 221.49C352.377 221.659 352.821 221.98 352.697 222.871C341.324 230.712 323.873 237.921 311.575 242.486C317.335 239.595 323.749 235.351 330.443 230.913L330.443 230.913ZM366.797 245.865L361.363 247.43C343.261 252.644 340.479 253.446 334.63 253.446C334.205 253.446 333.626 253.394 332.975 253.319C354.351 247.185 367.842 237.989 377.345 231.464C379.083 230.273 380.696 229.164 382.214 228.178C387.871 224.498 393.695 224.696 395.717 226.252C396.68 226.991 396.498 228.202 395.18 229.847C393.232 232.265 385.493 239.49 381.593 243.068C377.149 243.426 372.199 244.31 366.798 245.865L366.797 245.865Z"
          fill={isHovered ? 'blue' : 'white'}
          transition
          transitionDuration={300}
        />
      </g>
      <g filter="url(#filter1_d_403_709)">
        <x.path
          d="M274.308 89.7175C267.878 94.2775 263.705 97.9604 263.45 102.765C263.194 107.569 266.818 111.592 272.498 116.963C275.468 119.692 278.787 123.512 278.336 126.844C277.909 129.518 275.476 132.549 271.098 135.861C269.435 136.885 269.179 139.13 270.583 140.39C271.985 141.65 274.729 141.639 276.118 140.37C281.105 136.598 284.969 132.5 285.751 127.611C286.353 121.116 281.959 116.22 277.987 112.79C272.74 107.799 270.829 104.783 270.923 103.005C271.018 101.205 273.097 98.6672 279.155 94.3717C280.746 92.5623 280.67 91.3512 279.315 89.8032C277.616 88.6008 276.28 88.8974 274.31 89.7186L274.308 89.7175ZM253.233 101.997C248.362 105.374 244.983 108.161 244.768 112.118C244.553 116.075 247.536 119.179 251.832 123.15C253.801 124.955 256.238 127.449 255.919 129.722C255.651 131.364 254.045 133.442 250.839 135.814C249.177 136.828 248.9 139.059 250.28 140.327C251.662 141.594 254.39 141.616 255.802 140.371C259.621 137.546 262.694 134.442 263.332 130.538C263.939 125.032 260.412 121.606 257.261 118.93C253.416 115.341 252.193 113.277 252.24 112.406C252.288 111.519 253.582 109.815 258.078 106.698C259.706 105.138 259.527 103.146 258.178 101.98C256.847 100.876 254.72 101.387 253.233 101.997V101.997ZM294.332 101.997C289.461 105.374 286.082 108.161 285.867 112.118C285.652 116.075 288.635 119.179 292.931 123.15C294.9 124.955 297.337 127.449 297.018 129.722C296.749 131.364 295.144 133.442 291.938 135.814C290.275 136.828 289.999 139.059 291.379 140.327C292.76 141.594 295.489 141.616 296.9 140.371C300.72 137.546 303.792 134.442 304.431 130.538C304.791 125.507 301.511 121.606 298.36 118.93C294.515 115.341 293.292 113.277 293.339 112.406C293.387 111.519 294.681 109.815 299.177 106.698C300.774 104.948 300.834 103.561 299.561 102.198C297.826 100.914 296.405 101.134 294.332 101.998L294.332 101.997ZM274.658 147.326C235.45 147.326 203.669 153.511 203.669 161.14C203.669 163.382 206.506 165.456 211.376 167.327C212.776 164.045 216.414 162.123 219.723 160.852C224.146 159.169 229.838 157.857 236.069 156.775C248.531 154.609 263.075 153.466 272.788 153.466C282.502 153.466 297.046 154.609 309.507 156.775C315.738 157.859 321.43 159.169 325.853 160.852C329.866 162.435 334.169 165.049 334.435 168.575C341.49 166.428 345.644 163.877 345.644 161.14C345.644 153.511 313.862 147.326 274.656 147.326H274.658ZM272.789 159.605C263.822 159.605 249.41 160.715 237.588 162.771C231.676 163.799 226.393 165.078 222.876 166.417C220.851 167.158 219.31 167.933 218.264 169.486C223.95 170.937 231.011 172.165 239.163 173.084C239.1 172.143 238.748 171.914 237.879 171.596C236.904 171.24 234.952 171.119 232.858 171.692C230.959 172.377 228.43 171.439 227.778 169.821C227.126 168.204 228.5 166.268 230.522 165.888C234.048 164.991 237.753 164.856 240.913 165.983C244.549 167.65 246.561 170.769 246.577 173.801C255.197 174.524 264.671 174.952 274.657 174.952C286.016 174.952 296.72 174.387 306.24 173.465C305.767 170.03 309.671 167.07 314.004 166.51C318.725 166.205 323.091 167.338 323.053 171.21C324.619 170.925 326.119 170.657 327.549 170.347C326.928 168.143 324.712 167.186 322.704 166.413C319.187 165.075 313.904 163.795 307.992 162.767C296.169 160.714 281.756 159.604 272.791 159.604L272.789 159.605ZM277.459 161.955C280.664 161.955 283.855 163.255 285.458 165.889C286.554 167.334 285.794 169.493 283.94 170.254C282.085 171.015 279.552 170.211 278.803 168.623C278.271 167.75 276.649 167.75 276.117 168.623C275.367 170.211 272.834 171.016 270.981 170.254C269.126 169.493 268.367 167.334 269.463 165.889C271.065 163.256 274.255 161.955 277.461 161.955H277.459ZM257.144 162.483C259.268 163.181 261.581 164.466 261.581 167.28C261.547 168.695 260.186 170.017 258.488 170.254C256.79 170.491 254.942 169.615 254.342 168.287C252.82 169.231 250.414 168.972 249.206 167.759C247.998 166.546 248.187 164.577 249.615 163.539C252.239 161.794 254.222 161.82 257.145 162.483L257.144 162.483ZM299.587 162.483C302.183 162.838 303.934 163.944 305.308 165.073C306.742 166.195 306.759 168.281 305.366 169.438C302.193 170.804 301.024 169.792 298.478 168.67C297.755 170.301 295.162 171.141 293.283 170.349C291.404 169.557 290.691 167.321 291.882 165.889C293.998 163.487 296.52 162.509 299.589 162.483L299.587 162.483ZM205.537 168.239C209.871 177.98 220.992 190.059 229.823 191.311C254.109 196.078 295.207 196.078 319.493 191.311C328.323 190.059 339.445 177.98 343.779 168.239C338.129 171.12 331.072 172.847 325.74 173.899C312.479 176.48 294.501 178.025 274.66 178.025C256.791 177.697 240.033 177.059 223.581 173.899C217.096 172.421 210.743 170.983 205.542 168.239H205.537ZM210.791 182.485C206.238 184.849 203.668 187.923 203.668 191.838C203.668 202.582 235.451 208.723 274.657 208.723C313.863 208.723 345.646 202.583 345.646 191.838C345.646 187.922 343.076 184.849 338.523 182.485C333.201 187.888 327.019 193.116 320.134 194.333C294.975 199.227 254.339 199.227 229.179 194.333C220.673 192.27 214.859 187.043 210.79 182.485H210.791Z"
          fill={isHovered ? 'blue' : 'white'}
          transition
          transitionDuration={300}
        />
      </g>
      <x.path
        d="M204.984 368.031H211V392.531H204.984V368.031Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <x.path
        d="M204.984 402.031H211V426.531H204.984V402.031Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <x.path
        d="M204.984 402.031H211V426.531H204.984V402.031Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <x.path
        d="M229.969 420.984V427H205.469V420.984H229.969Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <x.path
        d="M410.591 427H403.545V375.068H391.159C388.015 375.068 385.487 375.551 383.574 376.517C381.661 377.464 380.269 378.809 379.398 380.551C378.527 382.294 378.091 384.33 378.091 386.659C378.091 388.989 378.517 390.996 379.369 392.682C380.241 394.348 381.623 395.636 383.517 396.545C385.43 397.455 387.939 397.909 391.045 397.909H406.727V404.273H390.818C386.311 404.273 382.608 403.525 379.71 402.028C376.812 400.513 374.663 398.43 373.261 395.778C371.86 393.127 371.159 390.087 371.159 386.659C371.159 383.231 371.86 380.172 373.261 377.483C374.663 374.794 376.822 372.682 379.739 371.148C382.655 369.595 386.386 368.818 390.932 368.818H410.591V427ZM383.205 400.864H391.159L377.068 427H368.886L383.205 400.864Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <x.path
        d="M247.091 368.818V427H240.045V368.818H247.091ZM279.172 427H261.217V368.818H279.967C285.611 368.818 290.441 369.983 294.456 372.312C298.471 374.623 301.549 377.947 303.689 382.284C305.829 386.602 306.899 391.773 306.899 397.795C306.899 403.856 305.82 409.074 303.661 413.449C301.501 417.805 298.357 421.157 294.229 423.506C290.1 425.835 285.081 427 279.172 427ZM268.263 420.75H278.717C283.528 420.75 287.515 419.822 290.678 417.966C293.84 416.11 296.198 413.468 297.751 410.04C299.304 406.612 300.081 402.53 300.081 397.795C300.081 393.098 299.314 389.055 297.78 385.665C296.246 382.256 293.954 379.642 290.905 377.824C287.856 375.987 284.058 375.068 279.513 375.068H268.263V420.75Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <x.path
        d="M186.568 427.182L169.295 378.205H168.614L151.341 427.182H143.955L165.318 369H172.591L193.955 427.182H186.568Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <x.path
        d="M351.568 427.182L334.295 378.205H333.614L316.341 427.182H308.955L330.318 369H337.591L358.955 427.182H351.568Z"
        fill={isHovered ? 'blue' : 'white'}
        transition
        transitionDuration={300}
      />
      <defs>
        <filter
          id="filter0_d_403_709"
          x="141"
          y="212.616"
          width="269"
          height="102.384"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_403_709" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_403_709" result="shape" />
        </filter>
        <filter
          id="filter1_d_403_709"
          x="199.668"
          y="89"
          width="149.978"
          height="127.723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_403_709" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_403_709" result="shape" />
        </filter>
      </defs>
    </x.svg>
  )
}

Logo.propTypes = {
  color: PropTypes.string,
}
